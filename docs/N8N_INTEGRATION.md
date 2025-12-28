# n8n ↔ DFO Integration Guide

**Version:** 2.0
**Last Updated:** 2025-12-27
**Status:** ✅ Infrastructure Active | ⚠️ Workflow Needs Configuration

---

## Executive Summary

SOLARIA DFO integrates with n8n for event-driven workflow automation. The webhook infrastructure is **fully operational** with 87% success rate (459 dispatches, 399 successful). The n8n platform is running, but the webhook workflow needs to be created/reactivated.

| Component | Status | Details |
|-----------|--------|---------|
| ✅ Webhook Database | Active | `webhooks` and `webhook_deliveries` tables |
| ✅ WebhookService | Running | Dispatch, retry, and logging operational |
| ✅ API Endpoints | Exposed | CRUD operations at `/api/webhooks` |
| ✅ Event Integration | Active | Auto-dispatch on task/project changes |
| ✅ n8n Platform | Running | https://n8n.solaria.agency/ (healthy) |
| ⚠️ n8n Workflow | **404** | Needs creation/reactivation |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         SOLARIA DFO                             │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐      │
│  │  Task API    │───►│ WebhookServ  │───►│  Webhooks DB │      │
│  │  (create/    │    │  (dispatch)  │    │  (config)    │      │
│  │   update)    │    └──────┬───────┘    └──────────────┘      │
│  └──────────────┘           │                                   │
│                             │ HTTPS POST                        │
│                             │ + HMAC Signature                  │
│                             │ + Retry Logic (3x)                │
└─────────────────────────────┼─────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       n8n Platform                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐      │
│  │   Webhook    │───►│  Workflow    │───►│  Actions     │      │
│  │   Trigger    │    │  (process)   │    │  (Slack,etc) │      │
│  └──────────────┘    └──────────────┘    └──────────────┘      │
│                                                                 │
│  Access: https://n8n.solaria.agency/                           │
│  Credentials: admin / SolariaAdmin2024                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## Event Types

DFO dispatches the following webhook events:

### Task Events
- `task.created` - New task created
- `task.updated` - Task data modified
- `task.completed` - Task marked as complete
- `task.deleted` - Task removed
- `task.status_changed` - Status changed (pending→in_progress→completed)
- `task.assigned` - Task assigned to an agent

### Project Events
- `project.created` - New project created
- `project.updated` - Project data modified
- `project.status_changed` - Project status changed
- `project.completed` - Project completed

### Agent Events
- `agent.status_changed` - Agent status changed
- `agent.task_assigned` - Task assigned to agent

### Memory Events
- `memory.created` - New memory created
- `memory.updated` - Memory modified

### Alert Events
- `alert.created` - New alert triggered
- `alert.resolved` - Alert resolved

### Global
- `all` - Subscribe to all events

---

## Webhook Payload Format

```json
{
  "event": "task.created",
  "timestamp": "2025-12-27T18:00:00.000Z",
  "data": {
    "id": 123,
    "project_id": 2,
    "title": "Implement webhook integration",
    "status": "pending",
    "priority": "high",
    "assigned_agent_id": 11,
    "created_at": "2025-12-27T18:00:00.000Z"
  },
  "project_id": 2,
  "source": "solaria-dfo"
}
```

### Headers

All webhook requests include:

```http
Content-Type: application/json
User-Agent: SOLARIA-DFO-Webhook/1.0
X-Webhook-Event: task.created
X-Webhook-Timestamp: 2025-12-27T18:00:00.000Z
X-Webhook-Signature: sha256=<hmac-signature>
```

---

## Current Webhook Configuration

### Active Webhook (ID: 1)

| Parameter | Value |
|-----------|-------|
| Name | n8n DFO Events v2 |
| URL | https://n8n.solaria.agency/webhook/UFQlveUDu8niPo6t/dfowebhook/dfo-events |
| Event Type | `all` (subscribes to all events) |
| HTTP Method | POST |
| Secret | `0a835c13989c3de82336f66306372572f98ee844ce41598fb0faec50866a68e9` |
| Active | ✅ Yes |
| Max Retries | 3 |
| Retry Delay | 1000ms |

### Performance Stats

| Metric | Value |
|--------|-------|
| Total Dispatches | 459 |
| Successful | 399 (87%) |
| Failed | 60 (13%) |
| Last Triggered | 2025-12-27 17:16:55 |
| Last Status | 404 (Not Found) |

---

## ⚠️ Current Issue: Workflow 404

**Problem:** The webhook URL returns HTTP 404

**Root Cause:** The n8n workflow at the configured URL has been:
- Disabled in n8n
- Deleted
- Or the URL has changed

**Impact:** DFO is dispatching events correctly, but n8n is not receiving them.

---

## Solution: Create/Reactivate n8n Workflow

### Step 1: Access n8n

```bash
# Web interface
URL: https://n8n.solaria.agency/
Username: admin
Password: SolariaAdmin2024
```

### Step 2: Create Webhook Workflow

1. **Create New Workflow**
   - Click "+ New Workflow"
   - Name: "DFO Events Handler v3"

2. **Add Webhook Trigger**
   - Add "Webhook" node
   - HTTP Method: POST
   - Path: `/dfo-events` (or custom path)
   - Authentication: Header Auth
   - Credential Type: Header Auth
   - Header Name: `X-Webhook-Signature`
   - Expected Value: (use DFO webhook secret for HMAC verification)

3. **Add Processing Logic**
   Example nodes:
   - **Switch Node**: Route by event type
   - **Function Node**: Parse payload
   - **HTTP Request**: Call external APIs
   - **Slack/Email**: Send notifications
   - **Database Node**: Store in analytics DB

4. **Get Webhook URL**
   - Activate the workflow
   - Copy the production webhook URL
   - Format: `https://n8n.solaria.agency/webhook/<workflow-id>/<trigger-id>/dfo-events`

### Step 3: Update DFO Webhook Configuration

**Option A: Via SQL (Direct)**

```bash
ssh -i ~/.ssh/id_ed25519 root@148.230.118.124 "docker exec solaria-dfo-office mysql -uroot -pSolariaRoot2024 solaria_construction -e \"
UPDATE webhooks
SET url = 'https://n8n.solaria.agency/webhook/<NEW_WORKFLOW_ID>/<NEW_TRIGGER_ID>/dfo-events'
WHERE id = 1;
\""
```

**Option B: Via API (Recommended)**

```bash
# 1. Login
TOKEN=$(curl -s -X POST https://dfo.solaria.agency/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"carlosjperez","password":"bypass"}' | jq -r '.token')

# 2. Update webhook
curl -X PUT https://dfo.solaria.agency/api/webhooks/1 \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://n8n.solaria.agency/webhook/<NEW_ID>/dfo-events"
  }'
```

### Step 4: Test the Integration

**Option A: Test Webhook Endpoint**

```bash
curl -X POST https://dfo.solaria.agency/api/webhooks/1/test \
  -H "Authorization: Bearer $TOKEN"
```

**Option B: Create Test Task**

```bash
curl -X POST https://dfo.solaria.agency/api/tasks \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "project_id": 2,
    "title": "Test webhook dispatch",
    "status": "pending",
    "priority": "low"
  }'
```

### Step 5: Monitor Deliveries

```bash
# View recent webhook deliveries
ssh -i ~/.ssh/id_ed25519 root@148.230.118.124 "docker exec solaria-dfo-office mysql -uroot -pSolariaRoot2024 solaria_construction -e \"
SELECT
  id, event_type, response_status_code, success,
  error_message, created_at
FROM webhook_deliveries
WHERE webhook_id = 1
ORDER BY created_at DESC
LIMIT 10;
\""
```

---

## API Reference

### List Webhooks

```bash
GET /api/webhooks
GET /api/webhooks?project_id=2
```

Response:
```json
{
  "webhooks": [
    {
      "id": 1,
      "name": "n8n DFO Events v2",
      "url": "https://n8n.solaria.agency/webhook/...",
      "event_type": "all",
      "active": 1,
      "trigger_count": 459,
      "success_count": 399,
      "failure_count": 60
    }
  ],
  "count": 1
}
```

### Get Webhook Details

```bash
GET /api/webhooks/:id
```

### Create Webhook

```bash
POST /api/webhooks
Content-Type: application/json

{
  "name": "Slack Notifications",
  "url": "https://hooks.slack.com/services/YOUR/WEBHOOK/URL",
  "event_type": "task.completed",
  "project_id": 2,
  "http_method": "POST",
  "headers": {
    "Authorization": "Bearer YOUR_TOKEN"
  }
}
```

### Update Webhook

```bash
PUT /api/webhooks/:id
Content-Type: application/json

{
  "active": false
}
```

### Delete Webhook

```bash
DELETE /api/webhooks/:id
```

### Test Webhook

```bash
POST /api/webhooks/:id/test
```

Sends a test payload:
```json
{
  "event": "test",
  "timestamp": "2025-12-27T18:00:00.000Z",
  "data": {
    "message": "This is a test webhook from SOLARIA DFO",
    "webhook_id": 1,
    "webhook_name": "n8n DFO Events v2"
  },
  "source": "solaria-dfo"
}
```

### Get Webhook Deliveries

```bash
GET /api/webhooks/:id/deliveries
GET /api/webhooks/:id/deliveries?limit=100
```

---

## Database Schema

### `webhooks` Table

```sql
CREATE TABLE webhooks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    project_id INT NULL,  -- NULL = global webhook
    url VARCHAR(500) NOT NULL,
    event_type ENUM('task.created', 'task.updated', ..., 'all'),
    http_method ENUM('POST', 'GET', 'PUT') DEFAULT 'POST',
    secret VARCHAR(64),  -- HMAC signature key
    headers JSON,  -- Custom headers
    active TINYINT(1) DEFAULT 1,
    max_retries INT DEFAULT 3,
    retry_delay_ms INT DEFAULT 1000,
    -- Stats
    trigger_count INT DEFAULT 0,
    success_count INT DEFAULT 0,
    failure_count INT DEFAULT 0,
    last_triggered_at TIMESTAMP NULL,
    last_status_code INT NULL,
    last_error TEXT NULL,
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);
```

### `webhook_deliveries` Table

```sql
CREATE TABLE webhook_deliveries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    webhook_id INT NOT NULL,
    event_type VARCHAR(50) NOT NULL,
    event_payload JSON,
    request_url VARCHAR(500) NOT NULL,
    request_headers JSON,
    request_body TEXT,
    response_status_code INT,
    response_body TEXT,
    response_time_ms INT,
    success TINYINT(1) DEFAULT 0,
    error_message TEXT,
    retry_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (webhook_id) REFERENCES webhooks(id) ON DELETE CASCADE
);
```

---

## Retry Logic

### Configuration

- **Max Retries:** 3 (configurable per webhook)
- **Retry Delay:** 1000ms base, exponential backoff
- **Backoff Formula:** `retry_delay_ms * (retry_count + 1)`

### Example Retry Timeline

| Attempt | Delay | Time |
|---------|-------|------|
| 1 | 0ms | T+0s |
| 2 | 1000ms | T+1s |
| 3 | 2000ms | T+3s |
| 4 | 3000ms | T+6s |

### Retry Conditions

Retries occur on:
- Network errors (DNS, connection timeout, etc.)
- HTTP 5xx errors (500, 502, 503, 504)
- HTTP 429 (Too Many Requests)

**No retry on:**
- HTTP 4xx errors (400, 401, 403, 404) - Client errors
- Successful responses (2xx, 3xx)

---

## Security

### HMAC Signature Verification

Every webhook request includes an HMAC signature in the `X-Webhook-Signature` header.

**Verification (n8n Function Node):**

```javascript
const crypto = require('crypto');

function verifyWebhookSignature(payload, secret, signature) {
  const hmac = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');

  return `sha256=${hmac}` === signature;
}

// In your n8n workflow
const payload = $json;
const secret = 'YOUR_WEBHOOK_SECRET';
const receivedSignature = $node["Webhook"].context["headers"]["x-webhook-signature"];

if (!verifyWebhookSignature(payload, secret, receivedSignature)) {
  throw new Error('Invalid webhook signature');
}

return payload;
```

**Get webhook secret from DB:**

```sql
SELECT secret FROM webhooks WHERE id = 1;
```

---

## Monitoring

### Key Metrics to Track

1. **Success Rate:** `(success_count / trigger_count) * 100`
2. **Failure Rate:** `(failure_count / trigger_count) * 100`
3. **Average Response Time:** From `webhook_deliveries.response_time_ms`
4. **Recent Errors:** `last_error` and `last_status_code`

### Health Check Query

```sql
SELECT
  id,
  name,
  CONCAT(ROUND((success_count / trigger_count) * 100, 2), '%') AS success_rate,
  trigger_count,
  success_count,
  failure_count,
  last_triggered_at,
  last_status_code,
  last_error
FROM webhooks
WHERE active = 1
ORDER BY failure_count DESC;
```

### Recent Failures Query

```sql
SELECT
  w.name AS webhook_name,
  wd.event_type,
  wd.response_status_code,
  wd.error_message,
  wd.retry_count,
  wd.created_at
FROM webhook_deliveries wd
JOIN webhooks w ON wd.webhook_id = w.id
WHERE wd.success = 0
ORDER BY wd.created_at DESC
LIMIT 20;
```

---

## Workflow Templates

### Template 1: Task Notification to Slack

```
Webhook → Switch (by event_type) → Function (format) → Slack
```

**Switch Node Routes:**
- `task.created` → "New task: {{title}}"
- `task.completed` → "Completed: {{title}}"
- `task.assigned` → "Assigned to {{agent_name}}: {{title}}"

### Template 2: Project Status Sync

```
Webhook → Filter (project_status_changed) → HTTP Request (CRM) → Email (on error)
```

**Use case:** Sync project status to external CRM when status changes.

### Template 3: Alert Escalation

```
Webhook → Filter (alert.created) → Check Priority → [Critical] → PagerDuty
                                                  → [High] → Slack
                                                  → [Medium] → Email
```

---

## Troubleshooting

### Issue: Webhook Returns 404

**Symptoms:** `last_status_code = 404`, `success = 0`

**Solutions:**
1. Check if n8n workflow is active
2. Verify webhook URL in DFO matches n8n production URL
3. Check n8n logs: `docker logs -f solaria-n8n`

### Issue: Webhook Returns 401/403

**Symptoms:** Authentication/authorization errors

**Solutions:**
1. Verify HMAC signature is correct
2. Check if n8n workflow expects different auth
3. Review `X-Webhook-Signature` header

### Issue: Webhooks Not Dispatching

**Symptoms:** No new entries in `webhook_deliveries`

**Solutions:**
1. Check if WebhookService initialized: `docker logs solaria-dfo-office | grep WebhookService`
2. Verify webhook is active: `SELECT * FROM webhooks WHERE active = 1;`
3. Check server logs for errors

### Issue: High Failure Rate

**Solutions:**
1. Review recent failures: See "Recent Failures Query" above
2. Check n8n endpoint health
3. Increase `max_retries` or `retry_delay_ms`

---

## n8n Deployment

### Access Server

```bash
ssh -i ~/.ssh/id_ed25519 root@148.230.118.124
```

### Check n8n Status

```bash
docker ps --filter 'name=solaria-n8n'
docker logs -f solaria-n8n
docker exec solaria-n8n wget -q --spider http://localhost:5678/healthz && echo "OK"
```

### Restart n8n

```bash
cd /var/www/solaria-dfo
docker compose -f docker-compose.n8n.yml restart
```

### View n8n Logs

```bash
docker logs -f solaria-n8n
docker logs -f solaria-n8n-postgres
```

### Backup n8n Data

```bash
# Backup PostgreSQL
docker exec solaria-n8n-postgres pg_dump -U n8n_user n8n > n8n-backup-$(date +%Y%m%d).sql

# Backup n8n data volume
docker run --rm -v solaria-n8n_n8n_data:/data -v $(pwd):/backup alpine tar czf /backup/n8n-data-$(date +%Y%m%d).tar.gz /data
```

---

## Next Steps

1. ✅ **Webhook Infrastructure** - Complete
2. ✅ **Event Dispatch** - Active
3. ✅ **n8n Platform** - Running
4. ⚠️ **Create n8n Workflow** - Required
5. ⏳ **Test Integration** - Pending
6. ⏳ **Create Workflow Templates** - Pending
7. ⏳ **Setup Monitoring** - Pending

---

## Resources

- **DFO Dashboard:** https://dfo.solaria.agency
- **n8n Interface:** https://n8n.solaria.agency
- **n8n Docs:** https://docs.n8n.io/
- **Webhook.site (Testing):** https://webhook.site/

---

**SOLARIA DFO - n8n Integration**
**Version 2.0 | 2025-12-27**

---
