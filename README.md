# e2e_playwright_todolisttask
e2e_playwright_todolisttask
---------------------------------------------------------
This project contains automated UI tests of todomvc demo applications.

-------------------------------------------------------------

🚀 Getting Started
-----------------------------------------------------------
📦 Prerequisites

- Vs code 
  
- Node.js

  🔧 Install Playwright and Browsers
     Install Playwright for your project. Here are the steps using npm:

      1. First, open your terminal in VS Code and run:
  
            npm init playwright@latest
  
      This will prompt you with several options. Here are the recommended selections:
      2. Choose between TypeScript/JavaScript (Select TypeScript for better type safety)
      3. Name of your Tests directory (e.g., tests or e2e)
         Add GitHub Actions workflow (Yes/No)
         Install Playwright browsers (Yes)
         After installation, Playwright will create:
         playwright.config.ts (or .js)
         tests directory with example test
         package.json with the required dependencies
         .gitignore with appropriate settings
      4. To verify the installation, you can run:
  
            npx playwright test

      This will run the example test that was created during installation.

      To install Playwright browsers separately (if needed):
  
            npx playwright install

      Your project is now set up with Playwright! The installation creates a basic structure that you can build upon for your E2E tests :)

  ▶️ Running the Tests
  
        npx playwright test

  📊 Reports
  
  After the test execution you can open the reports in HTML or in allure-playwright

        - HTML Test Reports
        npx playwright show-report

        - Allure report
          - Installation
            npm install -D allure-playwright

          - Usage:
            Add allure-playwright as the reporter in the Playwright configuration file:

            import { defineConfig } from '@playwright/test';

            export default defineConfig({
            reporter: "allure-playwright",
            });

          - Run test script with below command:
            npx playwright test --reporter=line,allure-playwright

          - Generate Allure Report after the tests are executed:
            allure generate ./allure-results -o ./allure-report

          - Open the generated report:
            allure open ./allure-report
  
