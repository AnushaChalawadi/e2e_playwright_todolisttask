class ToDoPage {
    constructor(page){
        this.page = page;
        this.addItem = page.getByPlaceholder('What needs to be done?');
        this.selectItem = page.locator('.toggle');
        this.delete = page.locator('.destroy');
        this.selectToCompleted = page.locator("text=Completed");
        this.displayAllItems = page.getByRole('link', { name: 'All' });
        this.displayActiveItems = page.getByRole('link', { name: 'Active' });
        this.displayCompletedItems = page.getByRole('link', { name: 'Completed'});
        this.todoItems = page.locator('.todo-list li');
    
    }

    async addItemToList(item)
    {
        await this.addItem.fill(item);
        await this.addItem.press('Enter');
    }

    async markItemAsCompleted()
    {
        //click on first item in the list
        await this.selectItem.first().click();
    }

    async deleteTodoItem(index=0)
    { 
        //click on delete icon of the first item in the list
        await this.todoItems.nth(index).hover();
        await this.delete.nth(index).click();
    }

    async FilterItems(filterType)
    {
                // wait for the page to load

        await this.page.waitForTimeout(1000); 
        if(filterType === 'All')
        {
            await this.displayAllItems.click();
        }
        else if(filterType === 'Active')
        {
            await this.displayActiveItems.click();
        }
        else if(filterType === 'Completed')
        {
            await this.displayCompletedItems.click();
        }
        else
        {
            throw new Error('Entered Invalid filter type');
        }
    }

}
module.exports = {ToDoPage}