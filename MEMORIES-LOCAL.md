# SOLARIA DFO - Memorias Locales

**Proposito:** Backup local de memorias importantes para persistencia offline

---

## Memory #7: Docker Deployment Anti-Pattern (2025-12-19)

**Tags:** antipattern, docker, deployment, devops, learning
**Importance:** 0.9

### Problem
When deploying updates to Docker containers, `docker-compose restart` does NOT update files because:
1. Files are COPIED into the image at build time (`COPY dashboard/. .`)
2. Restart only restarts the process, doesn't rebuild the image
3. Even `docker-compose up -d` may use cached images

### Symptoms
- Code changes not reflected after deployment
- `git pull` shows "Already up to date" but server is behind
- Container running old code despite successful git operations

### Correct Deployment Procedure
```bash
# 1. Update code
git reset --hard origin/main

# 2. Stop containers
docker-compose -f docker-compose.prod.yml down

# 3. Rebuild with no cache
docker-compose -f docker-compose.prod.yml build --no-cache <service>

# 4. Start fresh containers
docker-compose -f docker-compose.prod.yml up -d

# 5. Verify deployment
docker exec <container> grep -c '<pattern>' /path/to/file
```

### Key Insight
Docker images are immutable snapshots. The only way to update files inside a container is to rebuild the image with the new files.

### Related Issues
- Commit b07b2056: Fix not deployed due to restart instead of rebuild
- Commit 08eb45aa: Required full rebuild to take effect

---

## Memory #6: JavaScript this Context in Template Strings (2025-12-19)

**Tags:** javascript, antipattern, debugging, frontend
**Importance:** 0.85

### Problem
When using `onclick` handlers in template strings with `this.methodName()`, the `this` context is lost because the handler executes in global scope.

### Example (WRONG)
```javascript
const html = `<div onclick="this.showDetail(${id})">Click</div>`;
// Error: this.showDetail is not a function
```

### Solution
Use the object reference directly:
```javascript
const html = `<div onclick="App.showDetail(${id})">Click</div>`;
// Works: App is a global reference
```

### Related Commits
- e49892db: Changed this. to App. in onclick handlers
- 08eb45aa: Simplified showTaskDetail to avoid navigation issues

---

*Updated: 2025-12-19*
