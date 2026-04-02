import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { logout } from '../utils/logout';

const BASE_URL = 'https://rdot.in/public/login';

// 🔥 Common Hook (Runs after every test)
test.afterEach(async ({ page }, testInfo) => {
  const screenshot = await page.screenshot();

  await testInfo.attach('Screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });

  if (testInfo.status === 'passed') {
    console.log('✅ Test Passed');
  } else {
    console.log('❌ Test Failed');
  }
});


// ✅ VALID LOGIN
test('Valid Login', async ({ page }) => {
  await login(page, {
    companyName: 'NAVEEN',
    userName: 'rsoft',
    password: 'RSoft!@345',
  });

  await expect(page).toHaveURL(/\/admin\/Dashboard/i);
  await expect(page.getByRole('link', { name: /dashboard/i })).toBeVisible();

  console.log('✅ Successfully logged in');
});


// ❌ INVALID PASSWORD
test('Invalid Password', async ({ page }) => {
  await login(page, {
    companyName: 'NAVEEN',
    userName: 'rsoft',
    password: 'wrongPassword',
  });

  await expect(page.getByText('Incorrect User Name or Password')).toBeVisible();
  console.log('❌ Login Failed - Invalid Password');
});


// ❌ INVALID USERNAME
test('Invalid Username', async ({ page }) => {
  await login(page, {
    companyName: 'NAVEEN',
    userName: 'wrongUser',
    password: 'RSoft!@345',
  });

  await expect(page.getByText('Incorrect User Name or Password')).toBeVisible();
  console.log('❌ Login Failed - Invalid Username');
});


// ⚠️ EMPTY FIELDS
test('Empty Fields', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Please Enter Company Name')).toBeVisible();
  console.log('❌ Login Failed - Empty Fields');
});


// 🔄 LOGOUT TEST
test('Logout Test', async ({ page }) => {
  await login(page, {
    companyName: 'NAVEEN',
    userName: 'rsoft',
    password: 'RSoft!@345',
  });

  await expect(page).toHaveURL(/\/admin\/Dashboard/i);

  await logout(page);

  await expect(page).toHaveURL(/\/login/i);
  await expect(page.getByRole('button', { name: /login/i })).toBeVisible();
});
