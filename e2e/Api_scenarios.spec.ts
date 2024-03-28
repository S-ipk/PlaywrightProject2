import { test, expect } from "@playwright/test";
import { languagesInvalidQuery, languagesQuery } from '../testData/graphqlQueries'; 


test.describe("Graphql API tests", () => {
    
    test('Should retrieve details of all languages', async ({ request }) => {
       
        // Getting the ULR from env file , getting the query from testData file 
        const response = await request.post(
            process.env.GRAPHGL_URL as string,
            { data: { query:  languagesQuery } }
        );

       
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        const languages = responseBody.data.languages;

        // Verify that the response contains data
        expect(languages).not.toBeNull();
        expect(languages).not.toBeUndefined();

        languages.forEach(language => {
            
            expect(language).toHaveProperty('code');
            expect(language).toHaveProperty('name');
            expect(language).toHaveProperty('native');
            expect(language).toHaveProperty('rtl');
            expect(typeof language.code).toBe('string'); 
            expect(language.code.length).toBe(2); 
            expect(typeof language.name).toBe('string'); 
            expect(typeof language.native).toBe('string'); 
            expect(typeof language.rtl).toBe('boolean');
        });
    });


    test('Receiving error message with ivlaid query', async ({ request }) => {
       
        // Getting the ULR from env file , getting the query from testData file 
        const response = await request.post(
            process.env.GRAPHGL_URL as string,
            { data: { query:  languagesInvalidQuery } }
        );

       
        expect(response.status()).toBe(200);

       
        const jsonResponse = await response.json();
    
        expect(jsonResponse.errors[0].message).toContain('Cannot query field "Invalid"');
      
    });

});

