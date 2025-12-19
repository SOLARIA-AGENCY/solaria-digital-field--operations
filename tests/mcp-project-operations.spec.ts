import { test, expect } from '@playwright/test';

/**
 * DFO-039/040: MCP Project Operations E2E Tests
 * Tests project creation and update via MCP HTTP endpoint
 */

const mcpUrl = process.env.TEST_MCP_URL || 'https://dfo.solaria.agency/mcp';
const apiBase = process.env.TEST_BASE_URL || 'https://dfo.solaria.agency';

// Helper to make MCP JSON-RPC calls
async function mcpCall(request: any, method: string, params: any = {}) {
  const res = await request.post(mcpUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer default',
    },
    data: {
      jsonrpc: '2.0',
      id: Date.now(),
      method: method,
      params: params,
    },
  });
  return res;
}

// Helper to call MCP tool
async function mcpToolCall(request: any, toolName: string, args: any = {}) {
  const res = await request.post(mcpUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer default',
    },
    data: {
      jsonrpc: '2.0',
      id: Date.now(),
      method: 'tools/call',
      params: {
        name: toolName,
        arguments: args,
      },
    },
  });
  return res;
}

test.describe('DFO-039/040: MCP Project Operations', () => {
  test('MCP health check returns OK', async ({ request }) => {
    const res = await request.get(`${apiBase}/mcp/health`);
    expect(res.status()).toBe(200);

    const data = await res.json();
    expect(data.status).toBe('ok');
    expect(data).toHaveProperty('dashboard');
    expect(data).toHaveProperty('sessions');
  });

  test('MCP initialize returns server info', async ({ request }) => {
    const res = await mcpCall(request, 'initialize', {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'test-client', version: '1.0.0' },
    });

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data).toHaveProperty('result');
    expect(data.result).toHaveProperty('serverInfo');
    // Server name can vary between versions
    expect(data.result.serverInfo.name).toBeTruthy();
  });

  test('MCP tools/list returns available tools', async ({ request }) => {
    const res = await mcpCall(request, 'tools/list');

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data).toHaveProperty('result');
    expect(data.result).toHaveProperty('tools');
    expect(Array.isArray(data.result.tools)).toBe(true);

    // Check for key tools
    const toolNames = data.result.tools.map((t: any) => t.name);
    expect(toolNames).toContain('create_project');
    expect(toolNames).toContain('update_project');
    expect(toolNames).toContain('list_projects');
  });

  test('MCP list_projects returns projects', async ({ request }) => {
    const res = await mcpToolCall(request, 'list_projects');

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data).toHaveProperty('result');

    // Parse the content
    const content = data.result.content[0];
    expect(content.type).toBe('text');

    const projects = JSON.parse(content.text);
    expect(projects).toHaveProperty('projects');
    expect(Array.isArray(projects.projects)).toBe(true);
  });

  test('MCP create_project creates new project', async ({ request }) => {
    const testProjectName = `E2E Test Project ${Date.now()}`;

    const res = await mcpToolCall(request, 'create_project', {
      name: testProjectName,
      client: 'E2E Test Client',
      description: 'Created via MCP E2E test',
      budget: 10000,
    });

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data).toHaveProperty('result');

    // Parse response
    const content = data.result.content[0];
    const result = JSON.parse(content.text);

    // Should have created successfully
    expect(result).toHaveProperty('message');
    expect(result.message).toContain('created');
    expect(result).toHaveProperty('project_id');

    // Store project ID for cleanup
    const projectId = result.project_id;
    expect(projectId).toBeGreaterThan(0);

    // Verify project exists via API
    const verifyRes = await request.get(`${apiBase}/api/public/projects`);
    const verifyData = await verifyRes.json();
    const createdProject = verifyData.projects.find((p: any) => p.id === projectId);
    expect(createdProject).toBeDefined();
    expect(createdProject.name).toBe(testProjectName);
  });

  test('MCP update_project updates existing project', async ({ request }) => {
    // First, get a project to update
    const listRes = await mcpToolCall(request, 'list_projects');
    const listData = await listRes.json();
    const projects = JSON.parse(listData.result.content[0].text);

    expect(projects.projects.length).toBeGreaterThan(0);
    const projectId = projects.projects[0].id;
    const originalName = projects.projects[0].name;

    // Update the project
    const newDescription = `Updated via MCP E2E test at ${new Date().toISOString()}`;
    const updateRes = await mcpToolCall(request, 'update_project', {
      project_id: projectId,
      description: newDescription,
    });

    expect(updateRes.status()).toBe(200);
    const updateData = await updateRes.json();
    const updateResult = JSON.parse(updateData.result.content[0].text);
    expect(updateResult.message).toContain('updated');

    // Verify update via API
    const verifyRes = await request.get(`${apiBase}/api/public/projects`);
    const verifyData = await verifyRes.json();
    const updatedProject = verifyData.projects.find((p: any) => p.id === projectId);
    expect(updatedProject.description).toBe(newDescription);

    // Restore original (best effort)
    await mcpToolCall(request, 'update_project', {
      project_id: projectId,
      description: projects.projects[0].description || '',
    });
  });

  test('MCP without auth header still works (default token)', async ({ request }) => {
    // Note: MCP accepts requests without explicit auth using default token
    // This is intentional for ease of integration but should be documented
    const res = await request.post(mcpUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        jsonrpc: '2.0',
        id: 1,
        method: 'tools/list',
      },
    });

    // Currently accepts without auth - returns tools list
    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data).toHaveProperty('result');
  });

  test('MCP set_project_context establishes isolation', async ({ request }) => {
    // Get a project ID first
    const listRes = await mcpToolCall(request, 'list_projects');
    const listData = await listRes.json();
    const projects = JSON.parse(listData.result.content[0].text);
    const projectId = projects.projects[0].id;
    const projectName = projects.projects[0].name;

    // Set project context
    const contextRes = await mcpToolCall(request, 'set_project_context', {
      project_name: projectName,
    });

    expect(contextRes.status()).toBe(200);
    const contextData = await contextRes.json();
    const contextResult = JSON.parse(contextData.result.content[0].text);

    expect(contextResult.success).toBe(true);
    expect(contextResult.project_id).toBe(projectId);
    expect(contextResult).toHaveProperty('session_id');
  });

  test('MCP get_current_context returns session info', async ({ request }) => {
    const res = await mcpToolCall(request, 'get_current_context');

    expect(res.status()).toBe(200);
    const data = await res.json();
    const result = JSON.parse(data.result.content[0].text);

    // Should return context info even without isolation
    expect(result).toHaveProperty('project_id');
    expect(result).toHaveProperty('isolation_enabled');
    expect(result).toHaveProperty('message');
  });

  test('MCP create_project with budget zero succeeds', async ({ request }) => {
    const testProjectName = `Zero Budget Test ${Date.now()}`;

    const res = await mcpToolCall(request, 'create_project', {
      name: testProjectName,
      client: 'Test',
      budget: 0,
    });

    expect(res.status()).toBe(200);
    const data = await res.json();
    const result = JSON.parse(data.result.content[0].text);
    expect(result).toHaveProperty('project_id');
  });

  test('MCP update_project with budget update succeeds', async ({ request }) => {
    // Get a project
    const listRes = await mcpToolCall(request, 'list_projects');
    const listData = await listRes.json();
    const projects = JSON.parse(listData.result.content[0].text);
    const projectId = projects.projects[0].id;
    const originalBudget = parseFloat(projects.projects[0].budget) || 0;

    // Update budget
    const newBudget = 55555;
    const updateRes = await mcpToolCall(request, 'update_project', {
      project_id: projectId,
      budget: newBudget,
    });

    expect(updateRes.status()).toBe(200);

    // Verify
    const verifyRes = await request.get(`${apiBase}/api/public/projects`);
    const verifyData = await verifyRes.json();
    const updatedProject = verifyData.projects.find((p: any) => p.id === projectId);
    expect(parseFloat(updatedProject.budget)).toBe(newBudget);

    // Restore
    await mcpToolCall(request, 'update_project', {
      project_id: projectId,
      budget: originalBudget,
    });
  });
});
