// in jest.config.js
module.exports = {
    testTimeout: 20000,
    "reporters": [
      "default",
      ["./node_modules/jest-html-reporter", {
        "pageTitle": "API Test Report"
      }]
    ]
  }