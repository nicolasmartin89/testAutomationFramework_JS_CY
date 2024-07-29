// ***********************************************************
// For example config video record and others
// ***********************************************************

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  env: {
    application_URL: 'https://www.saucedemo.com/v1/'
  },

  reporterOptions: {
    charts: true,
    reportPageTitle: 'Sauce Demo UI Test',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
