import { test, expect } from '@playwright/test';

test('File Upload Example', async ({ page }) => {
  await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

  //Dont copy and paste the file path covert into \---to----/
  // File upload – add your laptop file path here using "setInputFiles ---function"
  // This is for single file upload
  //  await page.locator('#filesToUpload').setInputFiles("C:Users/konda/OneDrive/Pictures/Screenshots/Facebook_Login_Image.png")
  // Optional wait to visually see the upload

  // this is the assertion to verify text(only last name of the path) & note:- Css selector text verify--#id li(texttag)
  //  expect(await page.locator("#fileList li")).toHaveText("Facebook_Login_Image.png")

  // //This is for multiple file uploads
   await page.locator('#filesToUpload').setInputFiles(["C:/Users/konda/OneDrive/Pictures/Screenshots/Facebook_Login_Image.png", "C:/Users/konda/OneDrive/Pictures/Screenshots/HHj.png"])
  //note:- first(),nth(1)...to verify in row
  //expect(await page.locator("#fileList li").nth(0)).toHaveText("Facebook_Login_Image.png")
  await page.waitForTimeout(2000);


})
