<!--
    #/**
    # * @author Nicolas Martin
    # * Email: nicolasmartin89@gmail.com
    # * GitHub Profile: https://github.com/nicolasmartin89
    # * LinkedIn: https://www.linkedin.com/in/nicolas-demis-martin
    #/***************************************************/
-->
---
# 💻 Test Automation Framework | WEB 

[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/) 
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://js.org/index.html) 
[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Mochawesome Reports](https://img.shields.io/badge/Mochawesome%20Reports-<COLOR>?style=for-the-badge&logo=mochawesome&logoColor=white)](https://www.npmjs.com/package/cypress-mochawesome-reporter)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions) 

## 📑 Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Continuous Integration](#continuous-integration)
- [Reporting](#reporting)
- [Contacts](#contacts)

## 📖 Introduction
This repository contains a Test Automation Framework built using Cypress and Javascript for automated testing of web applications.

## 🛠️ Prerequisites

- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) (v18.16.1 or higher recommended)
- [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) (v9.5.1 or higher recommended)

## ▶️ Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/nicolasmartin89/testAutomationFramework_JS_CY.git
   ```

2. Navigate to the project directory:

   ```bash
   cd testAutomationFramework_JS_CY
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## 🚀 Running Tests

- Open Cypress Test Runner:

  ```bash
  npm run cy:open
  ```
- Run tests in different browsers:

  - [![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.google.com/chrome/)
[![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefox&logoColor=white)](https://www.mozilla.org/firefox/)
[![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=microsoft-edge&logoColor=white)](https://www.microsoft.com/edge/)
[![Electron](https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white)](https://www.electronjs.org/)
  ```bash
  npm run cy:test:CHROME
  ```
  ```bash
  npm run cy:test:FIREFOX
  ```
  ```bash
  npm run cy:test:EDGE
  ```
  ```bash
  npm run cy:test:ELECTRON
  ```

- Run tests in mode Headless on Chrome:
  ```bash
  npm run cy:test:CHROME:HEADLESS
  ```

## 📁 Project Structure

The tests follow a modular and maintainable structure:

```
On Edit.
|-- .github
|     |-- workflows
|          |-- 01_UI_test_chrome.yml
|          |-- 02_UI_test_select_browser.yml
|          |-- 03_UI_test_all_browsers.yml
|-- cypress
|     |-- e2e
|          |-- Sauce_Demo
|               |-- login.cy.js
|     |-- fixtures
|          |-- login_credentials_saucedemo.json
|     |-- reports
|     |-- screenshots
|     |-- support
|          |-- pages
|               |-- BasePage.js
|               |-- CartPage.js
|               |-- Components
|                   |-- Footer.js
|                   |-- Header.js
|               |-- LoginPage.js
|               |-- ProductsPage.js
|          
|          |-- commands.js
|          |-- e2e.js
|-- .gitignore
|-- cypress.config.js
|-- package.json
```

- `cypress/e2e`: Contains the actual test files. You can organize your tests into subdirectories as needed. 
- `cypress/fixtures`: Contains external fixtures (e.g., login credentials data) that can be used to mock data during tests.
- `cypress/support`: Contains custom commands and global configuration.
- `cypress/support/pages`: Contains the Page Object Model (POM) classes representing web pages and their elements.
- `cypress/support/utils`: Contains the Utilities that provides methods for asserting different conditions on web elements, waits.
- `cypress/reports`: Contains the report for tests.

## ⚙️ Configuration

- Modify `cypress.config.json` for Cypress configuration settings.
- Customize `commands.js` and other files in `cypress/support` for reusable commands.

## 🔄 Continuous Integration


This project is configured for CI using Github Actions. Check the configuration in `.github/workflows/*.yml`
- `01_ui_tests_chrome.yml`
- `02_ui_tests_select_one.yml`
- `03_ui_tests_ALL.yml`

## 📊 Reporting

Mochawesome report (Screenshots and Videos are attached by default on test failure) is stored in the `cypress/reports` directory.


## 📧 Contacts

- [![Email](https://img.shields.io/badge/Email-nicolasmartin89%40gmail.com-gree)](mailto:nicolasmartin89@gmail.com)
- [![GitHub Profile](https://img.shields.io/badge/GitHub-Profile-blue)](https://github.com/nicolasmartin89)
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-lightgrey)](https://www.linkedin.com/in/nicolas-demis-martin)