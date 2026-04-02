import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { logout } from '../utils/logout';

const BASE_URL = 'https://rdot.in/public/login';

// ✅ VALID LOGIN
test('Valid Login ', async ({ page }) => {
  await login(page, {
    companyName: 'NAVEEN',
    userName: 'rsoft',
    password: 'RSoft!@345',
  });

  try {
    await page.waitForURL(/\/admin\/Dashboard/i);
    await expect(page).toHaveURL(/\/admin\/Dashboard/i);

    // Screenshot on success
    const screenshot = await page.screenshot();
    await test.info().attach('Login Success Screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });

    console.log('✅ Successfully logged in');
  } catch (error) {
    const screenshot = await page.screenshot();
    await test.info().attach('Login Failed Screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });

    console.log('❌ Login Failed');
    throw error;
  }
});


// ❌ INVALID PASSWORD
test('Invalid Password', async ({ page }) => {
  await login(page, {
    companyName: 'NAVEEN',
    userName: 'rsoft',
    password: 'wrongPassword',
  });

  try {
    await expect(page.getByText('Incorrect User Name or Password')).toBeVisible();

    const screenshot = await page.screenshot();
    await test.info().attach('Invalid Password Screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });

    console.log('❌ Login Failed - Invalid Password');
  } catch (error) {
    throw error;
  }
});


// ❌ INVALID USERNAME
test('Invalid Username', async ({ page }) => {
  await login(page, {
    companyName: 'NAVEEN',
    userName: 'wrongUser',
    password: 'RSoft!@345',
  });

  try {
    await expect(page.getByText('Incorrect User Name or Password')).toBeVisible();

    const screenshot = await page.screenshot();
    await test.info().attach('Invalid Username Screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });

    console.log('❌ Login Failed - Invalid Username');
  } catch (error) {
    throw error;
  }
});


// ⚠️ EMPTY FIELDS
test('Empty Fields', async ({ page }) => {
  await page.goto(BASE_URL);
  await page.getByRole('button', { name: 'Login' }).click();

  try {
    await expect(page.getByText('Please Enter Company Name')).toBeVisible();

    const screenshot = await page.screenshot();
    await test.info().attach('Empty Fields Screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });

    console.log('❌ Login Failed - Empty Fields');
  } catch (error) {
    throw error;
  }
});


// 🔄 LOGOUT TEST
test('Logout Test', async ({ page }) => {
  await login(page, {
    companyName: 'NAVEEN',
    userName: 'rsoft',
    password: 'RSoft!@345',
  });

  try {
    await page.waitForURL(/\/admin\/Dashboard/i);

    // Login success screenshot
    const loginShot = await page.screenshot();
    await test.info().attach('Login Success Before Logout', {
      body: loginShot,
      contentType: 'image/png',
    });

    console.log('✅ Successfully logged in');

    // Perform logout
    await logout(page);

    await expect(page).toHaveURL(/login/);

    // Logout success screenshot
    const logoutShot = await page.screenshot();
    await test.info().attach('Logout Success Screenshot', {
      body: logoutShot,
      contentType: 'image/png',
    });

    console.log('✅ Logout was successful');

  } catch (error) {
    const screenshot = await page.screenshot();
    await test.info().attach('Logout Failed Screenshot', {
      body: screenshot,
      contentType: 'image/png',
    });

    console.log('❌ Logout Failed');
    throw error;
  }
});