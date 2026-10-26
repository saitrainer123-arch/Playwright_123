import { test, expect } from '@playwright/test';

// We use request fixture for API testing
test('GET user data', async ({ request }) => {

  // we are using get()method to get the data
 const username = await request.get("https://jsonplaceholder.typicode.com/posts/10")

  console.log("Status is :- "+ username.status())

     //Converting to json()
   const ud_= await username.json()

   console.log("Complete data ",ud_)


})





// Test case: Verify GET API returns correct user data
// test('GET user data', async ({ request }) => {

//   const ud = await request.get("https://jsonplaceholder.typicode.com/posts/12")

//   //Status =200
//   console.log("Status :- "+ ud.status())

//   //Converting to json()
//    const userdata=  await ud.json()

//    console.log("Full Data",userdata)


// })









//await request.get("https://jsonplaceholder.typicode.com/posts/5")



  //We are verifing the status
 // console.log('We are getting Status:-  ', res.status())
   
  // //Covert data to read---json()
  // const body = await res.json()

  // // To print data
  // console.log("Respons ", body)

  // //Expecting 200
  // expect(res.status()).toBe(200);

  //Expecting 
 // expect(body.id).toBe(5);

//})







  // // Send GET request to server (asking for post with IDs)
  // const response = await request.get('https://jsonplaceholder.typicode.com/posts/5');

  // // Print HTTP status code (expected: 200 = success)
  // console.log('Status Code :-', response.status());


  // //Convert API response into JSON (so we can read data)
  // const body = await response.json();

  // //  Print full response body (for understanding structure)
  //console.log('Response Body:', body);

  // // Validate: API should return success status
  //expect(response.status()).toBe(200);

  // // // Validate: Response should contain correct data (id = 2)
  //expect(body.id).toBe(5);

//});