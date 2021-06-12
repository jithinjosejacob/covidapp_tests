# covidapp_tests

###**Steps to setup locally**###

Prerequisities- Nodejs should be installed locally.
Confirm the same by running commands
a) node --version
b) npm --version

1) Clone the repo to your local machine
2) Navigate to the folder
3) Set brower mode and parallel instancesto run tests(not required for local run or headless for ci run) as environment variable(browser_mode=headless) and set browser_instances to 1 in local and 4 in ci or value which supports pipeline.
4) Set urls as environment variables(api_url='your api url' , app_url='your app url')
5) Setting environment variables might require a shell/system restart to take effect.
6) Run command to install packages- npm ci
7) Running API Tests - npm run api_test
8) Running UI Tests - npm run test

###**Reports for Tests**###

1) Once API tests finish running, a test-report.html gets generated in root folder.
2) UI Test Report ,run these commands[allure generate reports/allure-results/, allure open]

###**Tech Stack for API tests**###

* Test Runner- Jest
* Assertions - Chai
* HTTP Calls - SuperTest
* Test Reporter - Jest HTML Reporter

###**Tech Stack for UI tests**###

* Test Runner,Assertions - WebdriverIO
* Locators - css and xpath
* Test Cases - Cucumber BDD
* Reporting - Allure
