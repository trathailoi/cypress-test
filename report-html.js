const reporter = require("cucumber-html-reporter")
const fs = require('fs');
const path = require('path');

const cucumberJsonFolder = './cypress/reports/cucumber-json';

let jsonData = []
fs.readdirSync(cucumberJsonFolder).forEach(file => {
  if (path.extname(file) === '.json') {
    const featureData = require(`${cucumberJsonFolder}/${file}`)
    jsonData = [...jsonData, ...featureData]
  }
});

const reportDataPath = `${cucumberJsonFolder}/report-data.json`

fs.writeFile(reportDataPath, JSON.stringify(jsonData, 0, 2), function (err) {
  if (err) return console.log('error generate report data json', err)
  console.log(`File report data json exported! Path: ${reportDataPath}`)
  
  console.log(`Report is generating....`)
  const options = {
    theme: "bootstrap",
    jsonFile: reportDataPath,
    output: `cypress/reports/html/cucumber_report_${new Date().getTime()}.html`,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true
  }
  
  reporter.generate(options)
  console.log(`Report is generated!`)
})