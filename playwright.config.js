// @ts-check
import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  reporter: [
    ['html'],
    ['list']
  ],
  testDir: './tests',
  
  workers: 2, 
  // Run with 2 parallel workers, 
  //define the number of parallel processes that run your tests.

  /* Configure projects for major browsers */
  projects : [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,
        //browserName : 'chromium',
        headless : false,
        screenshot : 'on',
        trace : 'on',//off,on
      },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] ,
        //browserName : 'webkit',
        headless : false,
        screenshot : 'on',
        trace : 'on',//off,on
      },
    },
  ]
});