import { expect, test } from '@playwright/test';
import { login } from '../utils/login';

const testData: string[] = ['VINODH', 'Pradeep', 'User@1234'];
/*for (const userName of testData) 
{
 test.describe('Data-driven login tests', () => {
    test(`login with ${userName}`, async ({ page }) => {
      await login(page, userName, 'rsoft', 'Vinodh@5292');
      await expect(page).toHaveURL(/admin/);
      // add additional assertions here as needed
    });
  }
});
*/

