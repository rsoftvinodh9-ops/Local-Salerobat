import '../utils/Screenshot';
import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { DashboardPage } from '../pages/DashboardPage';
import { LeadsPage } from '../pages/LeadsPage';
import { EmailModalPage } from '../pages/EmailModalPage';
import { EmailsPage } from '../pages/EmailsPage';
import { Logger } from '../utils/Logger';

test.describe('Send Email Test', () => {
  test.setTimeout(120000);

  test('Send email to lead and verify', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const leadsPage = new LeadsPage(page);
    const emailModalPage = new EmailModalPage(page);
    const emailsPage = new EmailsPage(page);

    try {
      Logger.step('Starting send email test');

      // Login using utility
      await login(page, {
        companyName: 'NAVEEN',
        userName: 'rsoft',
        password: 'RSoft!@345',
      });
      Logger.success('Logged in');

      // Navigate to Contact Mail Leads
      await dashboardPage.openVerticalMenu();
      await dashboardPage.navigateToModule('Leads');

      // Click quick reply on specific lead
      await leadsPage.clickQuickReplyOnLead('646531');

      // Handle email modal
      await emailModalPage.selectEmailType();
      await emailModalPage.openEmailFieldsDropdown();
      await emailModalPage.selectEmailField('Secondary Email ( rsoft Assigned To )');
      await emailModalPage.openEmailFieldsDropdown();
      await emailModalPage.selectEmailField('Secondary Email ( rsoft Created By )');
      await emailModalPage.openEmailFieldsDropdown();
      await emailModalPage.selectEmailField('Secondary Email ( rsoft Created By )');
      await emailModalPage.openEmailFieldsDropdown();
      await emailModalPage.selectEmailField('Secondary Email ( rsoft Created By )');

      // Select add field
      await emailModalPage.selectAdditionalField('Modified By ID');

      // Select template
      await emailModalPage.selectTemplate('sample template');

      // // Edit content
      // const emailContent = 'Hi,\n\n                                              Welcome to Rsoft team\n\nOne\tTwo\tThree\tFour\tFive\netfgjh\tvbmvbmnb fgj\thgjhjdj \tgjdgjdj\tdjdhjghkhhjhggkhk\ndghjhgkj\tfhkjkjlk\tfgjhkjljhljg yjhkjgh\tghfkjghkjh\t\n\nhkfhk ttii\n\nukjh\n\n\n\n\t\n\t\n\t\n\t\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n                 Thanks,\n\n                   aaaaaa. Test';
      // await emailModalPage.editEmailContent(emailContent);

      // Send email
      await emailModalPage.sendEmail();
      await Logger.screenshot(page, 'after-send-email');

      // Close modal
      await emailModalPage.closeModal();
      await Logger.screenshot(page, 'after-close-email-modal');

      // Navigate to Mail Emails
      await dashboardPage.openVerticalMenu();
      await dashboardPage.navigateToModule('Mail Emails');

      // View sent emails
      await emailsPage.clickViewAll();
      await emailsPage.openEmailBySubject('sample template');
      await Logger.screenshot(page, 'after-open-email');
      await emailsPage.clickMailBoxSection();
      await Logger.screenshot(page, 'after-mailbox-section');

      Logger.success('Send email test completed');
    } catch (error) {
      Logger.error(`Test failed: ${error}`);
      await Logger.screenshotOnFailure(page, 'send-email-test');
      throw error;
    }
  });
});