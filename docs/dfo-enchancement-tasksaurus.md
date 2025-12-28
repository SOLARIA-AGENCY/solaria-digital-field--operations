# DFO Enhancement Plan - Taskosaur Integration

**Versión:** 1.0
**Fecha:** 2025-12-28
**Fuente:** [Taskosaur GitHub Repository](https://github.com/Taskosaur/Taskosaur/)
**Proyecto:** SOLARIA DFO MCP Server

---

## Tabla de Contenidos

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Análisis de Taskosaur](#análisis-de-taskosaur)
3. [Características Adoptadas](#características-adoptadas)
4. [Roadmap de Implementación](#roadmap-de-implementación)
5. [Instrucciones para Crear Sprint/Epics/Tasks en DFO](#instrucciones-para-crear-sprintepicstasks-en-dfo)
6. [Especificaciones Técnicas](#especificaciones-técnicas)
7. [Referencias](#referencias)

---

## Resumen Ejecutivo

### Contexto

Taskosaur es una plataforma de gestión de proyectos self-hosted con IA conversacional, construida con NestJS + Next.js + PostgreSQL. Este documento analiza las características de Taskosaur que pueden mejorar SOLARIA DFO.

### Decisiones

| Feature | Decisión | Sprint | Esfuerzo |
|---------|----------|--------|----------|
| AutomationRule System | ✅ ADOPTAR | Sprint 2 | 3-5 días |
| Hierarchical Task Types | ✅ ADOPTAR | Sprint 3 | 3-4 días |
| Story Points + Velocity | ✅ ADOPTAR | Sprint 3-4 | 1-2 días |
| CustomField System | ✅ ADOPTAR | Sprint 5-6 | 6-8 días |
| Advanced Dependencies | ⚠️ EVALUAR | Sprint 4-5 | 2-3 días |
| Workflow Templates | ⚠️ EVALUAR | Sprint 6-7 | 4-5 días |
| Email-to-Task | ❌ RECHAZADO | - | - |
| Conversational AI | ❌ FUERA SCOPE | - | - |

**Total esfuerzo adoptado:** 13-19 días (2.6-3.8 semanas)

---

## Análisis de Taskosaur

### Stack Tecnológico

```
Backend:  NestJS + TypeScript
Frontend: Next.js + React + TailwindCSS
Database: PostgreSQL + Prisma ORM
Cache:    Redis
Queue:    BullMQ
Auth:     JWT + OAuth
```

### Características Clave Identificadas

#### 1. AutomationRule System ⭐⭐⭐⭐⭐

**Descripción:** Sistema de triggers y actions para automatizar workflows

**Modelo Prisma:**
```prisma
model AutomationRule {
  id                String      @id @default(uuid())
  name              String
  description       String?
  isActive          Boolean     @default(true)
  triggerType       TriggerType
  triggerConfig     Json
  actionType        ActionType
  actionConfig      Json
  lastTriggered     DateTime?
  executionCount    Int         @default(0)
  createdAt         DateTime    @default(now())
  updatedAt         DateTime    @updatedAt
}

enum TriggerType {
  TASK_CREATED
  TASK_UPDATED
  TASK_STATUS_CHANGED
  TASK_ASSIGNED
  TASK_DUE_SOON
  SPRINT_STARTED
  SPRINT_ENDING
}

enum ActionType {
  ASSIGN_USER
  UPDATE_STATUS
  ADD_TAG
  SEND_NOTIFICATION
  CREATE_TASK
  UPDATE_FIELD
}
```

**Casos de uso SOLARIA:**
- Auto-asignar tareas `lead.created` a Agent ID 11 (Claude Code)
- Mover tareas a `in_progress` cuando se acepta asignación
- Notificar cuando tareas críticas bloqueadas >24h
- Auto-crear subtareas cuando epic cambia a `in_progress`
- Escalar prioridad si tarea pending >7 días

**Valor:**
- **ROI inmediato:** Ahorra 2-3 horas/semana de trabajo manual
- **Consistencia:** No se olvidan pasos en workflows
- **Escalabilidad:** Más proyectos sin más overhead humano

---

#### 2. Hierarchical Task Types ⭐⭐⭐⭐

**Descripción:** Tipos de tareas jerárquicos (EPIC/STORY/TASK/SUBTASK/BUG)

**Modelo Prisma:**
```prisma
enum TaskType {
  EPIC      // Features grandes, múltiples sprints
  STORY     // User story ágil, unidad de valor
  TASK      // Trabajo específico técnico
  SUBTASK   // Desglose granular de task
  BUG       // Fix de defecto
}

model Task {
  id           String    @id @default(uuid())
  type         TaskType  @default(TASK)
  parentTask   Task?     @relation("TaskHierarchy", fields: [parentTaskId], references: [id])
  parentTaskId String?
  children     Task[]    @relation("TaskHierarchy")
  // ... otros campos
}
```

**Ejemplo jerarquía PRILABSA:**
```
EPIC: Sistema de Lead Forms
├── STORY: Como visitante quiero enviar formulario contacto
│   ├── TASK: Implementar validación Zod
│   │   ├── SUBTASK: Schema email/phone
│   │   └── SUBTASK: Mensajes error ES/EN
│   ├── TASK: Integrar Google reCAPTCHA
│   └── TASK: Conectar API Mailchimp
├── STORY: Como admin quiero ver leads en dashboard
│   └── TASK: UI tabla leads con filtros
└── BUG: Formulario no valida números mexicanos
```

**Valor:**
- **Granularidad flexible:** Descomponer según complejidad
- **Tracking bugs separado:** No mezclar features con fixes
- **Alineación Agile:** User stories como unidad de valor

---

#### 3. Story Points + Velocity Tracking ⭐⭐⭐⭐

**Descripción:** Estimación por puntos Fibonacci + tracking de velocity por sprint

**Modelo Prisma:**
```prisma
model Task {
  id            String  @id @default(uuid())
  storyPoints   Int?    // 1, 2, 3, 5, 8, 13, 21
  // ... otros campos
}

model Sprint {
  id              String  @id @default(uuid())
  plannedVelocity Int?    // Puntos planificados
  actualVelocity  Int?    // Puntos completados real
  // ... otros campos
}
```

**Fibonacci Points:** 1, 2, 3, 5, 8, 13, 21

**Ejemplo Sprint Planning:**
```
Sprint 3 - Plannig:
- Team velocity histórico: 25 points/sprint
- Tareas backlog:
  ✓ AUTH-101 (5 pts) - Sistema login
  ✓ AUTH-102 (3 pts) - Password reset
  ✓ DASH-201 (8 pts) - Dashboard stats
  ✓ DASH-202 (13 pts) - Analytics gráficos
  → Total: 29 pts → Sobrecarga, quitar DASH-202
```

**Valor:**
- **Velocity predictiva:** Saber cuánto trabajo cabe en sprint
- **Mejora continua:** Comparar planned vs actual
- **Team-independent:** 5 points = 5 points sin importar quién

---

#### 4. CustomField System ⭐⭐⭐⭐⭐

**Descripción:** Sistema de campos extensibles sin modificar schema

**Modelo Prisma:**
```prisma
enum FieldType {
  TEXT
  NUMBER
  DATE
  BOOLEAN
  SELECT
  MULTISELECT
  URL
  EMAIL
}

enum EntityType {
  TASK
  PROJECT
  EPIC
  SPRINT
}

model CustomField {
  id              String      @id @default(uuid())
  organization    Organization @relation(fields: [organizationId], references: [id])
  organizationId  String
  name            String
  description     String?
  fieldType       FieldType
  entityType      EntityType
  options         Json?       // Para SELECT/MULTISELECT: ["Opción 1", "Opción 2"]
  isRequired      Boolean     @default(false)
  defaultValue    Json?
  createdAt       DateTime    @default(now())
  values          CustomFieldValue[]
}

model CustomFieldValue {
  id              String      @id @default(uuid())
  customField     CustomField @relation(fields: [customFieldId], references: [id])
  customFieldId   String
  entityId        String      // ID de la tarea/proyecto/epic
  value           Json        // Valor del campo
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
}
```

**Ejemplos casos de uso SOLARIA:**

**PRILABSA:**
```typescript
// Organización crea campos
CustomField {
  name: "Campus",
  fieldType: "SELECT",
  entityType: "TASK",
  options: ["Querétaro", "Guadalajara", "CDMX", "Online"]
}

CustomField {
  name: "Modalidad",
  fieldType: "MULTISELECT",
  entityType: "TASK",
  options: ["Presencial", "Online", "Híbrido"]
}

// En cada tarea:
CustomFieldValue {
  customFieldId: "campus_field_id",
  entityId: "task_123",
  value: "Querétaro"
}
```

**CEPCOMUNICACION:**
```typescript
CustomField {
  name: "Cliente Facturación",
  fieldType: "TEXT",
  entityType: "TASK"
}

CustomField {
  name: "Presupuesto Aprobado",
  fieldType: "BOOLEAN",
  entityType: "PROJECT"
}
```

**Valor:**
- **Zero schema changes:** Extensibilidad sin migrations
- **Multi-tenant ready:** Cada organización tiene sus campos
- **Type-safe:** Validación por fieldType
- **Filterable:** Queries por campos custom

---

#### 5. Advanced Dependency Types ⭐⭐⭐

**Descripción:** 5 tipos de dependencias entre tareas

**Modelo Prisma:**
```prisma
enum DependencyType {
  BLOCKS           // A debe terminar antes de B (actual DFO)
  FINISH_START     // Igual que BLOCKS
  START_START      // A y B empiezan juntas
  FINISH_FINISH    // A y B terminan juntas
  START_FINISH     // B empieza cuando A termina (raro)
}

model TaskDependency {
  id              String          @id @default(uuid())
  task            Task            @relation("DependentTasks", fields: [taskId], references: [id])
  taskId          String
  dependsOn       Task            @relation("DependencyTasks", fields: [dependsOnTaskId], references: [id])
  dependsOnTaskId String
  type            DependencyType  @default(FINISH_START)
  createdAt       DateTime        @default(now())
}
```

**Casos de uso:**

| Tipo | Ejemplo SOLARIA |
|------|-----------------|
| **BLOCKS** | Deploy requiere tests pasando |
| **START_START** | Frontend + Backend feature empiezan simultáneamente |
| **FINISH_FINISH** | Docs + Code deben completarse juntos (calidad) |
| **START_FINISH** | Raro, just-in-time delivery |

**Valor:**
- Modelar dependencias complejas multi-agente
- Enforcement de calidad (code + docs juntos)

---

#### 6. Workflow Templates ⭐⭐⭐

**Descripción:** Estados y transiciones configurables por proyecto

**Modelo Prisma:**
```prisma
model Workflow {
  id              String              @id @default(uuid())
  name            String
  description     String?
  organization    Organization        @relation(fields: [organizationId], references: [id])
  organizationId  String
  isDefault       Boolean             @default(false)
  statuses        WorkflowStatus[]
  transitions     WorkflowTransition[]
}

model WorkflowStatus {
  id          String    @id @default(uuid())
  workflow    Workflow  @relation(fields: [workflowId], references: [id])
  workflowId  String
  key         String    // "in_review"
  label       String    // "Code Review"
  color       String    // "#purple"
  order       Int
}

model WorkflowTransition {
  id          String    @id @default(uuid())
  workflow    Workflow  @relation(fields: [workflowId], references: [id])
  workflowId  String
  fromStatus  String
  toStatus    String
}
```

**Ejemplo workflows diferentes:**

**Software Development:**
```
pending → in_progress → in_review → testing → completed
```

**Diseño Gráfico:**
```
pending → draft → client_review → revisions → approved → completed
```

**Valor:**
- Flexibilidad por tipo de proyecto
- Validación de transiciones
- Estados intermedios visibles

---

## Características Adoptadas

### ✅ Implementar (Alta Prioridad)

| # | Feature | Sprint | Esfuerzo | Valor | Justificación |
|---|---------|--------|----------|-------|---------------|
| 1 | **AutomationRule System** | 2 | 3-5 días | ⭐⭐⭐⭐⭐ | Ya planificado DFN-003, ROI inmediato |
| 2 | **Hierarchical Task Types** | 3 | 3-4 días | ⭐⭐⭐⭐ | Granularidad necesaria, bugs separados |
| 3 | **Story Points + Velocity** | 3-4 | 1-2 días | ⭐⭐⭐⭐ | Mejor planning, baja complejidad |
| 4 | **CustomField System** | 5-6 | 6-8 días | ⭐⭐⭐⭐⭐ | Extensibilidad total, multi-tenant |

**Total:** 13-19 días (2.6-3.8 semanas)

### ⚠️ Evaluar (Prioridad Condicional)

| # | Feature | Condición | Sprint |
|---|---------|-----------|--------|
| 5 | **Advanced Dependencies** | Solo si coordinación multi-agente paralela | 4-5 |
| 6 | **Workflow Templates** | Solo si tipos de proyecto muy diferentes | 6-7 |

### ❌ No Implementar

- **Email-to-Task Conversion:** Rechazado por Comandante
- **Conversational AI Task Execution:** Fuera de scope DFO (browser automation)

---

## Roadmap de Implementación

### Sprint 2: Automation & Intelligence (Enero 2025)

**Duración:** 2 semanas
**Esfuerzo:** 3-5 días Taskosaur + DFN-003 ya planificado

**Objetivos:**
- Implementar AutomationRule System (adopción Taskosaur)
- Completar DFN-005 Offline-First SQLite (ya planificado)

**Entregables:**
- Tabla `automation_rules` con triggers y actions
- Endpoints: `create_automation_rule`, `list_automation_rules`, `execute_automation`
- Worker BullMQ para ejecución asíncrona
- Tests >75% coverage

---

### Sprint 3: Task Organization (Febrero 2025)

**Duración:** 2 semanas
**Esfuerzo:** 4-6 días

**Objetivos:**
- Implementar Hierarchical Task Types (epic/story/task/subtask/bug)
- Implementar Story Points + Velocity Tracking

**Entregables:**
- Columnas `task_type`, `parent_task_id` en tabla tasks
- Columnas `story_points`, `planned_velocity`, `actual_velocity`
- Validación de ciclos en jerarquía
- Endpoints actualizados para filtrar por tipo
- Cálculo automático de velocity al cerrar sprint

---

### Sprint 4: Advanced Dependencies (Marzo 2025) - CONDICIONAL

**Duración:** 1 semana
**Esfuerzo:** 2-3 días

**Objetivos:**
- Evaluar necesidad real de múltiples tipos de dependencias
- Implementar solo si hay casos de uso claros

**Entregables:**
- ENUM con 5 tipos de dependencias
- Actualización de ready-tasks para contemplar tipos
- Tests de validación

---

### Sprint 5-6: Extensibility (Abril-Mayo 2025)

**Duración:** 3-4 semanas
**Esfuerzo:** 6-8 días CustomFields + DFN-006 ya planificado

**Objetivos:**
- Implementar CustomField System (máxima prioridad largo plazo)
- Completar DFN-006 Git-backed Documents (ya planificado)
- Semantic Compaction (ya planificado)

**Entregables:**
- Tablas `custom_fields` y `custom_field_values`
- Endpoints CRUD para custom fields
- Validación por fieldType
- UI/API para crear campos por organización
- Queries con filtros por campos custom

---

### Sprint 6-7: Workflow Templates (Mayo-Junio 2025) - OPCIONAL

**Duración:** 1-2 semanas
**Esfuerzo:** 4-5 días

**Condición:** Solo si SOLARIA expande a tipos de proyecto muy diferentes

**Objetivos:**
- Implementar workflows configurables por organización
- Status templates con transiciones validadas

**Entregables:**
- Tablas `workflows`, `workflow_statuses`, `workflow_transitions`
- Endpoints CRUD para workflows
- Validación de transiciones
- Migración de tareas existentes

---

## Instrucciones para Crear Sprint/Epics/Tasks en DFO

### Paso 1: Identificar Proyecto DFO

Primero necesitamos el ID del proyecto SOLARIA DFO en el sistema:

```bash
# Desde Claude Code CLI
/dfo sync
```

O usando MCP directamente:

```typescript
// Listar proyectos
mcp__solaria-dfo__list_projects()

// Output esperado:
{
  "projects": [
    {
      "id": 1,
      "name": "SOLARIA DFO",
      "code": "DFO",
      "status": "development"
    }
  ]
}
```

**Asumimos `project_id = 1` para SOLARIA DFO**

---

### Paso 2: Crear Sprint "Taskosaur Enhancements"

```typescript
// Crear Sprint 2 (Automation & Intelligence)
mcp__solaria-dfo__create_sprint({
  project_id: 1,
  name: "Sprint 2 - Taskosaur: Automation & Intelligence",
  goal: "Implementar AutomationRule System adoptado de Taskosaur para workflows automatizados",
  phase_type: "development",
  phase_order: 2,
  start_date: "2025-01-06",
  end_date: "2025-01-17",
  status: "planned",
  velocity: 25  // Planned velocity en story points
})

// Output esperado:
{
  "sprint_id": 2,
  "name": "Sprint 2 - Taskosaur: Automation & Intelligence",
  "status": "planned"
}
```

```typescript
// Crear Sprint 3 (Task Organization)
mcp__solaria-dfo__create_sprint({
  project_id: 1,
  name: "Sprint 3 - Taskosaur: Task Organization",
  goal: "Implementar jerarquía de tareas (epic/story/task/subtask/bug) y story points",
  phase_type: "development",
  phase_order: 3,
  start_date: "2025-02-03",
  end_date: "2025-02-14",
  status: "planned",
  velocity: 25
})

// Output esperado:
{
  "sprint_id": 3,
  "name": "Sprint 3 - Taskosaur: Task Organization",
  "status": "planned"
}
```

```typescript
// Crear Sprint 5-6 (Extensibility)
mcp__solaria-dfo__create_sprint({
  project_id: 1,
  name: "Sprint 5-6 - Taskosaur: Extensibility",
  goal: "Implementar CustomField System para extensibilidad multi-tenant sin schema changes",
  phase_type: "development",
  phase_order: 5,
  start_date: "2025-04-07",
  end_date: "2025-04-25",
  status: "planned",
  velocity: 30
})

// Output esperado:
{
  "sprint_id": 5,
  "name": "Sprint 5-6 - Taskosaur: Extensibility",
  "status": "planned"
}
```

---

### Paso 3: Crear Epics por Sprint

#### Epic 1: AutomationRule System (Sprint 2)

```typescript
mcp__solaria-dfo__create_epic({
  project_id: 1,
  sprint_id: 2,
  name: "AutomationRule System",
  description: "Sistema de triggers y actions para automatizar workflows. Adopción de Taskosaur con triggers (task.created, status_changed, etc.) y actions (assign_agent, update_status, create_task, etc.)",
  status: "open",
  color: "#FF6B6B",  // Rojo para automation
  start_date: "2025-01-06",
  target_date: "2025-01-17"
})

// Output esperado:
{
  "epic_id": 10,
  "name": "AutomationRule System",
  "status": "open"
}
```

#### Epic 2: Hierarchical Task Types (Sprint 3)

```typescript
mcp__solaria-dfo__create_epic({
  project_id: 1,
  sprint_id: 3,
  name: "Hierarchical Task Types",
  description: "Implementar tipos jerárquicos: EPIC/STORY/TASK/SUBTASK/BUG con parent_task_id y validación de ciclos",
  status: "open",
  color: "#4ECDC4",  // Turquesa para organización
  start_date: "2025-02-03",
  target_date: "2025-02-14"
})

// Output esperado:
{
  "epic_id": 11,
  "name": "Hierarchical Task Types",
  "status": "open"
}
```

#### Epic 3: Story Points & Velocity (Sprint 3)

```typescript
mcp__solaria-dfo__create_epic({
  project_id: 1,
  sprint_id: 3,
  name: "Story Points & Velocity Tracking",
  description: "Sistema de estimación Fibonacci (1,2,3,5,8,13,21) con tracking de planned_velocity vs actual_velocity por sprint",
  status: "open",
  color: "#95E1D3",  // Verde agua para métricas
  start_date: "2025-02-03",
  target_date: "2025-02-14"
})

// Output esperado:
{
  "epic_id": 12,
  "name": "Story Points & Velocity Tracking",
  "status": "open"
}
```

#### Epic 4: CustomField System (Sprint 5-6)

```typescript
mcp__solaria-dfo__create_epic({
  project_id: 1,
  sprint_id: 5,
  name: "CustomField System",
  description: "Sistema de campos extensibles sin modificar schema. Soporta TEXT, NUMBER, DATE, BOOLEAN, SELECT, MULTISELECT. Permite a cada organización crear campos custom para TASK/PROJECT/EPIC/SPRINT.",
  status: "open",
  color: "#F38181",  // Coral para extensibilidad
  start_date: "2025-04-07",
  target_date: "2025-04-25"
})

// Output esperado:
{
  "epic_id": 13,
  "name": "CustomField System",
  "status": "open"
}
```

---

### Paso 4: Crear Tasks por Epic

#### Tasks para Epic 1: AutomationRule System (epic_id: 10)

```typescript
// Task 1.1: Database Schema
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Create automation_rules database schema",
  description: `
Create table automation_rules with columns:
- id (UUID)
- name, description
- is_active (boolean)
- trigger_type (ENUM: task.created, task.status_changed, task.assigned, etc.)
- trigger_config (JSON)
- action_type (ENUM: assign_agent, update_status, create_task, etc.)
- action_config (JSON)
- last_triggered (timestamp)
- execution_count (int)
- created_at, updated_at

Migration file + rollback.
`,
  priority: "high",
  status: "pending",
  estimated_hours: 3,
  assigned_agent_id: 11  // Claude Code
})

// Task 1.2: MCP Endpoints
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Implement MCP endpoints for automation rules",
  description: `
Create endpoints:
- create_automation_rule(name, trigger_type, trigger_config, action_type, action_config)
- list_automation_rules(project_id, is_active)
- update_automation_rule(rule_id, ...)
- delete_automation_rule(rule_id)
- execute_automation_rule(rule_id) [manual trigger]

With Zod validation and ResponseBuilder pattern.
`,
  priority: "high",
  status: "pending",
  estimated_hours: 6,
  assigned_agent_id: 11
})

// Task 1.3: Trigger System
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Implement trigger detection system",
  description: `
Hook into existing endpoints:
- create_task → check for task.created triggers
- update_task → check for task.status_changed triggers
- assign_task → check for task.assigned triggers

Queue jobs in BullMQ for async execution.
`,
  priority: "critical",
  status: "pending",
  estimated_hours: 8,
  assigned_agent_id: 11
})

// Task 1.4: Action Executor
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Implement action executor worker",
  description: `
BullMQ worker que ejecuta actions:
- assign_agent: actualizar assigned_agent_id
- update_status: cambiar task.status
- create_task: crear nueva tarea
- add_tag: agregar tag
- send_notification: log actividad (futuro: email/webhook)

Con error handling, retries, y activity logging.
`,
  priority: "critical",
  status: "pending",
  estimated_hours: 10,
  assigned_agent_id: 11
})

// Task 1.5: Tests
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Write automation rules tests (>75% coverage)",
  description: `
Test suites:
- CRUD endpoints
- Trigger detection
- Action execution
- Error scenarios
- Race conditions

Target: >75% code coverage.
`,
  priority: "high",
  status: "pending",
  estimated_hours: 8,
  assigned_agent_id: 11
})

// Task 1.6: Documentation
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Document automation rules system",
  description: `
Create docs/specs/automation-rules.md with:
- Available triggers and their payloads
- Available actions and their configs
- Example rules (auto-assign, status escalation, etc.)
- API reference
- Best practices
`,
  priority: "medium",
  status: "pending",
  estimated_hours: 4,
  assigned_agent_id: 11
})
```

#### Tasks para Epic 2: Hierarchical Task Types (epic_id: 11)

```typescript
// Task 2.1: Database Schema
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Add task_type and parent_task_id columns",
  description: `
ALTER TABLE tasks:
- ADD COLUMN task_type ENUM('epic', 'story', 'task', 'subtask', 'bug') DEFAULT 'task'
- ADD COLUMN parent_task_id INT NULL
- ADD FOREIGN KEY (parent_task_id) REFERENCES tasks(id) ON DELETE CASCADE

Migration + rollback.
`,
  priority: "high",
  status: "pending",
  estimated_hours: 2,
  assigned_agent_id: 11
})

// Task 2.2: Cycle Validation
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Implement cycle detection in task hierarchy",
  description: `
Utility function detectCycle(task_id, parent_task_id):
- Traverse parent chain recursively
- Detect if setting parent would create cycle
- Return error with cycle path

Use in create_task and update_task validation.
`,
  priority: "critical",
  status: "pending",
  estimated_hours: 4,
  assigned_agent_id: 11
})

// Task 2.3: Update Endpoints
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Update task endpoints for hierarchy",
  description: `
Modify:
- create_task: accept task_type and parent_task_id params
- update_task: allow changing parent (with cycle validation)
- list_tasks: filter by task_type, include children count
- get_task: include parent info and children list

Update Zod schemas.
`,
  priority: "high",
  status: "pending",
  estimated_hours: 5,
  assigned_agent_id: 11
})

// Task 2.4: Formatters
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Add formatters for hierarchical tasks",
  description: `
Update formatters.ts:
- Show task type icon (📊 epic, 📖 story, ✅ task, 🔸 subtask, 🐛 bug)
- Indent children in tree view
- Show parent task code in formatted output

Example:
📊 DFO-101: AutomationRule System
  📖 DFO-102: Implement triggers
    ✅ DFO-103: Database schema
    ✅ DFO-104: Hook detection
`,
  priority: "medium",
  status: "pending",
  estimated_hours: 3,
  assigned_agent_id: 11
})

// Task 2.5: Tests
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Test hierarchical task types",
  description: `
Test cases:
- Create task with each type
- Set parent_task_id
- Cycle detection (should fail)
- Delete parent (cascade to children)
- Filter by task_type
- Tree view rendering

Coverage >75%.
`,
  priority: "high",
  status: "pending",
  estimated_hours: 6,
  assigned_agent_id: 11
})
```

#### Tasks para Epic 3: Story Points & Velocity (epic_id: 12)

```typescript
// Task 3.1: Database Schema
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Add story_points to tasks, velocity to sprints",
  description: `
ALTER TABLE tasks ADD COLUMN story_points INT NULL;
ALTER TABLE sprints ADD COLUMN planned_velocity INT DEFAULT 0;
ALTER TABLE sprints ADD COLUMN actual_velocity INT DEFAULT 0;

Migration + rollback.
`,
  priority: "high",
  status: "pending",
  estimated_hours: 1,
  assigned_agent_id: 11
})

// Task 3.2: Validation
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Implement Fibonacci validation for story_points",
  description: `
Zod validator:
- story_points must be null or one of: 1, 2, 3, 5, 8, 13, 21
- Error message: "Story points must follow Fibonacci sequence"

Apply in create_task and update_task.
`,
  priority: "medium",
  status: "pending",
  estimated_hours: 2,
  assigned_agent_id: 11
})

// Task 3.3: Velocity Calculator
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Implement automatic velocity calculation",
  description: `
Function calculateActualVelocity(sprint_id):
- SUM(story_points) WHERE sprint_id = ? AND status = 'completed'
- Update sprints.actual_velocity
- Trigger on:
  - complete_task (if has story_points)
  - update_sprint(status: 'completed')

Log to activity_logs.
`,
  priority: "high",
  status: "pending",
  estimated_hours: 4,
  assigned_agent_id: 11
})

// Task 3.4: Sprint Planning Helper
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Create sprint planning helper endpoint",
  description: `
New endpoint: get_sprint_capacity(sprint_id)

Returns:
- planned_velocity (configured)
- historical_velocity (avg of last 3 sprints actual)
- current_commitment (SUM of assigned tasks story_points)
- remaining_capacity (planned - current)
- recommendation: "can add X more points" or "overcommitted by X points"
`,
  priority: "medium",
  status: "pending",
  estimated_hours: 5,
  assigned_agent_id: 11
})

// Task 3.5: Tests
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Test story points and velocity tracking",
  description: `
Test cases:
- Fibonacci validation (accept 5, reject 4)
- Velocity calculation on task completion
- Sprint capacity calculation
- Historical velocity averaging
- Edge cases (no completed tasks, no story points)

Coverage >75%.
`,
  priority: "high",
  status: "pending",
  estimated_hours: 4,
  assigned_agent_id: 11
})
```

#### Tasks para Epic 4: CustomField System (epic_id: 13)

```typescript
// Task 4.1: Database Schema
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Create custom_fields and custom_field_values tables",
  description: `
CREATE TABLE custom_fields:
- id (UUID)
- organization_id (FK to organizations - future)
- project_id (FK to projects - for now)
- name, description
- field_type (ENUM: TEXT, NUMBER, DATE, BOOLEAN, SELECT, MULTISELECT, URL, EMAIL)
- entity_type (ENUM: TASK, PROJECT, EPIC, SPRINT)
- options (JSON) - for SELECT/MULTISELECT
- is_required (boolean)
- default_value (JSON)
- created_at, updated_at

CREATE TABLE custom_field_values:
- id (UUID)
- custom_field_id (FK)
- entity_id (VARCHAR) - ID of task/project/epic
- value (JSON)
- created_at, updated_at

Indexes:
- (custom_field_id, entity_id) UNIQUE
- (entity_id) for fast lookups

Migration + rollback.
`,
  priority: "critical",
  status: "pending",
  estimated_hours: 4,
  assigned_agent_id: 11
})

// Task 4.2: Field Type Validators
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Implement validators for each field type",
  description: `
Create utils/custom-field-validators.ts:

- validateText(value, field): string length checks
- validateNumber(value, field): numeric validation, min/max
- validateDate(value, field): ISO 8601 format
- validateBoolean(value, field): true/false
- validateSelect(value, field, options): value in options array
- validateMultiSelect(value, field, options): all values in options
- validateUrl(value, field): valid URL format
- validateEmail(value, field): valid email format

Return { valid: boolean, error?: string }
`,
  priority: "critical",
  status: "pending",
  estimated_hours: 6,
  assigned_agent_id: 11
})

// Task 4.3: CRUD Endpoints
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Implement CustomField CRUD endpoints",
  description: `
Endpoints:
- create_custom_field(project_id, name, field_type, entity_type, options?, is_required?, default_value?)
- list_custom_fields(project_id?, entity_type?)
- get_custom_field(field_id)
- update_custom_field(field_id, ...)
- delete_custom_field(field_id) [cascade delete values]

With Zod schemas and ResponseBuilder.
`,
  priority: "high",
  status: "pending",
  estimated_hours: 6,
  assigned_agent_id: 11
})

// Task 4.4: Value Management
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Implement custom field value management",
  description: `
Endpoints:
- set_custom_field_value(field_id, entity_id, value)
  * Validate against field_type
  * Upsert (update if exists, insert if not)
  * Check is_required on entity creation

- get_custom_field_values(entity_id)
  * Return all custom fields for entity
  * Include field metadata (name, type, etc.)

- delete_custom_field_value(field_id, entity_id)

Integrate with:
- create_task: accept custom_fields object
- update_task: accept custom_fields updates
- get_task: include custom_field_values
`,
  priority: "critical",
  status: "pending",
  estimated_hours: 8,
  assigned_agent_id: 11
})

// Task 4.5: Query/Filter Support
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Add custom field filtering to list endpoints",
  description: `
Update list_tasks to support:
- filter by custom field: ?custom_field.Campus=Querétaro
- Multiple filters: ?custom_field.Campus=Querétaro&custom_field.Modalidad=Online

SQL:
SELECT t.* FROM tasks t
JOIN custom_field_values cfv ON cfv.entity_id = t.id
JOIN custom_fields cf ON cf.id = cfv.custom_field_id
WHERE cf.name = 'Campus' AND cfv.value = '"Querétaro"'

Handle JSON value comparison by field_type.
`,
  priority: "high",
  status: "pending",
  estimated_hours: 6,
  assigned_agent_id: 11
})

// Task 4.6: Tests
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Test CustomField system (>75% coverage)",
  description: `
Test suites:
- Create fields of each type
- Validate values (valid/invalid for each type)
- CRUD operations
- Set/get values
- Filter tasks by custom fields
- Required field enforcement
- Cascade delete
- Edge cases (SELECT with invalid option, etc.)

Coverage >75%.
`,
  priority: "high",
  status: "pending",
  estimated_hours: 10,
  assigned_agent_id: 11
})

// Task 4.7: Documentation
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Document CustomField system",
  description: `
Create docs/specs/custom-fields.md:
- Supported field types and their validation rules
- How to create custom fields
- How to set/query values
- Examples for common use cases (PRILABSA Campus, CEPCOMUNICACION Cliente)
- API reference
- Migration guide

Update README.md with CustomField feature.
`,
  priority: "medium",
  status: "pending",
  estimated_hours: 4,
  assigned_agent_id: 11
})
```

---

### Paso 5: Establecer Dependencias entre Tasks

```typescript
// Ejemplo: Task 1.3 (Trigger System) depende de Task 1.1 (Database Schema)
// Crear dependencia BLOCKS

// Primero obtener task_ids (asumiendo fueron creados secuencialmente)
const task_1_1_id = 101; // Database Schema
const task_1_3_id = 103; // Trigger System

// No existe endpoint create_task_dependency aún, pero la estructura sería:
// INSERT INTO task_dependencies (task_id, depends_on_task_id, relationship_type)
// VALUES (103, 101, 'blocks')

// Por ahora, agregar manualmente en SQL o implementar endpoint en DFN-002
```

---

### Paso 6: Activar Sprint y Comenzar Trabajo

```typescript
// Cuando estemos listos para Sprint 2
mcp__solaria-dfo__update_sprint({
  sprint_id: 2,
  status: "active",
  start_date: "2025-01-06"
})

// Sync con Claude Code
// Desde CLI:
/dfo sync

// Esto cargará:
// - Sprint activo: Sprint 2
// - Epic actual: AutomationRule System
// - Tareas pending/in_progress del sprint
```

---

## Especificaciones Técnicas

### AutomationRule System

#### Database Schema

```sql
CREATE TABLE automation_rules (
  id VARCHAR(36) PRIMARY KEY,
  project_id INT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  trigger_type ENUM(
    'task.created',
    'task.updated',
    'task.status_changed',
    'task.assigned',
    'task.due_soon',
    'task.blocked',
    'epic.status_changed',
    'sprint.started',
    'sprint.ending'
  ) NOT NULL,
  trigger_config JSON,
  action_type ENUM(
    'assign_agent',
    'update_status',
    'update_priority',
    'create_task',
    'add_tag',
    'send_notification',
    'log_activity'
  ) NOT NULL,
  action_config JSON,
  last_triggered TIMESTAMP NULL,
  execution_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
  INDEX idx_project_active (project_id, is_active),
  INDEX idx_trigger_type (trigger_type)
);
```

#### Example Rules

**Rule 1: Auto-assign lead tasks to Claude Code**
```json
{
  "name": "Auto-assign lead tasks",
  "trigger_type": "task.created",
  "trigger_config": {
    "conditions": [
      { "field": "title", "operator": "contains", "value": "lead.created" }
    ]
  },
  "action_type": "assign_agent",
  "action_config": {
    "agent_id": 11
  }
}
```

**Rule 2: Escalate priority if pending >7 days**
```json
{
  "name": "Escalate stale tasks",
  "trigger_type": "task.updated",
  "trigger_config": {
    "conditions": [
      { "field": "status", "operator": "equals", "value": "pending" },
      { "field": "created_at", "operator": "older_than", "value": "7 days" }
    ]
  },
  "action_type": "update_priority",
  "action_config": {
    "priority": "high"
  }
}
```

**Rule 3: Create subtasks when epic starts**
```json
{
  "name": "Create epic subtasks",
  "trigger_type": "epic.status_changed",
  "trigger_config": {
    "conditions": [
      { "field": "new_status", "operator": "equals", "value": "in_progress" }
    ]
  },
  "action_type": "create_task",
  "action_config": {
    "template": "subtask",
    "tasks": [
      { "title": "Setup infrastructure", "priority": "high" },
      { "title": "Write tests", "priority": "high" },
      { "title": "Implement core logic", "priority": "critical" },
      { "title": "Documentation", "priority": "medium" }
    ]
  }
}
```

---

### Hierarchical Task Types

#### Task Type Icons

| Type | Icon | Description |
|------|------|-------------|
| `epic` | 📊 | Feature grande, múltiples sprints |
| `story` | 📖 | User story ágil, unidad de valor |
| `task` | ✅ | Trabajo técnico específico |
| `subtask` | 🔸 | Desglose granular de task |
| `bug` | 🐛 | Fix de defecto |

#### Validation Rules

```typescript
// Allowed parent-child relationships
const ALLOWED_HIERARCHY = {
  epic: [],                      // Epics can't have parents
  story: ['epic'],               // Stories can be children of epics
  task: ['epic', 'story'],       // Tasks can be children of epics or stories
  subtask: ['task', 'bug'],      // Subtasks can be children of tasks or bugs
  bug: ['epic', 'story']         // Bugs can be children of epics or stories
};

function validateHierarchy(task_type, parent_task_type) {
  if (!ALLOWED_HIERARCHY[task_type].includes(parent_task_type)) {
    throw new Error(
      `Invalid hierarchy: ${task_type} cannot be child of ${parent_task_type}`
    );
  }
}
```

---

### Story Points System

#### Fibonacci Scale

| Points | Complexity | Time Estimate | Example |
|--------|------------|---------------|---------|
| 1 | Trivial | <1 hora | Fix typo, update config |
| 2 | Very Simple | 1-2 horas | Add column, simple endpoint |
| 3 | Simple | 2-4 horas | Basic CRUD, simple validation |
| 5 | Medium | 4-8 horas | Feature with tests, multi-table |
| 8 | Complex | 1-2 días | Authentication system, complex logic |
| 13 | Very Complex | 2-3 días | Integration with external API, worker |
| 21 | Epic | 3-5 días | Complete subsystem, architecture change |

#### Velocity Calculation

```sql
-- Calculate actual velocity for completed sprint
UPDATE sprints
SET actual_velocity = (
  SELECT COALESCE(SUM(story_points), 0)
  FROM tasks
  WHERE sprint_id = sprints.id
    AND status = 'completed'
    AND story_points IS NOT NULL
)
WHERE id = ? AND status = 'completed';

-- Calculate team average velocity (last 3 sprints)
SELECT AVG(actual_velocity) as avg_velocity
FROM sprints
WHERE project_id = ?
  AND status = 'completed'
  AND actual_velocity > 0
ORDER BY end_date DESC
LIMIT 3;
```

---

### CustomField System

#### Field Types

| Type | JSON Storage | Validation | Example |
|------|--------------|------------|---------|
| TEXT | `"string"` | Max length | `"Querétaro"` |
| NUMBER | `123` | Numeric, min/max | `42` |
| DATE | `"2025-01-15"` | ISO 8601 | `"2025-01-15"` |
| BOOLEAN | `true/false` | Boolean | `true` |
| SELECT | `"option"` | In options array | `"High"` |
| MULTISELECT | `["opt1","opt2"]` | All in options | `["Online","Presencial"]` |
| URL | `"https://..."` | Valid URL | `"https://solaria.agency"` |
| EMAIL | `"email@domain"` | Valid email | `"charlie@solaria.agency"` |

#### Query Examples

```sql
-- Find all tasks in Querétaro campus
SELECT t.*
FROM tasks t
JOIN custom_field_values cfv ON cfv.entity_id = t.id
JOIN custom_fields cf ON cf.id = cfv.custom_field_id
WHERE cf.name = 'Campus'
  AND JSON_UNQUOTE(cfv.value) = 'Querétaro';

-- Find tasks with Presencial OR Online modality (MULTISELECT)
SELECT t.*
FROM tasks t
JOIN custom_field_values cfv ON cfv.entity_id = t.id
JOIN custom_fields cf ON cf.id = cfv.custom_field_id
WHERE cf.name = 'Modalidad'
  AND JSON_CONTAINS(cfv.value, '"Presencial"');
```

---

## Referencias

### Taskosaur

- **GitHub:** https://github.com/Taskosaur/Taskosaur/
- **Stack:** NestJS, Next.js, PostgreSQL, Prisma, Redis, BullMQ
- **Features analizadas:**
  - AutomationRule System
  - Hierarchical Task Types (EPIC/STORY/TASK/SUBTASK/BUG)
  - Story Points + Velocity Tracking
  - CustomField System
  - Advanced Dependencies (5 types)
  - Workflow Templates
  - Email-to-Task Conversion (rechazado)
  - Conversational AI (fuera de scope)

### SOLARIA DFO

- **Repositorio:** `/Users/carlosjperez/Documents/GitHub/SOLARIA-DFO/`
- **Servidor:** https://dfo.solaria.agency/mcp
- **Documentación principal:**
  - `docs/DFO-ENHANCEMENT-PLAN-2025.md` - Roadmap completo 2025
  - `docs/CONTEXT-BEADS-ANALYSIS-AND-SPRINT1.md` - Análisis Beads + Sprint 1
  - `docs/HANDOFF-SPRINT-1-REMAINING.md` - Handoff para Sprint 1
  - `docs/dfo-enchancement-tasksaurus.md` - Este documento

### Estándares Implementados

- **DFN-002:** JSON-First API Standardization (ResponseBuilder, CommonErrors)
- **DFN-004:** Ready Tasks Endpoint (readiness scoring 0-100)
- **PAT-002:** Spec-Driven Development (specs antes de código)
- **PAT-004:** Testing Strategy (>75% coverage)

---

## Apéndice: Comandos MCP Completos

```typescript
// ==================================
// CREAR SPRINT 2
// ==================================
mcp__solaria-dfo__create_sprint({
  project_id: 1,
  name: "Sprint 2 - Taskosaur: Automation & Intelligence",
  goal: "Implementar AutomationRule System adoptado de Taskosaur para workflows automatizados",
  phase_type: "development",
  phase_order: 2,
  start_date: "2025-01-06",
  end_date: "2025-01-17",
  status: "planned",
  velocity: 25
})

// ==================================
// CREAR EPIC: AutomationRule System
// ==================================
mcp__solaria-dfo__create_epic({
  project_id: 1,
  sprint_id: 2,
  name: "AutomationRule System",
  description: "Sistema de triggers y actions para automatizar workflows",
  status: "open",
  color: "#FF6B6B",
  start_date: "2025-01-06",
  target_date: "2025-01-17"
})

// ==================================
// CREAR TODAS LAS TASKS DEL EPIC
// ==================================

// Task 1: Database Schema
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Create automation_rules database schema",
  description: "Create table with triggers, actions, execution tracking",
  priority: "high",
  status: "pending",
  estimated_hours: 3,
  assigned_agent_id: 11
})

// Task 2: MCP Endpoints
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Implement MCP endpoints for automation rules",
  description: "CRUD + execute endpoints with Zod validation",
  priority: "high",
  status: "pending",
  estimated_hours: 6,
  assigned_agent_id: 11
})

// Task 3: Trigger System
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Implement trigger detection system",
  description: "Hook into existing endpoints, queue jobs in BullMQ",
  priority: "critical",
  status: "pending",
  estimated_hours: 8,
  assigned_agent_id: 11
})

// Task 4: Action Executor
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Implement action executor worker",
  description: "BullMQ worker for assign, update_status, create_task, etc.",
  priority: "critical",
  status: "pending",
  estimated_hours: 10,
  assigned_agent_id: 11
})

// Task 5: Tests
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Write automation rules tests (>75% coverage)",
  description: "CRUD, triggers, actions, errors, race conditions",
  priority: "high",
  status: "pending",
  estimated_hours: 8,
  assigned_agent_id: 11
})

// Task 6: Documentation
mcp__solaria-dfo__create_task({
  project_id: 1,
  title: "Document automation rules system",
  description: "Triggers, actions, examples, API reference, best practices",
  priority: "medium",
  status: "pending",
  estimated_hours: 4,
  assigned_agent_id: 11
})

// ==================================
// ACTIVAR SPRINT
// ==================================
mcp__solaria-dfo__update_sprint({
  sprint_id: 2,
  status: "active"
})

// ==================================
// SYNC CON CLAUDE CODE
// ==================================
// Desde CLI: /dfo sync
```

---

**Fin del documento**

**Última actualización:** 2025-12-28
**Autor:** ECO-Lambda (Agent ID 11)
**Proyecto:** SOLARIA DFO
**Estado:** Ready for implementation
