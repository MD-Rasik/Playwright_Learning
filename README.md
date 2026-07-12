# Playwright Automation Framework

A robust, scalable, and maintainable end-to-end automation testing framework built using **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern. This framework also supports **Data-Driven Testing** utilizing external Excel data sheets.

## 🚀 Features

- **Page Object Model (POM):** Enhances code reusability and maintainability by separating page behaviors from actual test scripts.
- **Custom Fixtures (`baseTest.ts`):** Simplifies test setup and teardown by automatically initializing page objects.
- **Data-Driven Testing:** Seamlessly integrates with Excel (`testData.xlsx`) to execute tests with multiple datasets.
- **Reusable Utilities:** Shared helper functions in the `utils` directory for cleaner and more maintainable test logic.
- **HTML Reports & Artifacts:** Built-in Playwright reporting with screenshots and videos captured on test failures.

---

## 📁 Repository Structure

```text
├── data/                  # Dynamic test data configurations
├── pages/                 # Page Object classes defining UI elements and actions
├── tests/                 # End-to-End test specifications
├── utils/                 # Utility functions (Excel readers, custom helpers)
├── .gitignore             # Git ignore file
├── baseTest.ts            # Custom Playwright fixture setup
├── package.json           # Project dependencies
├── playwright.config.ts   # Global Playwright configuration
└── testData.xlsx          # Data-driven testing Excel sheet
```

---

## 🛠️ Prerequisites

Before setting up the project locally, ensure you have the following installed:

- Node.js (v18 or higher recommended)
- npm (comes pre-bundled with Node.js)

---

## 📥 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MD-Rasik/Playwright_Learning.git
cd Playwright_Learning
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

---

## 🏃 Running Tests

### Run all tests in headless mode

```bash
npx playwright test
```

### Run tests in UI mode (Interactive)

```bash
npx playwright test --ui
```

### Run tests on Chromium

```bash
npx playwright test --project=chromium
```

### Run a specific test file

```bash
npx playwright test tests/example.spec.ts
```

---

## 📊 Test Reports

After the test execution completes, an HTML report is automatically generated.

To open the report, run:

```bash
npx playwright show-report
```
