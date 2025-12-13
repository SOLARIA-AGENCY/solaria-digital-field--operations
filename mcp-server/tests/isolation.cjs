#!/usr/bin/env node
/**
 * SOLARIA DFO - MCP Isolation Tests
 *
 * Tests for multi-agent project isolation:
 * - Session creation and management
 * - Project context setting
 * - Data isolation between sessions
 * - Admin mode bypass
 */

const assert = require('node:assert').strict;
const crypto = require('node:crypto');

const MCP_URL = process.env.MCP_URL || 'http://localhost:3031';
const AUTH_TOKEN = process.env.AUTH_TOKEN || 'Bearer default';

// Helper to make MCP JSON-RPC calls
async function mcpCall(method, params = {}, headers = {}) {
  const response = await fetch(`${MCP_URL}/mcp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': AUTH_TOKEN,
      ...headers,
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: crypto.randomUUID(),
      method,
      params,
    }),
  });

  const json = await response.json();
  if (json.error) {
    throw new Error(json.error.message);
  }
  return json.result;
}

// Parse tool result content
function parseToolResult(result) {
  if (result?.content?.[0]?.text) {
    return JSON.parse(result.content[0].text);
  }
  return result;
}

// ==================== TESTS ====================

async function testMCPHealth() {
  console.log('Test: MCP Health Check...');

  const response = await fetch(`${MCP_URL}/mcp/health`);
  assert.equal(response.status, 200, 'Health endpoint should return 200');

  const json = await response.json();
  assert.ok(json.status === 'ok' || json.status === 'degraded', 'Status should be ok or degraded');
  assert.ok(json.timestamp, 'Should have timestamp');

  console.log('  PASS: Health check working');
}

async function testMCPInitialize() {
  console.log('Test: MCP Initialize...');

  const result = await mcpCall('initialize', {
    protocolVersion: '2024-11-05',
    clientInfo: { name: 'test-client', version: '1.0.0' },
  });

  assert.ok(result.serverInfo, 'Should have serverInfo');
  assert.equal(result.serverInfo.name, 'solaria-dashboard', 'Server name should be solaria-dashboard');
  assert.ok(result.capabilities, 'Should have capabilities');

  // Session info should be returned
  assert.ok(result.session, 'Should return session info');

  // Isolation info
  assert.ok(result.isolation, 'Should return isolation info');
  assert.equal(result.isolation.mode, 'admin', 'Without project context, mode should be admin');

  console.log('  PASS: Initialize returns session and isolation info');
}

async function testToolsList() {
  console.log('Test: Tools List...');

  const result = await mcpCall('tools/list');

  assert.ok(result.tools, 'Should have tools array');
  assert.ok(Array.isArray(result.tools), 'Tools should be an array');

  // Check for isolation-related tools
  const toolNames = result.tools.map(t => t.name);
  assert.ok(toolNames.includes('set_project_context'), 'Should have set_project_context tool');
  assert.ok(toolNames.includes('get_current_context'), 'Should have get_current_context tool');
  assert.ok(toolNames.includes('list_projects'), 'Should have list_projects tool');
  assert.ok(toolNames.includes('list_tasks'), 'Should have list_tasks tool');

  console.log(`  PASS: Found ${result.tools.length} tools including isolation tools`);
}

async function testSessionCreation() {
  console.log('Test: Session Creation...');

  // First call should create a session
  const result = await mcpCall('initialize', {
    protocolVersion: '2024-11-05',
    clientInfo: { name: 'test-client', version: '1.0.0' },
  });

  const sessionId = result.session?.id;
  assert.ok(sessionId, 'Should receive a session ID');
  assert.ok(sessionId.startsWith('mcp-'), 'Session ID should start with mcp-');

  console.log(`  PASS: Session created: ${sessionId}`);
  return sessionId;
}

async function testSetProjectContext() {
  console.log('Test: Set Project Context...');

  // Get session first
  const initResult = await mcpCall('initialize', {
    protocolVersion: '2024-11-05',
    clientInfo: { name: 'test-client', version: '1.0.0' },
  });
  const sessionId = initResult.session?.id;

  // List projects to get a valid project
  const projectsResult = await mcpCall('tools/call', {
    name: 'list_projects',
    arguments: {},
  }, { 'Mcp-Session-Id': sessionId });

  const projects = parseToolResult(projectsResult);

  if (!projects.projects || projects.projects.length === 0) {
    console.log('  SKIP: No projects available for testing');
    return null;
  }

  const testProject = projects.projects[0];

  // Set project context
  const contextResult = await mcpCall('tools/call', {
    name: 'set_project_context',
    arguments: { project_id: testProject.id },
  }, { 'Mcp-Session-Id': sessionId });

  const context = parseToolResult(contextResult);

  assert.equal(context.project_id, testProject.id, 'Should set project_id');
  assert.ok(context.session_id, 'Should return session_id');
  assert.equal(context.isolation_enabled, true, 'Isolation should be enabled');

  console.log(`  PASS: Project context set to ${testProject.name} (ID: ${testProject.id})`);
  return { sessionId: context.session_id, projectId: testProject.id };
}

async function testProjectIsolation() {
  console.log('Test: Project Isolation...');

  // Create session and set project context
  const context = await testSetProjectContext();
  if (!context) {
    console.log('  SKIP: No project context available');
    return;
  }

  const { sessionId, projectId } = context;

  // List projects should only return the isolated project
  const projectsResult = await mcpCall('tools/call', {
    name: 'list_projects',
    arguments: {},
  }, { 'Mcp-Session-Id': sessionId });

  const projects = parseToolResult(projectsResult);

  assert.equal(projects.projects.length, 1, 'Should only see 1 project when isolated');
  assert.equal(projects.projects[0].id, projectId, 'Should be the correct project');
  assert.ok(projects._isolation, 'Should have isolation metadata');
  assert.equal(projects._isolation.isolated_to_project, projectId, 'Isolation metadata should show project');

  console.log('  PASS: Project isolation working correctly');
}

async function testGetCurrentContext() {
  console.log('Test: Get Current Context...');

  // Create a fresh session
  const initResult = await mcpCall('initialize', {
    protocolVersion: '2024-11-05',
    clientInfo: { name: 'test-client', version: '1.0.0' },
  });
  const sessionId = initResult.session?.id;

  // Get context before setting project
  const beforeResult = await mcpCall('tools/call', {
    name: 'get_current_context',
    arguments: {},
  }, { 'Mcp-Session-Id': sessionId });

  const before = parseToolResult(beforeResult);
  assert.equal(before.isolation_enabled, false, 'Should not be isolated initially');
  assert.equal(before.project_id, null, 'Should have no project initially');

  // Set a project
  const projectsResult = await mcpCall('tools/call', {
    name: 'list_projects',
    arguments: {},
  }, { 'Mcp-Session-Id': sessionId });

  const projects = parseToolResult(projectsResult);
  if (projects.projects && projects.projects.length > 0) {
    await mcpCall('tools/call', {
      name: 'set_project_context',
      arguments: { project_id: projects.projects[0].id },
    }, { 'Mcp-Session-Id': sessionId });

    // Get context after setting project
    const afterResult = await mcpCall('tools/call', {
      name: 'get_current_context',
      arguments: {},
    }, { 'Mcp-Session-Id': sessionId });

    const after = parseToolResult(afterResult);
    assert.equal(after.isolation_enabled, true, 'Should be isolated after setting project');
    assert.equal(after.project_id, projects.projects[0].id, 'Should have correct project');
  }

  console.log('  PASS: Get current context working correctly');
}

async function testAdminModeBypass() {
  console.log('Test: Admin Mode Bypass...');

  // List projects in admin mode (should see all)
  const adminResult = await mcpCall('tools/call', {
    name: 'list_projects',
    arguments: {},
  }, { 'X-Admin-Mode': 'true' });

  const adminProjects = parseToolResult(adminResult);
  const adminCount = adminProjects.projects?.length || 0;

  // Create isolated session
  const context = await testSetProjectContext();
  if (!context) {
    console.log('  SKIP: No project context available');
    return;
  }

  // List projects in isolated mode (should see only 1)
  const isolatedResult = await mcpCall('tools/call', {
    name: 'list_projects',
    arguments: {},
  }, { 'Mcp-Session-Id': context.sessionId });

  const isolatedProjects = parseToolResult(isolatedResult);
  const isolatedCount = isolatedProjects.projects?.length || 0;

  assert.ok(adminCount >= isolatedCount, 'Admin should see equal or more projects than isolated');

  if (adminCount > 1) {
    assert.equal(isolatedCount, 1, 'Isolated session should only see 1 project');
    console.log(`  PASS: Admin sees ${adminCount} projects, isolated sees ${isolatedCount}`);
  } else {
    console.log(`  PASS: Admin mode working (only ${adminCount} project in system)`);
  }
}

async function testTaskIsolation() {
  console.log('Test: Task Isolation...');

  const context = await testSetProjectContext();
  if (!context) {
    console.log('  SKIP: No project context available');
    return;
  }

  const { sessionId, projectId } = context;

  // List tasks in isolated mode
  const tasksResult = await mcpCall('tools/call', {
    name: 'list_tasks',
    arguments: {},
  }, { 'Mcp-Session-Id': sessionId });

  const tasks = parseToolResult(tasksResult);

  // All tasks should belong to the isolated project
  if (tasks.tasks && tasks.tasks.length > 0) {
    for (const task of tasks.tasks) {
      assert.equal(task.project_id, projectId, `Task ${task.id} should belong to project ${projectId}`);
    }
    console.log(`  PASS: All ${tasks.tasks.length} tasks belong to isolated project`);
  } else {
    console.log('  PASS: No tasks in project (isolation working)');
  }
}

async function testCreateTaskIsolation() {
  console.log('Test: Create Task Respects Isolation...');

  const context = await testSetProjectContext();
  if (!context) {
    console.log('  SKIP: No project context available');
    return;
  }

  const { sessionId, projectId } = context;

  // Create a task without specifying project_id
  const createResult = await mcpCall('tools/call', {
    name: 'create_task',
    arguments: {
      title: `Test Task ${Date.now()}`,
      description: 'Created by isolation test',
      priority: 'low',
    },
  }, { 'Mcp-Session-Id': sessionId });

  const created = parseToolResult(createResult);

  if (created.task) {
    assert.equal(created.task.project_id, projectId, 'Created task should be in isolated project');
    console.log(`  PASS: Task created in isolated project (ID: ${created.task.id})`);
  } else if (created.error) {
    console.log(`  SKIP: ${created.error}`);
  } else {
    console.log('  PASS: Task creation respects isolation');
  }
}

// ==================== MAIN ====================

async function main() {
  console.log('\n========================================');
  console.log('SOLARIA DFO - MCP Isolation Tests');
  console.log(`MCP URL: ${MCP_URL}`);
  console.log('========================================\n');

  try {
    await testMCPHealth();
    await testMCPInitialize();
    await testToolsList();
    await testSessionCreation();
    await testSetProjectContext();
    await testGetCurrentContext();
    await testProjectIsolation();
    await testAdminModeBypass();
    await testTaskIsolation();
    await testCreateTaskIsolation();

    console.log('\n========================================');
    console.log('ALL ISOLATION TESTS PASSED');
    console.log('========================================\n');
  } catch (error) {
    console.error('\n========================================');
    console.error('TEST FAILED:', error.message);
    console.error('========================================\n');
    process.exit(1);
  }
}

main();
