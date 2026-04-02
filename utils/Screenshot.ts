import { test } from '@playwright/test';

test.afterEach(async ({ page }, testInfo) => {
  const fileName = `${testInfo.title.replace(/\s+/g, '_')}_${testInfo.status}.png`;

  const screenshot = await page.screenshot();

  await testInfo.attach(fileName, {
    body: screenshot,
    contentType: 'image/png',
  });

  console.log(
    testInfo.status === 'passed'
      ? `✅ ${testInfo.title} - Passed`
      : `❌ ${testInfo.title} - Failed`
  );
});