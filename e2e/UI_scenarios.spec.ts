import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage';
import { HomePage } from '../pageObjects/homePage';

test.describe('UI Tests', () => {
    let loginPage: LoginPage;
    let homePage: HomePage;

    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate(); 
        await loginPage.loginToApplication('username', 'password');
        //How about cookies? Check this later 
    });

    test('User should be able to add a prodoct to cart', async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.samsungGalaxyS6Text.click();
        await homePage.samsungGalaxyS6Heading.isVisible();
        await homePage.samsungGalaxyS6Price.isVisible();
        await homePage.productDescriptionText.isVisible();
        await homePage.productDescription.isVisible();
        await homePage.addToCartButton.click();

        // JS alert 
        page.on('dialog', async dialog => {
            await dialog.accept(); 
        });

        await homePage.cartPage.click();
        
        //I need to handle here dynamically! 
        await homePage.verifyRowContent(page, 'tbody#tbodyid tr', ['Samsung galaxy s6', '360']);






    });
});
