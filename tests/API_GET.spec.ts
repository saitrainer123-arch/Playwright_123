import { test, expect } from '@playwright/test';

// Test case: Verify GET API returns correct user data
test('GET user data', async ({ request }) => {

  // Send GET request to server (asking for post with ID = 1)
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/12');

  // Print HTTP status code (expected: 200 = success)
  console.log('Status Code:', response.status());

  // // Convert API response into JSON (so we can read data)
  const body = await response.json();

  // // // Print full response body (for understanding structure)
  console.log('Response Body:', body);

  // // Validate: API should return success status
  // expect(response.status()).toBe(200);

  // // // Validate: Response should contain correct data (id = 1)
  //  expect(body.id).toBe(2);

});