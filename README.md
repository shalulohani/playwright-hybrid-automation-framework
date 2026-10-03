# Playwright Hybrid Automation Framework

![Playwright Tests](https://github.com/shalulohani/playwright-hybrid-automation-framework/actions/workflows/playwright.yml/badge.svg)

A robust, scalable, and hybrid automation framework built using **Playwright**, designed for modern UI + API testing needs.  
This framework follows best practices, clean architecture, reusable components, and integrates seamlessly with **Allure Reporting** and **GitHub Actions CI/CD**.

---

## 🚀 Features

- **Hybrid Automation Framework** (UI + API)
- **Playwright Test Runner**
- **Page Object Model (POM)**
- **Reusable Utilities & Custom Helpers**
- **Environment-based Configurations**
- **Allure Reporting Integration**
- **GitHub Actions CI/CD Pipeline**
- **Cross-browser Testing**
- **Parallel Execution**
- **Screenshots, Videos & Trace Artifacts**
- **Clean Folder Structure**

---

📁 Project Structure

playwright-hybrid-automation-framework/
│
├── tests/                     # Test suites (UI + API)
├── ui/                        # Page Objects & UI components
├── utils/                     # Helper utilities
├── fixtures/                  # Test data & fixtures
├── config/                    # Environment configs
├── playwright.config.ts       # Playwright global config
├── package.json               # Dependencies
├── .github/workflows/         # CI/CD workflows
│   └── playwright.yml         # GitHub Actions pipeline
└── README.md                  # Project documentation

Code

---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/shalulohani/playwright-hybrid-automation-framework.git
cd playwright-hybrid-automation-framework
2️⃣ Install dependencies
bash
npm install
3️⃣ Install Playwright browsers
bash
npx playwright install
🧪 Running Tests
Run all tests
bash
npx playwright test
Run tests in headed mode
bash
npx playwright test --headed
Run specific test file
bash
npx playwright test tests/example.spec.ts
Run with Allure reporter
bash
npx playwright test --reporter=line,allure-playwright
📊 Allure Report
Generate Allure report
bash
npx allure generate allure-results --clean -o allure-report
Open Allure report
bash
npx allure open allure-report
Coming Soon
Live Allure Report hosted via GitHub Pages.

🤖 CI/CD – GitHub Actions
This project includes a full CI pipeline:

Install dependencies

Run Playwright tests

Generate Allure report

Upload report as artifact

Workflow file:

Code
.github/workflows/playwright.yml

Author
Nakshatra Lohani  
QA Test Analyst | Automation Engineer | Playwright Specialist
Hyderabad, India

GitHub: https://github.com/shalulohani (github.com in Bing)

LinkedIn: Add your link here

Email: Add your email here (optional)

🤝 Contributing
Contributions are welcome!
Feel free to fork the repo, create a branch, and submit a pull request.

📜 License
This project is open-source and available under the MIT License.

Code
