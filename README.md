# Playwright Automation Framework

A robust, scalable, and maintainable end-to-end automation testing framework built using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern. This framework also supports **Data-Driven Testing** utilizing external Excel data sheets.

## 🚀 Features

- **Page Object Model (POM):** Enhances code reusability and maintainability by separating page behaviors from actual test scripts.
- **Custom Fixtures (`baseTest.ts`):** Simplifies test setup and teardown by automatically initializing page objects.
- **Data-Driven Testing:** Seamlessly integrates with Excel (`testData.xlsx`) to run parallel tests with diverse data sets.
- **Robust Utilities:** Shared helper functions localized in the `utils` directory for cleaner test logic.
- **HTML Reporting & Artifacts:** Built-in Playwright reporting, screenshots, and video capture on failure.

---

## 📁 Repository Structure

```text
├── data/                  # Dynamic test data configurations
├── pages/                 # Page Object classes defining UI elements and actions
├── tests/                 # End-to-End test specs
├── utils/                 # Utility functions (Excel readers, custom helpers, logging)
├── .gitignore             # Git ignore file for node_modules and reports
├── baseTest.ts            # Custom Playwright fixture setup
├── package.json           # Project dependencies and script shortcuts
├── playwright.config.ts   # Global Playwright configuration
└── testData.xlsx          # Data-driven testing excel sheet

🛠️ **Prerequisites**

Before setting up the project locally, ensure you have the following installed:
Node.js (v18 or higher recommended)
npm (comes pre-bundled with Node)

📥 **Getting Started**
**1. Clone the Repository**
git clone [https://github.com/MD-Rasik/Playwright_Learning.git](https://github.com/MD-Rasik/Playwright_Learning.git)
cd Playwright_Learning

**2. Install Dependencies**
npm install

**3. Install Playwright Browsers**
npx playwright install

🏃 **Running Tests**
You can run your automation suite using the following commands:

**Run all tests in headless mode:**
npx playwright test

**Run tests in UI mode (Interactive):**
npx playwright test --ui

**Run tests on a specific browser (e.g., Chromium):**
npx playwright test --project=chromium

**Run a specific test file:**
npx playwright test tests/example.spec.ts

📊 **Test Reports**
After the execution finishes, an HTML report is automatically generated. To view the report, run:
npx playwright show-report
