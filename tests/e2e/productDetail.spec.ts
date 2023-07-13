import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  // Hardcoded url to test product in swell.is (product-one)
  await page.goto('/product/product-one');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Pluck | Buy Product One');
});
