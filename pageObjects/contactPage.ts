import { expect, Locator, Page } from '@playwright/test';



export class ContactPage {
    
    readonly page: Page;
    readonly contactBtn: Locator;
    readonly contactEmail: Locator;
    readonly contactName: Locator;
    readonly contactMessage: Locator;
    readonly sendMessageBtn: Locator;
    readonly newMessageText: Locator;
    readonly closeBtn: Locator;
   

    constructor(page: Page) {
        this.page = page;
        this.contactBtn = page.getByRole('link', { name: 'Contact' });
        this.contactEmail = page.locator('#recipient-email');
        this.contactName = page.getByLabel('Contact Email:');
        this.contactMessage = page.getByLabel('Message:');
        this.sendMessageBtn = page.getByRole('button', { name: 'Send message' });
        this.newMessageText = page.getByText('New message ×');
        this.closeBtn= page.getByLabel('New message').getByText('Close');
        
        
    }


   
}
