# Todo App Basic Operations Test Plan

## Application under test
- Todo app with a text input for creating tasks
- Task list with add, complete, edit, and delete actions
- Filter controls for All, Active, and Completed
- Clear Completed action for completed tasks

## Assumptions
- The app is loaded in a clean browser session.
- The page is accessible and ready for interaction.
- User can add, edit, complete, and remove todo items.

## Test scenarios

### 1. Add a new todo item
1. Open the Todo app.
2. Locate the input field labeled "What needs to be done?".
3. Enter "Buy milk".
4. Press Enter.

Expected:
- The new item appears in the list.
- The input is cleared for the next entry.
- The item count reflects the new task.

### 2. Add multiple todo items
1. Open the Todo app.
2. Add "Buy milk".
3. Add "Pay electricity bill".
4. Add "Plan weekend trip".

Expected:
- All three tasks appear in the list in the order entered.
- The item count increases to 3.
- Each task is visible in the active list.

### 3. Mark a todo as completed
1. Add at least one todo item.
2. Click the checkbox next to the task.

Expected:
- The item is marked completed.
- The task appears with a completed style.
- The active item count decreases by 1.

### 4. Unmark a completed todo
1. Add a task.
2. Mark it as completed.
3. Click the same checkbox again.

Expected:
- The item is returned to active state.
- The completed styling is removed.
- The count updates back to active state.

### 5. Edit an existing todo item
1. Add a task such as "Read book".
2. Double-click the item text or use the edit action.
3. Change the text to "Read Python book".
4. Press Enter or blur the input.

Expected:
- The task text updates to the new value.
- The new label is visible in the list.
- The item remains in the same completed/active state.

### 6. Delete a todo item
1. Add a task.
2. Hover or focus the item.
3. Click the delete button associated with that task.

Expected:
- The task is removed from the list.
- The item count decreases.
- No other todo items are affected.

### 7. Filter by All, Active, and Completed
1. Add multiple tasks.
2. Complete one task.
3. Use the filter buttons: All, Active, Completed.

Expected:
- All shows every task.
- Active shows only incomplete tasks.
- Completed shows only completed tasks.
- The selected filter is visually highlighted.

### 8. Clear completed tasks
1. Add multiple tasks.
2. Mark at least one as completed.
3. Click "Clear completed".

Expected:
- Only completed tasks are removed.
- Active tasks remain in the list.
- The item count updates to the remaining active tasks.

### 9. Empty state and validation
1. Open the app.
2. Attempt to add an empty todo item or whitespace-only text.

Expected:
- A blank task is not added.
- The list remains unchanged.
- The input remains available for valid entries.

## Additional notes
- Use stable selectors such as role-based locators when available.
- Validate visible text and counts after each action.
- Prefer assertions on real UI behavior instead of internal state.
- Include at least one negative flow for empty submissions and invalid actions.
