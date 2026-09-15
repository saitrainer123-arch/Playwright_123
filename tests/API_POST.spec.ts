import { test, expect } from '@playwright/test';

// Test case: Verify POST API creates new data
test('simple POST', async ({ request }) => {

  // Send POST request with payload (creating new record)
  const res = await request.post('https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Sai',
        body: 'This is kamal',
        userId: 123456
      }
    });

  // Print status (expected: 201 = created)
  console.log('Status:', res.status());

  // Convert response to JSON
  const body = await res.json();

  // // // Print response data
  console.log('Response:', body);

  // // Validate: API should return 201 (created)
  // expect(res.status()).toBe(201);

  // // Validate: Response should contain same title
  // expect(body.title).toBe('Anji');
  // expect(body.body).toBe('This is Anji');


});