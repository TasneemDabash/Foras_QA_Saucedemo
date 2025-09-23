import { test, expect } from '@playwright/test'; // playwright test runner

test('login + add to cart + checkout happy path', async ({ page }) => {
  await page.goto('/index.html');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();
  await expect(page).toHaveURL(/inventory\.html/);

  const firstItem = page.locator('.inventory_item').first();
  await firstItem.getByText('ADD TO CART').click();
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL(/cart\.html/);

  await page.getByText('CHECKOUT').click();
  await page.locator('[data-test=firstName]').fill('Noor');
  await page.locator('[data-test=lastName]').fill('Amin');
  await page.locator('[data-test=postalCode]').fill('91000');
  await page.locator('.btn_primary.cart_button').click();

  await expect(page).toHaveURL(/checkout-step-two\.html/);
  await page.getByText('FINISH').click();
  await expect(page).toHaveURL(/checkout-complete\.html/);
  await expect(page.getByText(/THANK YOU/i)).toBeVisible();
});
