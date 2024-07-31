// ***********************************************************
// For example import the mockReports
// ***********************************************************
// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-mochawesome-reporter/register';
import 'cypress-xpath';

//Import cypress-grep plugin to enable test case filtering based on grep patterns.
import registerCypressGrep from '@cypress/grep/src/support'
registerCypressGrep()

