# SOLARIA Digital Field Operations - Manual de Operación

**Versión:** 3.5.1
**Última actualización:** 2025-12-27

---

## Propósito

SOLARIA DFO es una **Oficina Digital de Construcción en Campo** centralizada que permite:

1. **Gestión de proyectos** de software con metodología ágil
2. **Coordinación de agentes IA** especializados trabajando simultáneamente
3. **Memoria persistente** de decisiones y contexto entre sesiones
4. **Dashboards ejecutivos** para CEO, CTO, COO y CFO
5. **Integración vía MCP** con cualquier agente compatible

**Filosofía:** Oficina temporal y desmantelable que no contamina el proyecto construido.

---

## Servidor de Producción

**SOLARIA DFO está desplegado de forma centralizada:**

| Recurso | URL |
|---------|-----|
| Dashboard (React) | https://dfo.solaria.agency |
| Dashboard (Legacy) | https://dfo.solaria.agency/legacy |
| API (Auth) | https://dfo.solaria.agency/api |
| API Pública | https://dfo.solaria.agency/api/public |
| MCP HTTP | https://dfo.solaria.agency/mcp |
| Health Check | https://dfo.solaria.agency/mcp/health |

**Credenciales Dashboard:**
- Usuario: `carlosjperez`
- Password: `bypass`

**Servidor VPS:** 148.230.118.124 (Hostinger)

---

## Arquitectura v3.5 (Centralizada Multi-Servicio)

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Proyecto A    │     │   Proyecto B    │     │   Proyecto C    │
│  (MCP Client)   │     │  (MCP Client)   │     │  (MCP Client)   │
└────────┬────────┘     └────────┬────────┘     └────────┬────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    HTTPS (dfo.solaria.agency)
                                 │
                                 ▼
┌────────────────────────────────────────────────────────────────────┐
│               VPS Hostinger (148.230.118.124)                      │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐         │
│  │    Nginx     │───►│  MCP HTTP    │───►│   Dashboard  │         │
│  │   (80/443)   │    │   (:3031)    │    │   (:3030)    │         │
│  └──────┬───────┘    └──────────────┘    └──────┬───────┘         │
│         │                                        │                 │
│         │                  ┌─────────────────────┼─────┐           │
│         │                  │                     │     │           │
│         │           ┌──────▼───────┐    ┌───────▼─────▼─┐         │
│         │           │   MariaDB    │    │     Redis     │         │
│         │           │  (embedded)  │    │   (cache)     │         │
│         │           └──────────────┘    └───────┬───────┘         │
│         │                                       │                 │
│         │                                ┌──────▼───────┐         │
│         │                                │    Worker    │         │
│         │                                │  (BullMQ)    │         │
│         │                                └──────────────┘         │
│         │                                                          │
│         ▼                                                          │
│  ┌──────────────┐    ┌──────────────────────────────┐            │
│  │     n8n      │◄───│   Webhook Event System       │            │
│  │ Automation   │    │   - 14 event types           │            │
│  │   Platform   │    │   - HMAC SHA-256 signatures  │            │
│  └──────────────┘    │   - Async queue + retry      │            │
│                      └──────────────────────────────┘            │
└────────────────────────────────────────────────────────────────────┘
```

### Servicios

| Servicio | Puerto | Descripción |
|----------|--------|-------------|
| office | 3030, 33060 | Dashboard + API + MariaDB |
| redis | 6379 | Cache y colas BullMQ |
| worker | - | Procesador de webhooks en background |
| nginx | 80/443 | Reverse proxy + SSL |
| n8n | 5678 | Workflow automation platform |

---

## Funcionalidad Completa

### 1. Jerarquía de Proyectos

```
Project
  ├── Sprints (Fases del proyecto)
  │   ├── Epic 1 (Grupo de funcionalidades)
  │   │   ├── Task 1
  │   │   │   ├── Subtask 1.1
  │   │   │   ├── Subtask 1.2
  │   │   │   └── Subtask 1.3
  │   │   └── Task 2
  │   └── Epic 2
  └── Sprint 2
```

**Beneficios:**
- Organización clara de fases del proyecto
- Agrupación de tareas por funcionalidad
- Desglose granular de trabajo
- Progreso automático (task progress = % subtasks completadas)

### 2. Sistema de Dependencias

**4 tipos de relaciones entre tareas:**

| Tipo | Descripción | Uso |
|------|-------------|-----|
| **blocks** | Tarea A bloquea Tarea B | B no puede empezar hasta que A termine |
| **depends_on** | Tarea A depende de Tarea B | A necesita que B esté completada |
| **relates_to** | Tarea A relacionada con Tarea B | Información, no bloqueo |
| **duplicates** | Tarea A duplica Tarea B | Identificar redundancia |

**Características:**
- Detección automática de ciclos
- Visualización de árbol de dependencias
- Filtrado automático de tareas bloqueadas

### 3. Ready Tasks (Priorización Inteligente)

Algoritmo de scoring que evalúa qué tareas están listas para trabajar:

**Readiness Score (0-100):**
```
Score = 50 (base)
  + priority_boost    // +30 critical, +20 high, +10 medium
  + sprint_boost      // +15 si sprint activo
  + agent_boost       // +5 si asignada
  + estimation_boost  // +5 si estimada
  + deadline_boost    // +10 si vence <7 días
  + dependency_boost  // +5 si sin bloqueadores
```

**Resultado:**
- Solo muestra tareas sin bloqueadores activos
- Ordena por readiness score
- Incluye razones del scoring

### 4. Sistema de Webhooks

**14 tipos de eventos automáticos:**

| Evento | Cuándo se dispara |
|--------|-------------------|
| `task.created` | Nueva tarea creada |
| `task.updated` | Tarea modificada |
| `task.completed` | Tarea completada |
| `task.deleted` | Tarea eliminada |
| `project.created` | Nuevo proyecto |
| `project.updated` | Proyecto modificado |
| `agent.status_changed` | Estado de agente cambia |
| `memory.created` | Nueva memoria guardada |
| `sprint.created` | Nuevo sprint creado |
| `sprint.completed` | Sprint completado |
| `epic.created` | Nuevo epic creado |
| `document.created` | Documento creado |
| `alert.triggered` | Alerta crítica |
| `backup.completed` | Backup finalizado |

**Características:**
- HMAC SHA-256 signature verification
- Async queue con retry logic
- Rate limiting por webhook
- Deduplicación de eventos
- Delivery status tracking

### 5. Integración n8n

**Workflow automation platform** conectada vía webhooks.

**Casos de uso típicos:**
- Notificaciones Slack al completar tareas
- Emails al crear tareas críticas
- Sincronización con CRM externo
- Backups automáticos
- Generación de reportes

**Importar workflows:**
```bash
# Dashboard n8n: https://n8n.solaria.agency
# Importar workflows desde mcp-server/n8n-workflows/*.json
```

### 6. Memoria Persistente (Vector + Full-Text)

Sistema de memoria con búsqueda semántica y full-text:

**Capacidades:**
- Búsqueda vectorial (embeddings)
- Búsqueda full-text (keywords)
- Tags para categorización
- Importance scoring (0-1)
- Cross-references entre memorias
- Access tracking (conteo de uso)

**Tags predefinidos:**
`decision`, `learning`, `context`, `requirement`, `bug`, `solution`, `pattern`, `config`, `credential`, `todo`, `meeting`, `feedback`

### 7. Dashboards Ejecutivos (C-Suite)

**4 vistas especializadas:**

| Vista | Enfoque | Datos |
|-------|---------|-------|
| **CEO** | Strategic Overview | Revenue, clients, projects, ROI |
| **CTO** | Technology Stack | Architecture, tech debt, agent performance |
| **COO** | Operations | Task velocity, resource allocation, bottlenecks |
| **CFO** | Financial Health | Budget, burn rate, profitability |

**Endpoints:**
- `GET /api/csuite/ceo`
- `GET /api/csuite/cto`
- `GET /api/csuite/coo`
- `GET /api/csuite/cfo`

### 8. API Estandarizada (JSON-First)

**Todas las responses siguen el mismo patrón:**

```typescript
// Success
{
  success: true,
  data: { /* resultado */ },
  metadata: {
    timestamp: "2025-12-27T10:30:00Z",
    request_id: "uuid",
    execution_time_ms: 45,
    version: "3.5.1"
  },
  format: "json" | "human",
  formatted: "texto legible" // opcional
}

// Error
{
  success: false,
  error: {
    code: "TASK_NOT_FOUND",
    message: "The task with ID 123 was not found",
    details: { task_id: 123 },
    suggestion: "Verify the task ID exists using list_tasks"
  },
  metadata: { /* ... */ }
}
```

**Beneficios:**
- Parsing programático confiable
- Error handling robusto
- Metadata para debugging
- Dual format (JSON + human)

---

## MCP Integration (Para Agentes IA)

### Configuración Rápida

Editar `~/.claude/claude_code_config.json`:

```json
{
  "mcpServers": {
    "solaria-dfo": {
      "transport": {
        "type": "http",
        "url": "https://dfo.solaria.agency/mcp"
      },
      "headers": {
        "Authorization": "Bearer default"
      }
    }
  }
}
```

### Herramientas MCP Disponibles (70+)

#### Gestión de Proyectos
- `set_project_context` - **OBLIGATORIO** Registrar proyecto
- `get_current_context` - Verificar contexto actual
- `list_projects` - Listar todos los proyectos
- `get_project` - Detalle de un proyecto
- `create_project` - Crear nuevo proyecto
- `update_project` - Actualizar proyecto
- `get_project_client` - Info del cliente
- `update_project_client` - Actualizar cliente
- `get_project_documents` - Documentos del proyecto
- `create_project_document` - Agregar documento
- `get_project_requests` - Peticiones del cliente
- `create_project_request` - Registrar petición

#### Sprints y Epics
- `list_sprints` - Listar sprints (fases)
- `create_sprint` - Crear nuevo sprint
- `update_sprint` - Actualizar sprint
- `delete_sprint` - Eliminar sprint
- `list_epics` - Listar epics (grupos de funcionalidad)
- `create_epic` - Crear nuevo epic
- `update_epic` - Actualizar epic
- `delete_epic` - Eliminar epic

#### Tareas
- `list_tasks` - Listar tareas (filtros: status, priority, agent, sprint, epic)
- `get_task` - Detalle de una tarea
- `create_task` - Crear nueva tarea
- `update_task` - Actualizar tarea
- `complete_task` - Marcar como completada
- `delete_task` - Eliminar tarea
- `get_ready_tasks` - **Tareas listas con scoring inteligente**

#### Subtareas (Task Items)
- `list_task_items` - Listar subtareas de una tarea
- `create_task_items` - Crear múltiples subtareas
- `complete_task_item` - Marcar subtarea completada
- `update_task_item` - Actualizar subtarea
- `delete_task_item` - Eliminar subtarea

#### Dependencias
- `create_task_dependency` - Crear relación entre tareas
- `list_task_dependencies` - Ver dependencias de una tarea
- `delete_task_dependency` - Eliminar dependencia
- `get_dependency_tree` - Visualizar árbol completo

#### Memoria
- `memory_create` - Guardar decisión/contexto
- `memory_list` - Listar memorias (filtros: tags, query)
- `memory_get` - Obtener memoria por ID
- `memory_search` - Búsqueda full-text
- `memory_semantic_search` - Búsqueda vectorial semántica
- `memory_update` - Actualizar memoria
- `memory_delete` - Eliminar memoria
- `memory_boost` - Aumentar importancia
- `memory_tags` - Ver tags disponibles
- `memory_stats` - Estadísticas de uso
- `memory_related` - Memorias relacionadas
- `memory_link` - Crear cross-reference

#### Documentos Inline
- `create_inline_document` - Guardar documento markdown
- `get_inline_document` - Leer documento
- `update_inline_document` - Actualizar (crea nueva versión)
- `list_inline_documents` - Listar documentos
- `delete_inline_document` - Eliminar documento
- `search_documents` - Búsqueda full-text

#### Webhooks
- `list_webhooks` - Listar webhooks configurados
- `create_webhook` - Crear nuevo webhook
- `update_webhook` - Actualizar webhook
- `delete_webhook` - Eliminar webhook
- `test_webhook` - Probar entrega
- `get_webhook_deliveries` - Ver historial de entregas
- `retry_webhook_delivery` - Reintentar entrega fallida

#### Agentes
- `list_agents` - Listar agentes IA
- `get_agent` - Detalle de un agente
- `get_agent_tasks` - Tareas asignadas a agente
- `update_agent_status` - Cambiar estado (active/busy/inactive)

#### Dashboard
- `get_dashboard_overview` - KPIs ejecutivos
- `get_dashboard_alerts` - Alertas activas

#### Logs
- `get_activity_logs` - Historial de actividad
- `log_activity` - Registrar actividad manual

---

## Protocolo de Inicialización de Agentes (OBLIGATORIO)

### Paso 1: Registrar Contexto
```javascript
// PRIMERA llamada obligatoria al inicio de sesión
set_project_context({ project_name: "Nombre del Proyecto" })
```

### Paso 2: Cargar Memoria Relevante
```javascript
// Buscar decisiones y contexto previo
memory_search({
  query: "arquitectura decisiones contexto",
  tags: ["decision", "context"]
})
```

### Paso 3: Verificar Tareas en Progreso
```javascript
// Ver tareas in_progress PRIMERO (Lección L-001)
const inProgress = list_tasks({ status: "in_progress" })

// Luego tareas ready (con scoring inteligente)
const ready = get_ready_tasks({ priority: "high", limit: 5 })

// Cargar subtareas de tareas en progreso
for (task of inProgress) {
    list_task_items({ task_id: task.id, include_completed: false })
}
```

### Paso 4: Al Tomar Nueva Tarea - CREAR DESGLOSE

```javascript
// Actualizar estado
update_task({ task_id: 123, status: "in_progress" })

// OBLIGATORIO: Crear desglose granular
create_task_items({
    task_id: 123,
    items: [
        { title: "Analizar requisitos y código existente", estimated_minutes: 30 },
        { title: "Diseñar solución técnica", estimated_minutes: 45 },
        { title: "Implementar cambios en [archivo]", estimated_minutes: 60 },
        { title: "Agregar/actualizar tests", estimated_minutes: 30 },
        { title: "Documentar cambios", estimated_minutes: 15 },
        { title: "Verificar y limpiar código", estimated_minutes: 15 }
    ]
})
```

### Paso 5: Actualizar Progreso

```javascript
// Al completar cada subtarea
complete_task_item({
    task_id: 123,
    item_id: 456,
    notes: "Implementado correctamente, tests pasan",
    actual_minutes: 45
})
// → Progreso del task padre se actualiza AUTOMÁTICAMENTE
```

### Paso 6: Guardar Contexto de Sesión

```javascript
// Al finalizar sesión, guardar resumen
memory_create({
    content: "Completé task #123 (FormularioContacto). Implementado con Zod + honeypot. Pending: integración con CRM.",
    tags: ["session", "context"],
    importance: 0.6
})
```

---

## Desarrollo Local

```bash
# 1. Clonar repositorio
git clone https://github.com/carlosjperez/SOLARIA-DFO.git
cd SOLARIA-DFO

# 2. Configurar credenciales
cp .env.example .env
# Editar .env (NUNCA usar caracteres especiales en passwords)

# 3. Levantar servicios
docker compose up -d

# 4. Verificar estado
curl http://localhost:3030/api/health

# 5. Acceder al dashboard
open http://localhost:3030
# Usuario: carlosjperez
# Password: bypass
```

---

## Deploy a Producción

### React Dashboard
```bash
cd dashboard/app
pnpm build
rsync -avz --delete dist/ root@148.230.118.124:/var/www/dfo-v2/
ssh -i ~/.ssh/id_ed25519 root@148.230.118.124 "docker exec solaria-dfo-nginx nginx -s reload"
```

### Backend (server.ts)
```bash
cd dashboard
pnpm build
rsync -avz dist/ root@148.230.118.124:/var/www/solaria-dfo/dashboard/dist/
ssh -i ~/.ssh/id_ed25519 root@148.230.118.124 "docker restart solaria-dfo-office"
```

---

## API Endpoints Principales

### Autenticación
```
POST /api/auth/login     - Login
GET  /api/auth/verify    - Verificar token
POST /api/auth/logout    - Logout
```

### Proyectos y Organización
```
GET    /api/projects          - Listar proyectos
POST   /api/projects          - Crear proyecto
GET    /api/projects/:id      - Detalle
PUT    /api/projects/:id      - Actualizar
GET    /api/sprints           - Listar sprints
POST   /api/sprints           - Crear sprint
GET    /api/epics             - Listar epics
POST   /api/epics             - Crear epic
```

### Tareas
```
GET    /api/tasks             - Listar tareas
GET    /api/tasks/ready       - Tareas listas (scoring)
POST   /api/tasks             - Crear tarea
GET    /api/tasks/:id         - Detalle
PUT    /api/tasks/:id         - Actualizar
GET    /api/tasks/:id/items   - Listar subtareas
POST   /api/tasks/:id/items   - Crear subtareas
```

### Memoria
```
GET    /api/memories              - Listar
GET    /api/memories/search       - Búsqueda full-text
POST   /api/memories/semantic     - Búsqueda vectorial
POST   /api/memories              - Crear
PUT    /api/memories/:id          - Actualizar
DELETE /api/memories/:id          - Eliminar
```

### Webhooks
```
GET    /api/webhooks              - Listar
POST   /api/webhooks              - Crear
PUT    /api/webhooks/:id          - Actualizar
DELETE /api/webhooks/:id          - Eliminar
POST   /api/webhooks/:id/test     - Probar
GET    /api/webhooks/:id/deliveries - Ver entregas
```

### Dashboards Ejecutivos
```
GET /api/csuite/ceo           - Vista CEO
GET /api/csuite/cto           - Vista CTO
GET /api/csuite/coo           - Vista COO
GET /api/csuite/cfo           - Vista CFO
```

---

## Características Técnicas

### Seguridad
- JWT authentication (24h expiry)
- HMAC SHA-256 webhook signatures
- Rate limiting
- Helmet security headers
- CORS configurado
- HTTPS obligatorio en producción

### Performance
- Redis caching
- BullMQ async queue
- WebSocket real-time updates
- Query optimization
- Index coverage >90%

### Reliability
- DB retry logic (10 intentos, backoff exponencial)
- Health checks automáticos cada 30s
- Webhook retry con exponential backoff
- Reconnection automática MariaDB

### Testing
- 210+ tests
- >75% coverage
- Playwright E2E tests
- API integration tests

---

## Troubleshooting

### Dashboard no arranca
```bash
docker compose logs office
# Esperar 30-45 segundos para MariaDB initialization
```

### Base de datos no conecta
```bash
docker compose restart office
# Si persiste:
docker compose down -v && docker compose up -d
```

### Webhook no entrega
```bash
# Ver deliveries
curl https://dfo.solaria.agency/api/webhooks/1/deliveries

# Reintentar entrega
curl -X POST https://dfo.solaria.agency/api/webhooks/deliveries/123/retry
```

### Tests fallan
```bash
curl http://localhost:3030/api/health
docker compose ps
pnpm test
```

---

## Lecciones Aprendidas

### L-001: Verificar in_progress antes de pending

**Problema:** Al buscar tareas con `list_tasks({ status: "pending" })` se omiten las in_progress.

**Solución:**
```javascript
// Flujo correcto:
// 1. Establecer contexto
set_project_context({ project_id: X })

// 2. Ver qué hay en progreso PRIMERO
list_tasks({ status: "in_progress" })

// 3. Luego ver ready (con scoring)
get_ready_tasks()
```

**Regla:** SIEMPRE verificar `in_progress` antes de tomar nueva tarea.

---

## Notas para Agentes IA

1. **MCP Remoto**: `https://dfo.solaria.agency/mcp`
2. **Dashboard**: `https://dfo.solaria.agency` (carlosjperez/bypass)
3. **Color SOLARIA**: #f6921d (naranja)
4. **Nomenclatura agentes**: SOLARIA-PM, SOLARIA-ARCH, SOLARIA-DEV-01
5. **Docker comando**: `docker compose` (no `docker-compose`)
6. **Puerto principal**: 3030
7. **SIEMPRE** guardar decisiones en memoria
8. **SIEMPRE** verificar in_progress antes de pending
9. **SIEMPRE** crear subtareas al tomar task
10. **SIEMPRE** usar `get_ready_tasks` para priorizar

### Verificar Conexión MCP

```bash
# Health check
curl https://dfo.solaria.agency/mcp/health

# Listar herramientas
curl -X POST https://dfo.solaria.agency/mcp \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer default" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

---

## Acceso SSH al Servidor

```bash
ssh -i ~/.ssh/id_ed25519 root@148.230.118.124
```

| Parámetro | Valor |
|-----------|-------|
| Host | 148.230.118.124 |
| Usuario | root |
| Clave | `~/.ssh/id_ed25519` |
| Provider | Hostinger VPS |

### Certificados SSL

**Ubicación:** `/etc/letsencrypt/live/`

| Dominio | Estado |
|---------|--------|
| dfo.solaria.agency | ✓ Activo |
| office.solaria.agency | ✓ Activo |
| prilabsa.solaria.agency | ✓ Activo |

---

## Protocolo de Desmantelamiento

```bash
# 1. Exportar datos
docker exec office mariadb -uroot -pSolariaRoot2024 solaria_construction \
  -e "SELECT * FROM projects" > backup.sql

# 2. Detener servicios
docker compose down

# 3. Eliminar volúmenes (opcional)
docker compose down -v
```

---

**SOLARIA Digital Field Operations**
**Manual de Operación v3.5.1**

© 2024-2025 SOLARIA AGENCY

---

**Nota para desarrolladores:** Si necesitas entender el PROCESO de construcción del DFO (sprints, decisiones arquitectónicas, specs técnicas), consulta `docs/DEVELOPMENT-HISTORY.md`. Este documento es el MANUAL DE OPERACIÓN del producto final.
