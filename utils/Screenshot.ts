import { test } from '@playwright/test';

test.afterEach(async ({ page }, testInfo) => {
  const fileName = `${testInfo.title.replace(/\s+/g, '_')}_${testInfo.status}.png`;

  try {
    const screenshot = await page.screenshot();
    await testInfo.attach(fileName, {
      body: screenshot,
      contentType: 'image/png',
    });
  } catch (error) {
    console.log(`Could not take screenshot: ${error.message}`);
  }

  console.log(
    testInfo.status === 'passed'
      ? `✅ ${testInfo.title} - Passed`
      : `❌ ${testInfo.title} - Failed`
  );
});