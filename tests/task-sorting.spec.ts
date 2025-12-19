import { test, expect } from '@playwright/test';

/**
 * DFO-037: Task List Sorting E2E Tests
 * Tests the sorting functionality for task lists
 */

const baseUrl = process.env.TEST_BASE_URL || 'https://dfo.solaria.agency';
const apiBase = `${baseUrl}/api`;

test.describe('DFO-037: Task List Sorting', () => {
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

  test('GET /api/public/tasks supports sort_by parameter', async ({ request }) => {
    const res = await request.get(`${apiBase}/public/tasks?sort_by=created_at&sort_order=asc`);

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data).toHaveProperty('tasks');
    expect(Array.isArray(data.tasks)).toBe(true);

    // Verify ascending order by created_at
    if (data.tasks.length >= 2) {
      const firstDate = new Date(data.tasks[0].created_at).getTime();
      const secondDate = new Date(data.tasks[1].created_at).getTime();
      expect(firstDate).toBeLessThanOrEqual(secondDate);
    }
  });

  test('GET /api/public/tasks sorts by title ascending', async ({ request }) => {
    const res = await request.get(`${apiBase}/public/tasks?sort_by=title&sort_order=asc&limit=50`);

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data.tasks.length).toBeGreaterThan(0);

    // Verify alphabetical order
    if (data.tasks.length >= 2) {
      const titles = data.tasks.map((t: any) => t.title.toLowerCase());
      const sorted = [...titles].sort();
      expect(titles).toEqual(sorted);
    }
  });

  test('GET /api/public/tasks sorts by priority descending', async ({ request }) => {
    const res = await request.get(`${apiBase}/public/tasks?sort_by=priority&sort_order=desc`);

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data.tasks.length).toBeGreaterThan(0);

    // Priority values: critical > high > medium > low
    const priorityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
    if (data.tasks.length >= 2) {
      for (let i = 0; i < data.tasks.length - 1; i++) {
        const currentPriority = priorityOrder[data.tasks[i].priority as keyof typeof priorityOrder] || 0;
        const nextPriority = priorityOrder[data.tasks[i + 1].priority as keyof typeof priorityOrder] || 0;
        expect(currentPriority).toBeGreaterThanOrEqual(nextPriority);
      }
    }
  });

  test('GET /api/public/tasks sorts by updated_at descending (default)', async ({ request }) => {
    const res = await request.get(`${apiBase}/public/tasks`);

    expect(res.status()).toBe(200);
    const data = await res.json();

    // Default should be updated_at DESC
    if (data.tasks.length >= 2) {
      const firstDate = new Date(data.tasks[0].updated_at).getTime();
      const secondDate = new Date(data.tasks[1].updated_at).getTime();
      expect(firstDate).toBeGreaterThanOrEqual(secondDate);
    }
  });

  test('GET /api/tasks supports sort_by with authentication', async ({ request }) => {
    const res = await request.get(`${apiBase}/tasks?sort_by=progress&sort_order=desc`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);

    // Verify progress descending order
    if (data.length >= 2) {
      for (let i = 0; i < data.length - 1; i++) {
        expect(data[i].progress).toBeGreaterThanOrEqual(data[i + 1].progress);
      }
    }
  });

  test('GET /api/tasks sorts by task_number ascending', async ({ request }) => {
    const res = await request.get(`${apiBase}/tasks?sort_by=task_number&sort_order=asc&limit=50`, {
      headers: { 'Authorization': `Bearer ${authToken}` }
    });

    expect(res.status()).toBe(200);
    const data = await res.json();

    if (data.length >= 2) {
      for (let i = 0; i < data.length - 1; i++) {
        const current = data[i].task_number || 0;
        const next = data[i + 1].task_number || 0;
        expect(current).toBeLessThanOrEqual(next);
      }
    }
  });

  test('invalid sort_by parameter falls back to default', async ({ request }) => {
    const res = await request.get(`${apiBase}/public/tasks?sort_by=invalid_column&sort_order=asc`);

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data).toHaveProperty('tasks');
    // Should not error - falls back to default
  });

  test('SQL injection attempt is safely handled', async ({ request }) => {
    // Attempt SQL injection via sort_by
    const res = await request.get(`${apiBase}/public/tasks?sort_by=title;DROP TABLE tasks;--`);

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data).toHaveProperty('tasks');
    // Should safely fall back to default column
  });

  test('combined filtering and sorting works', async ({ request }) => {
    const res = await request.get(
      `${apiBase}/public/tasks?status=pending&sort_by=priority&sort_order=desc&limit=20`
    );

    expect(res.status()).toBe(200);
    const data = await res.json();

    // All tasks should be pending
    data.tasks.forEach((task: any) => {
      expect(task.status).toBe('pending');
    });
  });

  test('sort by project_name works', async ({ request }) => {
    const res = await request.get(`${apiBase}/public/tasks?sort_by=project_name&sort_order=asc&limit=50`);

    expect(res.status()).toBe(200);
    const data = await res.json();

    if (data.tasks.length >= 2) {
      const projectNames = data.tasks.map((t: any) => (t.project_name || '').toLowerCase());
      const sorted = [...projectNames].sort();
      expect(projectNames).toEqual(sorted);
    }
  });

  test('limit parameter is respected with sorting', async ({ request }) => {
    const res = await request.get(`${apiBase}/public/tasks?sort_by=created_at&limit=5`);

    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data.tasks.length).toBeLessThanOrEqual(5);
  });
});
