#!/usr/bin/env node
/**
 * Test script to verify API bug fixes
 * Tests task creation and project update endpoints
 */

const http = require('http');

const API_BASE = 'http://localhost:3030/api';
const USER = 'carlosjperez';
const PASS = 'bypass';

let authToken = null;

function makeRequest(method, path, data = null, token = null) {
    return new Promise((resolve, reject) => {
        const url = new URL(path, API_BASE);
        const options = {
            method,
            hostname: url.hostname,
            port: url.port,
            path: url.pathname + url.search,
            headers: {
                'Content-Type': 'application/json',
            }
        };

        if (token) {
            options.headers['Authorization'] = `Bearer ${token}`;
        }

        if (data && (method === 'POST' || method === 'PUT')) {
            const body = JSON.stringify(data);
            options.headers['Content-Length'] = Buffer.byteLength(body);
        }

        const req = http.request(options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(body);
                    resolve({ status: res.statusCode, data: json });
                } catch (e) {
                    resolve({ status: res.statusCode, data: body });
                }
            });
        });

        req.on('error', reject);

        if (data && (method === 'POST' || method === 'PUT')) {
            req.write(JSON.stringify(data));
        }

        req.end();
    });
}

async function login() {
    console.log('🔐 Logging in...');
    const result = await makeRequest('POST', '/auth/login', {
        userId: USER,
        password: PASS
    });

    if (result.status === 200) {
        authToken = result.data.token;
        console.log('✅ Login successful\n');
        return true;
    } else {
        console.error('❌ Login failed:', result);
        return false;
    }
}

async function testTaskCreation() {
    console.log('📝 Testing task creation (bug fix)...');

    // Test 1: Task with minimal fields (should work with undefined handling)
    const task1 = {
        title: `Test Task ${Date.now()}`,
        description: 'Testing task creation with minimal fields',
        priority: 'medium'
        // No project_id, assigned_agent_id, estimated_hours, deadline
    };

    const result1 = await makeRequest('POST', '/tasks', task1, authToken);
    if (result1.status === 201) {
        console.log('✅ Task created successfully (minimal fields):', result1.data);
    } else {
        console.error('❌ Task creation failed:', result1);
        return false;
    }

    // Test 2: Task with all fields
    const task2 = {
        title: `Complete Task ${Date.now()}`,
        description: 'Testing task creation with all fields',
        project_id: 1,
        assigned_agent_id: 1,
        priority: 'high',
        estimated_hours: 8,
        deadline: '2025-12-31'
    };

    const result2 = await makeRequest('POST', '/tasks', task2, authToken);
    if (result2.status === 201) {
        console.log('✅ Task created successfully (all fields):', result2.data);
        return result2.data.id;
    } else {
        console.error('❌ Task creation failed:', result2);
        return false;
    }
}

async function testProjectUpdate() {
    console.log('\n🏗️  Testing project update (bug fix)...');

    // First create a project
    const newProject = {
        name: `Test Project ${Date.now()}`,
        client: 'Test Client',
        description: 'Testing project updates',
        priority: 'medium',
        budget: 50000,
        start_date: '2025-01-01',
        deadline: '2025-12-31'
    };

    const createResult = await makeRequest('POST', '/projects', newProject, authToken);
    if (createResult.status !== 201) {
        console.error('❌ Project creation failed:', createResult);
        return false;
    }

    const projectId = createResult.data.id;
    console.log('✅ Project created:', projectId);

    // Test 1: Update with partial fields (should work with undefined handling)
    const update1 = {
        status: 'in_progress',
        completion_percentage: 25
        // No other fields - should only update these two
    };

    const updateResult1 = await makeRequest('PUT', `/projects/${projectId}`, update1, authToken);
    if (updateResult1.status === 200) {
        console.log('✅ Project updated successfully (partial fields):', updateResult1.data);
    } else {
        console.error('❌ Project update failed:', updateResult1);
        return false;
    }

    // Test 2: Update with different fields
    const update2 = {
        priority: 'high',
        budget: 75000
    };

    const updateResult2 = await makeRequest('PUT', `/projects/${projectId}`, update2, authToken);
    if (updateResult2.status === 200) {
        console.log('✅ Project updated successfully (different fields):', updateResult2.data);
        return true;
    } else {
        console.error('❌ Project update failed:', updateResult2);
        return false;
    }
}

async function testTaskUpdate(taskId) {
    console.log('\n✏️  Testing task update (bug fix)...');

    // Update with partial fields
    const update = {
        status: 'in_progress',
        progress: 50
        // No other fields
    };

    const result = await makeRequest('PUT', `/tasks/${taskId}`, update, authToken);
    if (result.status === 200) {
        console.log('✅ Task updated successfully (partial fields):', result.data);
        return true;
    } else {
        console.error('❌ Task update failed:', result);
        return false;
    }
}

async function runTests() {
    console.log('🧪 Starting API Bug Fix Tests\n');
    console.log('=' .repeat(50) + '\n');

    try {
        // Login
        if (!await login()) {
            process.exit(1);
        }

        // Test task creation
        const taskId = await testTaskCreation();
        if (!taskId) {
            process.exit(1);
        }

        // Test task update
        if (!await testTaskUpdate(taskId)) {
            process.exit(1);
        }

        // Test project update
        if (!await testProjectUpdate()) {
            process.exit(1);
        }

        console.log('\n' + '=' .repeat(50));
        console.log('✅ All tests passed! Bug fixes working correctly.');
        console.log('=' .repeat(50) + '\n');
        process.exit(0);

    } catch (error) {
        console.error('\n❌ Test failed with error:', error);
        process.exit(1);
    }
}

runTests();
