const { test, expect } = require('@playwright/test');
const { ToDoPage } = require('../pageObjects/ToDoPage');

test.describe('ToDo App Tests', () => {
    let todopage;

    test.beforeEach(async ({ page }) => {
        await page.goto('https://demo.playwright.dev/todomvc/#/');
        todopage = new ToDoPage(page);
    });

    test('Add a New TODO Item and Verify if it is added into list', async ({ page }) => {
        await todopage.addItemToList('Buy Veggies');
        //Verify the item is added
        await expect(page.getByText('Buy Veggies')).toBeVisible();
    });

    test('Mark Item as Completed', async ({ page }) => {
        await todopage.addItemToList('Write First Test');
        await todopage.markItemAsCompleted();   
        //Verify the item is marked as completed
        await expect(todopage.selectItem.first()).toBeChecked();
    });

    test('Delete TODO Item', async ({ page }) => {
        await todopage.addItemToList('Item to delete');
        await todopage.deleteTodoItem(0);
        //Verify the item is deleted    
        await expect(todopage.selectItem.first()).not.toBeVisible();
    });

    test('Filter the TODO Items', async ({ page }) => {   
        await todopage.addItemToList('ToDO Task1');
        await todopage.addItemToList('ToDo Task2');
        await todopage.markItemAsCompleted(); // Mark Task 1 as completed

        // Filter to show all items
        await todopage.FilterItems('All');
        await expect(todopage.selectItem).toHaveCount(2);

        // Filter to show active items
        await todopage.FilterItems('Active');
        await expect(todopage.selectItem).toHaveCount(1); // Only Task 2 should be visible

        // Filter to show completed items
        await todopage.FilterItems('Completed');
        await expect(todopage.selectItem).toHaveCount(1); // Only Task 1 should be visible
    });
});

