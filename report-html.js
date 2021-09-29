const reporter = require("cucumber-html-reporter")

const options = {
  theme: "bootstrap",
  jsonFile: "cypress/reports/cucumber-json/1.feature.json",
  output: "cypress/reports/cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true
}

reporter.generate(options)
