import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage';
import { ContactPage } from '../pageObjects/contactPage';

test.describe('UI Tests', () => {
    let loginPage: LoginPage;
    let contactPage: ContactPage;

    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate(); 
        await loginPage.loginToApplication('username', 'password');
        
    });

    test('User should be able to contact via contact page', async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.contactBtn.click();
        await contactPage.contactEmail.isVisible();
        await contactPage.contactEmail.fill('test@mail.com');
        await contactPage.contactName.isVisible();
        await contactPage.contactName.fill('TestName');
        await contactPage.contactMessage.isVisible();
        await contactPage.contactMessage.fill('TestMessage is here');
        await contactPage.sendMessageBtn.click();
        
        // JS alert 
        page.on('dialog', async dialog => {
            await dialog.accept(); 
        });

    });

    test('User should be able to close contact page without sending message', async ({ page }) => {
        contactPage = new ContactPage(page);
        await contactPage.contactBtn.click();
        await contactPage.newMessageText.isVisible();
        await contactPage.closeBtn.click();
        await contactPage.newMessageText.isHidden();
    });
});
