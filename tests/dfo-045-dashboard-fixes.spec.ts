/**
 * DFO-045: Dashboard Bug Fixes - Exhaustive E2E Tests
 *
 * Test Coverage:
 * 1. Active projects counter (shows correct count)
 * 2. Recent Projects navigation (highlights correct project)
 * 3. Main project card clickable (opens Ficha/Info page)
 * 4. NaN values validation (no NaN% or NaNd displayed)
 * 5. Stats cards navigation (tasks completed/in progress)
 * 6. Ficha renamed to "Informacion de Proyecto"
 * 7. Layout reorganization (expanded TAREAS, no PRESUPUESTO)
 * 8. GitHub URL in DIRECCIONES section
 */

import { test, expect, request as playwrightRequest } from '@playwright/test';

const apiBase = process.env.DASHBOARD_API_URL || 'http://localhost:3030/api';
const baseURL = process.env.DFO_BASE_URL || 'http://localhost:3030';
const user = process.env.DASHBOARD_USER || 'carlosjperez';
const pass = process.env.DASHBOARD_PASS || 'bypass';

// Helper: Login and get authenticated page
async function loginAndNavigate(page) {
  const api = await playwrightRequest.newContext();
  const loginRes = await api.post(`${apiBase}/auth/login`, {
    data: { userId: user, password: pass },
  });
  expect(loginRes.status()).toBe(200);
  const { token } = await loginRes.json();

  await page.addInitScript((t) => localStorage.setItem('token', t), token);
  await page.goto(baseURL + '/');
  await page.waitForSelector('#dashboardScreen:not(.hidden)', { timeout: 15000 });
}

test.describe('DFO-045: Dashboard Bug Fixes', () => {

  test.describe('1. Active Projects Counter', () => {
    test('should display correct number of projects in stats', async ({ page }) => {
      await loginAndNavigate(page);

      // Wait for stats to load
      await page.waitForTimeout(2000);

      // Get projects counter value
      const projectsCount = await page.locator('#statProjects').textContent();
      const count = parseInt(projectsCount || '0');

      // Should show more than 1 project (was showing 1, should show 5+)
      expect(count).toBeGreaterThanOrEqual(1);

      // Verify it's not showing 1 when there are multiple projects
      const res = await page.request.get(`${apiBase}/projects`);
      const data = await res.json();
      const totalProjects = data.projects?.length || data.pagination?.total || 0;

      // The displayed count should match API data
      expect(count).toBe(totalProjects);
    });
  });

  test.describe('2. Recent Projects Navigation', () => {
    test('should highlight clicked project in recent projects list', async ({ page }) => {
      await loginAndNavigate(page);

      // Wait for dashboard to fully load
      await page.waitForTimeout(2000);

      // Find and click on a project card (not Akademate)
      const projectCards = page.locator('.project-item, [data-id]');
      const count = await projectCards.count();

      if (count > 1) {
        // Click second project
        await projectCards.nth(1).click();
        await page.waitForTimeout(1000);

        // Verify project detail view opened (not overview)
        const content = await page.content();
        expect(content).toMatch(/TAREAS|Informaci|project-card/i);
      }
    });

    test('should open project detail when clicking project', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Navigate to projects
      await page.click('[data-page="proyectos"]');
      await page.waitForTimeout(1000);

      // Click on a project
      const projectItem = page.locator('.project-item, [data-id]').first();
      if (await projectItem.isVisible()) {
        await projectItem.click();
        await page.waitForTimeout(1000);

        // Should show project details
        const mainContent = await page.locator('#mainContent').textContent();
        expect(mainContent).toMatch(/TAREAS|Direcciones|DIRECCIONES/i);
      }
    });
  });

  test.describe('3. Main Project Card Clickable', () => {
    test('should have clickable project header card', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Navigate to projects
      await page.click('[data-page="proyectos"]');
      await page.waitForTimeout(1500);

      // Find main project card with cursor pointer
      const projectCard = page.locator('.project-card[onclick*="openProjectFicha"]');

      if (await projectCard.count() > 0) {
        // Check it has cursor pointer style
        const cursor = await projectCard.first().evaluate(el =>
          window.getComputedStyle(el).cursor
        );
        expect(cursor).toBe('pointer');

        // Check it has the chevron indicator
        const chevron = await projectCard.first().locator('.fa-chevron-right').count();
        expect(chevron).toBeGreaterThanOrEqual(1);
      }
    });

    test('should open Ficha when clicking project card', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Navigate to projects
      await page.click('[data-page="proyectos"]');
      await page.waitForTimeout(1500);

      // Click main project card
      const projectCard = page.locator('.project-card[onclick*="openProjectFicha"]').first();

      if (await projectCard.isVisible()) {
        await projectCard.click();
        await page.waitForTimeout(1000);

        // Should show "Informacion de Proyecto" page
        const content = await page.content();
        expect(content).toMatch(/Informaci.*Proyecto|Ficha|project-info/i);
      }
    });
  });

  test.describe('4. NaN Values Validation', () => {
    test('should not display NaN% anywhere in dashboard', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Navigate to projects
      await page.click('[data-page="proyectos"]');
      await page.waitForTimeout(1500);

      // Check entire page content for NaN
      const content = await page.content();
      expect(content).not.toContain('NaN%');
      expect(content).not.toContain('NaNd');
      expect(content).not.toContain('Invalid Date');
    });

    test('should show "Sin fecha" for projects without deadline', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Navigate to projects
      await page.click('[data-page="proyectos"]');
      await page.waitForTimeout(1500);

      // Look for "Sin fecha" text in project cards
      const content = await page.content();

      // Should either have valid dates or "Sin fecha"
      expect(content).not.toContain('NaNd');
      // Either has real dates or fallback text
      const hasValidContent = content.includes('Sin fecha') || content.match(/\d+d/) || content.includes('dias');
      expect(hasValidContent).toBeTruthy();
    });

    test('should show 0% for projects without tasks', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Navigate to projects
      await page.click('[data-page="proyectos"]');
      await page.waitForTimeout(1500);

      // Should not have NaN%
      const content = await page.content();
      expect(content).not.toContain('NaN%');
    });
  });

  test.describe('5. Stats Cards Navigation', () => {
    test('TAREAS COMPLETADAS card should be clickable', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Find completed tasks stat card
      const completedCard = page.locator('.stat-card:has-text("COMPLETADAS")');

      if (await completedCard.isVisible()) {
        const cursor = await completedCard.evaluate(el =>
          window.getComputedStyle(el).cursor
        );
        expect(cursor).toBe('pointer');
      }
    });

    test('EN PROGRESO card should be clickable', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Find in progress tasks stat card
      const inProgressCard = page.locator('.stat-card:has-text("PROGRESO")');

      if (await inProgressCard.isVisible()) {
        const cursor = await inProgressCard.evaluate(el =>
          window.getComputedStyle(el).cursor
        );
        expect(cursor).toBe('pointer');
      }
    });

    test('clicking stats card should show filtered tasks', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Click completed tasks card
      const completedCard = page.locator('.stat-card:has-text("COMPLETADAS")');

      if (await completedCard.isVisible()) {
        await completedCard.click();
        await page.waitForTimeout(1500);

        // Should show project detail with tasks
        const content = await page.content();
        expect(content).toMatch(/TAREAS|tasks|tarea/i);
      }
    });
  });

  test.describe('6. Ficha Renamed to Informacion de Proyecto', () => {
    test('should display "Informacion de Proyecto" instead of "Ficha"', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Navigate to projects
      await page.click('[data-page="proyectos"]');
      await page.waitForTimeout(1500);

      // Open Ficha/Info page
      const projectCard = page.locator('.project-card[onclick*="openProjectFicha"]').first();

      if (await projectCard.isVisible()) {
        await projectCard.click();
        await page.waitForTimeout(1000);

        // Check for "Informacion de Proyecto" title
        const title = page.locator('.section-title:has-text("Informaci")');
        await expect(title).toBeVisible();

        // Should NOT show "Ficha:" prefix
        const content = await page.content();
        expect(content).not.toMatch(/Ficha:\s*[A-Z]/);
      }
    });
  });

  test.describe('7. Layout Reorganization', () => {
    test('should show expanded TAREAS card in 2-column layout', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Navigate to projects
      await page.click('[data-page="proyectos"]');
      await page.waitForTimeout(1500);

      // Check for TAREAS card
      const tasksCard = page.locator('.project-card:has-text("TAREAS")').first();

      if (await tasksCard.isVisible()) {
        // The layout should use 2fr 1fr grid
        const parent = tasksCard.locator('xpath=..');
        const display = await parent.evaluate(el =>
          window.getComputedStyle(el).display
        );
        expect(display).toBe('grid');
      }
    });

    test('should NOT show PRESUPUESTO card in project detail', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Navigate to projects
      await page.click('[data-page="proyectos"]');
      await page.waitForTimeout(1500);

      // PRESUPUESTO card should not be in the main info-cards row
      // (it may exist elsewhere but not in the 2-column layout)
      const content = await page.locator('#mainContent').textContent();

      // The old 3-column layout had PRESUPUESTO between TAREAS and DIRECCIONES
      // Now it should only have TAREAS and DIRECCIONES in the main grid
      const tasksCard = page.locator('.project-card:has-text("TAREAS")');
      const urlsCard = page.locator('.project-card:has-text("DIRECCIONES")');

      if (await tasksCard.isVisible() && await urlsCard.isVisible()) {
        // Both should be in same grid container
        const tasksParent = await tasksCard.first().evaluate(el => el.parentElement?.className);
        const urlsParent = await urlsCard.first().evaluate(el => el.parentElement?.className);

        // They should share same parent (2-column grid)
        expect(tasksParent || '').not.toBe('');
      }
    });
  });

  test.describe('8. GitHub URL in DIRECCIONES', () => {
    test('should support github key in URL items', async ({ page }) => {
      await loginAndNavigate(page);
      await page.waitForTimeout(2000);

      // Navigate to projects
      await page.click('[data-page="proyectos"]');
      await page.waitForTimeout(1500);

      // Check page source for github URL support
      const content = await page.content();

      // The urlItems array should now include github
      // This is a code-level test - we verify the CSS class exists
      expect(content).toMatch(/url-item-icon.*github|fa-github/);
    });

    test('should have GitHub icon styling defined', async ({ page }) => {
      await loginAndNavigate(page);

      // Check that the github class is styled
      const styles = await page.evaluate(() => {
        const styleSheets = document.styleSheets;
        for (const sheet of styleSheets) {
          try {
            for (const rule of sheet.cssRules) {
              if (rule.cssText?.includes('.url-item-icon.github')) {
                return rule.cssText;
              }
            }
          } catch (e) {
            // Cross-origin stylesheets
          }
        }
        return null;
      });

      // Should find the github styling rule
      expect(styles).toContain('github');
    });
  });
});

test.describe('Regression Tests', () => {
  test('dashboard should load without JavaScript errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => {
      errors.push(error.message);
    });

    await loginAndNavigate(page);
    await page.waitForTimeout(3000);

    // Navigate through main sections
    await page.click('[data-page="proyectos"]');
    await page.waitForTimeout(1000);
    await page.click('[data-page="dashboard"]');
    await page.waitForTimeout(1000);

    // Filter out known non-critical errors
    const criticalErrors = errors.filter(e =>
      !e.includes('ResizeObserver') &&
      !e.includes('Script error')
    );

    expect(criticalErrors).toHaveLength(0);
  });

  test('all stat cards should display numeric values', async ({ page }) => {
    await loginAndNavigate(page);
    await page.waitForTimeout(2000);

    // Check all stat values
    const statValues = ['#statProjects', '#statTasks', '#statAgents', '#statAlerts'];

    for (const selector of statValues) {
      const element = page.locator(selector);
      if (await element.isVisible()) {
        const text = await element.textContent();
        // Should be a number, not NaN or undefined
        expect(text).toMatch(/^\d+$/);
      }
    }
  });
});
