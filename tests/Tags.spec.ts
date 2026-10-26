import { test } from '@playwright/test';

// --------------------------------------
// @fast → Tag used for quick-running tests
// This test just prints a message
// --------------------------------------
test('@fast Test 1', async () => {
  console.log('Sai');
});

// --------------------------------------
// Another @fast test
// Multiple tests can have the same tag
// --------------------------------------
test('@slow Test 2', async () => {
  console.log('Nagaraj');
});

// --------------------------------------
// Multiple tags on a single test
// @slow → Long-running test
// @vrt  → Visual Regression Test (example tag)
// --------------------------------------
test('@slow @vrt Test 3', async () => {
  console.log('Praveen');
});