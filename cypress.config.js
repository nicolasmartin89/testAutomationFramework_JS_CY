// ***********************************************************
// For example config video record and others
// ***********************************************************

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  env: {
    application_URL: 'https://www.saucedemo.com/'
  },

  //Set number of retries for falied test.
  retries:1,
  
  //Set default viewport dimensions
  viewportHeight: 640,
  viewportWidth: 980,

  //Set video Options
  video: true,
  videoCompression: true,

  // Configure the Mochawesome reporter for generating test reports
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports/sauce-demo-ui-tests-report',
    charts: true,
    reportPageTitle: 'Sauce Demo UI Tests',
    embeddedScreenshots: true,
    inlineAssets: true,    
    overwrite: true,
    autoOpen: false,
    code: true,
    timestamp: 'longDate',
    showPassed: true,
    saveAllAttempts: false,
  },

  chromeWebSecurity:false,
  
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  }
});
