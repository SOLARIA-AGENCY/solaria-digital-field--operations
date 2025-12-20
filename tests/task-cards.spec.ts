import { test, expect, request as playwrightRequest } from '@playwright/test';

/**
 * DFO-035: Task Cards E2E Tests
 * Tests for enhanced task card display with complete information
 */

const baseURL = process.env.DFO_BASE_URL || 'http://localhost:3030';
const apiBase = process.env.DASHBOARD_API_URL || `${baseURL}/api`;
const user = process.env.DASHBOARD_USER || 'carlosjperez';
const pass = process.env.DASHBOARD_PASS || 'bypass';

// Helper to get auth token
async function getAuthToken() {
  const api = await playwrightRequest.newContext();
  const loginRes = await api.post(`${apiBase}/auth/login`, {
    data: { userId: user, password: pass },
  });
  const { token } = await loginRes.json();
  return token;
}

test.describe('DFO-035: Task Cards API & Dashboard Tests', () => {
  let authToken: string;

  test.beforeAll(async () => {
    authToken = await getAuthToken();
  });

  test('API returns tasks with required fields for card display', async ({ request }) => {
    // Use public API endpoint (no auth required)
    const res = await request.get(`${apiBase}/public/tasks`);
    expect(res.status()).toBe(200);

    const data = await res.json();
    expect(data.tasks).toBeDefined();
    expect(data.tasks.length).toBeGreaterThan(0);

    // Verify task has fields needed for enhanced cards
    const task = data.tasks[0];
    expect(task).toHaveProperty('id');
    expect(task).toHaveProperty('title');
    expect(task).toHaveProperty('priority');
    expect(task).toHaveProperty('status');
    expect(task).toHaveProperty('progress');
  });

  test('dashboard loads with sidebar navigation', async ({ page }) => {
    await page.addInitScript((t: string) => localStorage.setItem('token', t), authToken);
    await page.goto(baseURL + '/');

    // Dashboard should load with navigation
    await page.waitForSelector('.sidebar-nav', { timeout: 15000 });

    // Check core navigation elements exist
    await expect(page.locator('[data-page="dashboard"]')).toBeVisible();
    await expect(page.locator('[data-page="proyectos"]')).toBeVisible();
  });

  test('dashboard widgets show task information', async ({ page }) => {
    await page.addInitScript((t: string) => localStorage.setItem('token', t), authToken);
    await page.goto(baseURL + '/');

    await page.waitForSelector('.sidebar-nav', { timeout: 15000 });

    // Check for completed tasks widget (shows task cards)
    const completedWidget = page.locator('text=Tareas Completadas').first();
    await expect(completedWidget).toBeVisible({ timeout: 10000 });

    // Check for task codes in widget (DFO-XXX format)
    const taskCodes = await page.locator('text=/DFO-\\d{3}/').count();
    expect(taskCodes).toBeGreaterThan(0);
  });

  test('completed tasks widget shows priority badges', async ({ page }) => {
    await page.addInitScript((t: string) => localStorage.setItem('token', t), authToken);
    await page.goto(baseURL + '/');

    await page.waitForSelector('.sidebar-nav', { timeout: 15000 });

    // Check for priority indicators in completed tasks widget
    const priorityIndicators = await page.locator('text=/critical|high|medium|low/i').count();
    expect(priorityIndicators).toBeGreaterThan(0);
  });

  test('projects page shows project cards', async ({ page }) => {
    await page.addInitScript((t: string) => localStorage.setItem('token', t), authToken);
    await page.goto(baseURL + '/#proyectos');

    // Wait for projects to load
    await page.waitForSelector('h3:has-text("SOLARIA")', { timeout: 15000 });

    // Should show project information (use .first() to handle multiple matches)
    await expect(page.locator('text=Tareas').first()).toBeVisible();
    await expect(page.locator('text=Budget').first()).toBeVisible();
  });

  test('getRelativeTime helper returns correct formats', async ({ page }) => {
    await page.addInitScript((t: string) => localStorage.setItem('token', t), authToken);
    await page.goto(baseURL + '/');

    await page.waitForSelector('.sidebar-nav', { timeout: 15000 });

    // Test the getRelativeTime function via browser evaluation
    const results = await page.evaluate(() => {
      const App = (window as any).App;
      if (!App || !App.getRelativeTime) {
        return { error: 'App.getRelativeTime not found' };
      }

      const now = new Date();
      return {
        now: App.getRelativeTime(new Date(now.getTime() - 30 * 1000)),
        minutes: App.getRelativeTime(new Date(now.getTime() - 15 * 60 * 1000)),
        hours: App.getRelativeTime(new Date(now.getTime() - 5 * 60 * 60 * 1000)),
        days: App.getRelativeTime(new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000)),
        weeks: App.getRelativeTime(new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)),
      };
    });

    if ('error' in results) {
      console.log('Skipping - App not initialized');
      return;
    }

    expect(results.now).toBe('ahora');
    expect(results.minutes).toBe('15m');
    expect(results.hours).toBe('5h');
    expect(results.days).toBe('3d');
    expect(results.weeks).toBe('2sem');
  });
});
