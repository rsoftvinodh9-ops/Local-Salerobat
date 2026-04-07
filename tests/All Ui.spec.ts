import {expect , test} from '@playwright/test';
import {login } from '../utils/login';




test('All Ui Test', async ({ page }) => {
  await login(page, 'VINODH', 'rsoft', 'Vinodh@5292');
}); 
