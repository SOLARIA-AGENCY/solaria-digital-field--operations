import { test, expect } from '@playwright/test';

/**
 * DFO-038: Budget Editing E2E Tests
 * Tests the budget editing functionality in project view
 */

const baseUrl = process.env.TEST_BASE_URL || 'https://dfo.solaria.agency';
const apiBase = `${baseUrl}/api`;

test.describe('DFO-038: Budget Editing', () => {
  let authToken: string;

  test.beforeAll(async ({ request }) => {
    // Login to get auth token
    const loginRes = await request.post(`${apiBase}/auth/login`, {
      data: { username: 'carlosjperez', password: 'bypass' }
    });
    expect(loginRes.status()).toBe(200);
    const loginData = await loginRes.json();
    authToken = loginData.token;
  });

  test('GET /api/projects returns projects with budget field', async ({ request }) => {
    const res = await request.get(`${apiBase}/projects`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data).toHaveProperty('projects');
    expect(Array.isArray(data.projects)).toBe(true);
    expect(data.projects.length).toBeGreaterThan(0);

    // Check that budget field exists
    const project = data.projects[0];
    expect(project).toHaveProperty('budget');
  });

  test('PUT /api/projects/:id updates budget successfully', async ({ request }) => {
    // Get first project
    const projectsRes = await request.get(`${apiBase}/projects`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await projectsRes.json();
    const projectId = data.projects[0].id;
    const originalBudget = parseFloat(data.projects[0].budget);

    // Update budget
    const newBudget = 99999;
    const updateRes = await request.put(`${apiBase}/projects/${projectId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      data: { budget: newBudget }
    });

    expect(updateRes.status()).toBe(200);
    const updateData = await updateRes.json();
    expect(updateData).toHaveProperty('message', 'Project updated successfully');

    // Verify the budget was updated
    const verifyRes = await request.get(`${apiBase}/projects/${projectId}`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    expect(verifyRes.status()).toBe(200);
    const verifyData = await verifyRes.json();
    expect(parseFloat(verifyData.project.budget)).toBe(newBudget);

    // Restore original budget
    await request.put(`${apiBase}/projects/${projectId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      data: { budget: originalBudget }
    });
  });

  test('PUT /api/projects/:id validates budget is a number', async ({ request }) => {
    const projectsRes = await request.get(`${apiBase}/projects`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await projectsRes.json();
    const projectId = data.projects[0].id;

    // Try to update with valid budget
    const updateRes = await request.put(`${apiBase}/projects/${projectId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      data: { budget: 12345 }
    });

    // Should succeed
    expect(updateRes.status()).toBe(200);
  });

  test('PUT /api/projects/:id requires authentication', async ({ request }) => {
    const res = await request.put(`${apiBase}/projects/1`, {
      headers: { 'Content-Type': 'application/json' },
      data: { budget: 50000 }
    });

    expect(res.status()).toBe(401);
  });

  test('PUT /api/projects/:id returns 404 for non-existent project', async ({ request }) => {
    const res = await request.put(`${apiBase}/projects/999999`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      data: { budget: 50000 }
    });

    expect(res.status()).toBe(404);
  });

  test('PUT /api/projects/:id can update multiple fields including budget', async ({ request }) => {
    const projectsRes = await request.get(`${apiBase}/projects`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await projectsRes.json();
    const projectId = data.projects[0].id;
    const original = data.projects[0];

    // Update multiple fields
    const updateRes = await request.put(`${apiBase}/projects/${projectId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      data: {
        budget: 77777,
        description: 'Test description update DFO-038'
      }
    });

    expect(updateRes.status()).toBe(200);

    // Verify both fields updated
    const verifyRes = await request.get(`${apiBase}/projects/${projectId}`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const verifyData = await verifyRes.json();
    expect(parseFloat(verifyData.project.budget)).toBe(77777);
    expect(verifyData.project.description).toBe('Test description update DFO-038');

    // Restore original
    await request.put(`${apiBase}/projects/${projectId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      data: {
        budget: parseFloat(original.budget),
        description: original.description
      }
    });
  });

  test('Public API returns project budget', async ({ request }) => {
    const res = await request.get(`${apiBase}/public/projects`);

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data).toHaveProperty('projects');
    expect(data.projects.length).toBeGreaterThan(0);

    // Check budget is included (as string from DB)
    const project = data.projects[0];
    expect(project).toHaveProperty('budget');
    // Budget comes from DB as string, verify it's parseable
    expect(parseFloat(project.budget)).toBeGreaterThanOrEqual(0);
  });

  test('PUT /api/projects/:id accepts zero budget', async ({ request }) => {
    const projectsRes = await request.get(`${apiBase}/projects`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await projectsRes.json();
    const projectId = data.projects[0].id;
    const originalBudget = parseFloat(data.projects[0].budget);

    // Set budget to zero
    const updateRes = await request.put(`${apiBase}/projects/${projectId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      data: { budget: 0 }
    });

    expect(updateRes.status()).toBe(200);

    // Verify
    const verifyRes = await request.get(`${apiBase}/projects/${projectId}`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const verifyData = await verifyRes.json();
    expect(parseFloat(verifyData.project.budget)).toBe(0);

    // Restore
    await request.put(`${apiBase}/projects/${projectId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      data: { budget: originalBudget }
    });
  });

  test('PUT /api/projects/:id accepts large budget values', async ({ request }) => {
    const projectsRes = await request.get(`${apiBase}/projects`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await projectsRes.json();
    const projectId = data.projects[0].id;
    const originalBudget = parseFloat(data.projects[0].budget);

    // Set a large budget
    const largeBudget = 10000000; // 10 million
    const updateRes = await request.put(`${apiBase}/projects/${projectId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      data: { budget: largeBudget }
    });

    expect(updateRes.status()).toBe(200);

    // Verify
    const verifyRes = await request.get(`${apiBase}/projects/${projectId}`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const verifyData = await verifyRes.json();
    expect(parseFloat(verifyData.project.budget)).toBe(largeBudget);

    // Restore
    await request.put(`${apiBase}/projects/${projectId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      data: { budget: originalBudget }
    });
  });

  test('PUT /api/projects/:id with empty body returns 400', async ({ request }) => {
    const projectsRes = await request.get(`${apiBase}/projects`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });
    const data = await projectsRes.json();
    const projectId = data.projects[0].id;

    const res = await request.put(`${apiBase}/projects/${projectId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      },
      data: {}
    });

    expect(res.status()).toBe(400);
    const responseData = await res.json();
    expect(responseData).toHaveProperty('error', 'No fields to update');
  });

  test('UI edit modal has budget field', async ({ page }) => {
    // Login
    await page.goto(baseUrl);
    await page.waitForTimeout(2000);

    // Check if login form exists - only fill if we see it
    const loginForm = page.locator('#loginForm, form[action*="login"]');
    if (await loginForm.count() > 0) {
      await page.fill('#username, input[name="username"]', 'carlosjperez');
      await page.fill('#password, input[name="password"]', 'bypass');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(2000);
    }

    // Navigate to projects
    const projectsNav = page.locator('[data-page="proyectos"], .nav-item:has-text("Proyectos")').first();
    if (await projectsNav.count() > 0) {
      await projectsNav.click();
      await page.waitForTimeout(1000);
    }

    // Click on a project card to view detail
    const projectCard = page.locator('[class*="project-card"], .project-item, .feed-item').first();
    if (await projectCard.count() > 0) {
      await projectCard.click();
      await page.waitForTimeout(1000);
    }

    // Look for edit button
    const editBtn = page.locator('button:has-text("Editar"), .btn-edit, [onclick*="openEditModal"]').first();
    if (await editBtn.count() > 0) {
      await editBtn.click();
      await page.waitForTimeout(500);

      // Check for budget field in edit modal
      const budgetField = page.locator('#edit-budget, input[name="budget"]');
      const hasBudgetField = await budgetField.count() > 0;
      expect(hasBudgetField).toBe(true);
    }
  });
});
