import { expect, Locator, Page } from '@playwright/test';


export class HomePage {

    readonly page: Page;
    readonly samsungGalaxyS6Text: Locator;
    readonly samsungGalaxyS6Heading: Locator;
    readonly samsungGalaxyS6Price: Locator;
    readonly productDescriptionText: Locator;
    readonly productDescription: Locator;
    readonly addToCartButton: Locator;
    readonly cartPage: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.samsungGalaxyS6Text = page.getByRole('link', { name: 'Samsung galaxy s6' });
        this.samsungGalaxyS6Heading = page.getByRole('heading', { name: 'Samsung galaxy s6' });
        this.samsungGalaxyS6Price = page.getByRole('heading', { name: '$360 *includes tax' });
        this.productDescriptionText = page.getByText('Product description');
        this.productDescription = page.getByText(`The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420
           processor and it comes with 3GB of RAM. The phone packs 32GB of internal storage cannot be expanded.`);
        this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
        this.cartPage = page.getByRole('link', { name: 'Cart', exact: true });


    }

    async verifyRowContent(page: Page, rowSelector: string, expectedContent: string[]) {
        
        const rowElement = await page.$(rowSelector);

        
        if (!rowElement) {
            console.error(`Row element with selector '${rowSelector}' not found`);
            return;
        }

        const rowText = await rowElement.textContent();

        for (const content of expectedContent) {
            expect(rowText).toContain(content);
        }
    }





}
