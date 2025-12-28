# TAREA: Auditoría y Resolución de Conectividad MCP

**Prioridad:** P1 (Critical)
**Asignado a:** DevOps/Infrastructure Agent
**Creada:** 2025-12-27
**Estado:** Pending

## Problema

La conectividad MCP con el servidor DFO está presentando errores:

```
Error al llamar get_work_context()
Error al llamar list_projects()
```

Sin embargo, el servidor responde correctamente al health check:
```bash
curl https://dfo.solaria.agency/mcp/health
# Response: {"status":"ok","sessions":4}
```

## Tareas

- [ ] Verificar logs del servidor MCP en producción
- [ ] Revisar configuración de autenticación Bearer token
- [ ] Probar endpoints MCP manualmente con curl
- [ ] Verificar que todas las herramientas MCP respondan correctamente
- [ ] Documentar cualquier endpoint que retorne "Not implemented yet"
- [ ] Validar que el servidor escuche correctamente en puerto 3031
- [ ] Revisar nginx reverse proxy configuration
- [ ] Ejecutar suite de tests de integración MCP

## Contexto

- Servidor: https://dfo.solaria.agency/mcp
- VPS: 148.230.118.124 (Hostinger)
- Docker container: solaria-dfo-office
- MCP HTTP server port: 3031

## Resultado Esperado

- Todos los endpoints MCP funcionando correctamente
- Documentación de cualquier limitación encontrada
- Suite de tests de integración pasando
- Reporte de estado completo

## Referencias

- `mcp-server/http-server.ts` - Implementación del servidor HTTP
- `mcp-server/handlers.ts` - Handlers de herramientas MCP
- `infrastructure/nginx/nginx.unified.conf` - Configuración proxy

---

**Nota:** Esta tarea bloquea la validación completa del plan de mejoras DFO 2025.
