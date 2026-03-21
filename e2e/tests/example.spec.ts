import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await page.pause();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Jesus/);
});

test("has a hero section with a photo of me", async ({ page }) => {
  await page.goto('/');
  // Expect an image with a photo of me
  await page.evaluate(() => window.scrollBy(0, 300));
  await page.waitForTimeout(4000);
  
  
  await expect(page.locator('app-hero')).toBeVisible();
  await expect(page.locator('app-hero span.highlight').first()).toBeVisible();
  await expect(page.locator('app-hero span.highlight').first()).toHaveText('Desarrollador Web FullStack');

  console.log(await page.locator('img').first().innerHTML());
  // await expect(page.getByAltText('Jesus Diaz Photo').first()).toBeVisible();

  // await page.pause();
});
