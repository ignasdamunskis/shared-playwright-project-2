// @ts-check
const { test, expect } = require('@playwright/test');
const { openPlaywrightSite } = require('../helpers/example.js');

test('verify playwright site title', async ({ page }) => {
  await openPlaywrightSite({ page })
  const title = page.locator('header.hero .hero__title');
  await expect(title).toContainText('enables reliable end-to-end testing for modern web apps');
});
