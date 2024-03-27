import { expect, Locator, Page } from '@playwright/test';
import { ENVIRONMENT } from '../env';

export class LoginPage {
    
    readonly page: Page;
    readonly loginText: Locator;
    readonly usernameTextbox: Locator;
    readonly passwordTextbox: Locator;
    readonly loginButton: Locator;
    readonly invalidLoginMessage: Locator;
    readonly nameOfUser: Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.loginText = page.locator("#login2");
        this.usernameTextbox = page.locator("#loginusername");
        this.passwordTextbox = page.locator("#loginpassword");
        this.loginButton = page.locator('button:has-text("Log in")');
        this.nameOfUser = page.locator("#nameofuser");
        
    }

    async navigate() {
        await this.page.goto(ENVIRONMENT.DEMOBLAZE_URL);
    }

    async loginToApplication(username: string, password: string) {
        await this.loginText.click();
        await this.usernameTextbox.fill(ENVIRONMENT.USERNAME);
        await this.passwordTextbox.fill(ENVIRONMENT.PASSWORD);
        await this.loginButton.click();
        await expect(this.nameOfUser).toHaveText("Welcome " + ENVIRONMENT.USERNAME);
    }

   
}
