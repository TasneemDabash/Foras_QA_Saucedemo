import { test, expect, Page } from '@playwright/test';

async function login(page: Page, user = 'standard_user', pass = 'secret_sauce') {
  await page.goto('/');
  await page.locator('#user-name').fill(user);
  await page.locator('#password').fill(pass);
  await page.locator('#login-button').click();
}

test.describe('SauceDemo – Smoke', () => {
  test('valid login redirects to inventory', async ({ page }) => {
    await login(page);
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('locked_out_user sees an error', async ({ page }) => {
    await login(page, 'locked_out_user', 'secret_sauce');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('sort Z→A orders names descending', async ({ page }) => {
    await login(page);
    await page.locator('.product_sort_container').selectOption('za');

    const names = await page.locator('.inventory_item_name').allTextContents();
    const sortedDesc = [...names].sort((a, b) => a.localeCompare(b)).reverse();

    expect(names).toEqual(sortedDesc);
  });

  test('checkout missing postal shows validation error', async ({ page }) => {
    await login(page);
    await page.getByRole('button', { name: /add to cart/i }).first().click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('.checkout_button').click();

    await page.locator('#first-name').fill('Nour');
    await page.locator('#last-name').fill('Dabash');
    await page.locator('#postal-code').fill('');
    await page.locator('#continue').click();

    const error = page.locator('[data-test="error"]');
    await expect(error).toBeVisible();
    await expect(error).toContainText(/postal code is required/i);
  });

  test('logout returns to login', async ({ page }) => {
    await login(page); 
    await page.locator('#react-burger-menu-btn').click();
  
    const logoutLink = page.locator('#logout_sidebar_link');
    await expect(logoutLink).toBeVisible();
    await logoutLink.click();
    await expect(page).toHaveURL(/https:\/\/www\.saucedemo\.com(\/v1)?\/$/);
    await expect(page.locator('#login-button')).toBeVisible();
  });
  
});
