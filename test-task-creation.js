#!/usr/bin/env node

/**
 * Test script for task creation endpoints
 * Tests the fix for: "Bind parameters must not contain undefined. To pass SQL NULL specify JS null"
 */

const API_URL = 'http://localhost:3030';
const TEST_USER = 'carlosjperez';
const TEST_PASSWORD = 'bypass';

let authToken = null;

// ANSI color codes
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

async function login() {
    log('\n🔐 Authenticating...', 'cyan');

    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            userId: TEST_USER,
            password: TEST_PASSWORD
        })
    });

    if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`);
    }

    const data = await response.json();
    authToken = data.token;
    log(`✅ Authenticated as ${data.user.name} (${data.user.role})`, 'green');
    return data.user;
}

async function testCreateTask(testName, taskData, shouldSucceed = true) {
    log(`\n📝 Test: ${testName}`, 'yellow');
    log(`   Data: ${JSON.stringify(taskData, null, 2)}`, 'blue');

    try {
        const response = await fetch(`${API_URL}/api/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(taskData)
        });

        const responseData = await response.json();

        if (shouldSucceed) {
            if (response.ok) {
                log(`   ✅ PASS: Task created successfully (ID: ${responseData.id})`, 'green');
                return { success: true, data: responseData };
            } else {
                log(`   ❌ FAIL: Expected success but got error: ${responseData.error}`, 'red');
                return { success: false, error: responseData.error };
            }
        } else {
            if (!response.ok) {
                log(`   ✅ PASS: Request failed as expected: ${responseData.error}`, 'green');
                return { success: true, expectedFailure: true };
            } else {
                log(`   ❌ FAIL: Expected failure but request succeeded`, 'red');
                return { success: false };
            }
        }
    } catch (error) {
        log(`   ❌ ERROR: ${error.message}`, 'red');
        return { success: false, error: error.message };
    }
}

async function testAddTaskFromAgent(testName, taskData, shouldSucceed = true) {
    log(`\n🤖 Test: ${testName}`, 'yellow');
    log(`   Data: ${JSON.stringify(taskData, null, 2)}`, 'blue');

    try {
        const response = await fetch(`${API_URL}/api/agent/add-task`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(taskData)
        });

        const responseData = await response.json();

        if (shouldSucceed) {
            if (response.ok) {
                log(`   ✅ PASS: Task created successfully (ID: ${responseData.task_id})`, 'green');
                return { success: true, data: responseData };
            } else {
                log(`   ❌ FAIL: Expected success but got error: ${responseData.error}`, 'red');
                return { success: false, error: responseData.error };
            }
        } else {
            if (!response.ok) {
                log(`   ✅ PASS: Request failed as expected: ${responseData.error}`, 'green');
                return { success: true, expectedFailure: true };
            } else {
                log(`   ❌ FAIL: Expected failure but request succeeded`, 'red');
                return { success: false };
            }
        }
    } catch (error) {
        log(`   ❌ ERROR: ${error.message}`, 'red');
        return { success: false, error: error.message };
    }
}

async function runTests() {
    log('\n' + '='.repeat(80), 'cyan');
    log('🧪 SOLARIA Task Creation Test Suite', 'cyan');
    log('Testing fix for: "Bind parameters must not contain undefined"', 'cyan');
    log('='.repeat(80), 'cyan');

    try {
        // Login
        await login();

        const results = [];

        // Test 1: POST /api/tasks - Complete task with all fields
        results.push(await testCreateTask(
            'POST /api/tasks - Complete task with all fields',
            {
                title: 'Test Task - All Fields',
                description: 'This task has all fields populated',
                project_id: 1,
                assigned_agent_id: 3,
                priority: 'high',
                estimated_hours: 8,
                deadline: '2025-12-31T23:59:59'
            },
            true
        ));

        // Test 2: POST /api/tasks - Minimal task (only required fields)
        results.push(await testCreateTask(
            'POST /api/tasks - Minimal task (undefined optional fields)',
            {
                title: 'Test Task - Minimal Fields',
                description: 'This task has undefined optional fields'
                // project_id, assigned_agent_id, estimated_hours, deadline are undefined
            },
            true
        ));

        // Test 3: POST /api/tasks - Task with null values
        results.push(await testCreateTask(
            'POST /api/tasks - Task with explicit null values',
            {
                title: 'Test Task - Null Values',
                description: 'This task has explicit null values',
                project_id: null,
                assigned_agent_id: null,
                estimated_hours: null,
                deadline: null
            },
            true
        ));

        // Test 4: POST /api/tasks - Task missing title (should fail)
        results.push(await testCreateTask(
            'POST /api/tasks - Missing required field (title)',
            {
                description: 'This should fail - no title'
            },
            false
        ));

        // Test 5: POST /api/agent/add-task - Complete task
        results.push(await testAddTaskFromAgent(
            'POST /api/agent/add-task - Complete task',
            {
                project_id: 1,
                title: 'Agent Task - All Fields',
                description: 'Created by agent with all fields',
                agent_id: 3,
                priority: 'medium',
                estimated_hours: 16
            },
            true
        ));

        // Test 6: POST /api/agent/add-task - Minimal task
        results.push(await testAddTaskFromAgent(
            'POST /api/agent/add-task - Minimal task (undefined optional fields)',
            {
                title: 'Agent Task - Minimal',
                description: 'Created by agent with minimal fields'
                // project_id defaults to 1, agent_id and estimated_hours undefined
            },
            true
        ));

        // Test 7: POST /api/agent/add-task - Task with null values
        results.push(await testAddTaskFromAgent(
            'POST /api/agent/add-task - Task with explicit null values',
            {
                project_id: 1,
                title: 'Agent Task - Null Values',
                description: 'Created by agent with null values',
                agent_id: null,
                estimated_hours: null
            },
            true
        ));

        // Summary
        log('\n' + '='.repeat(80), 'cyan');
        log('📊 Test Summary', 'cyan');
        log('='.repeat(80), 'cyan');

        const totalTests = results.length;
        const passedTests = results.filter(r => r.success).length;
        const failedTests = totalTests - passedTests;

        log(`Total tests: ${totalTests}`, 'blue');
        log(`Passed: ${passedTests}`, passedTests === totalTests ? 'green' : 'yellow');
        log(`Failed: ${failedTests}`, failedTests > 0 ? 'red' : 'green');

        if (failedTests === 0) {
            log('\n🎉 All tests passed!', 'green');
            log('✅ The fix successfully handles undefined values', 'green');
            process.exit(0);
        } else {
            log('\n❌ Some tests failed!', 'red');
            log('Please review the errors above', 'red');
            process.exit(1);
        }

    } catch (error) {
        log(`\n💥 Fatal error: ${error.message}`, 'red');
        log(error.stack, 'red');
        process.exit(1);
    }
}

// Run tests
runTests();
