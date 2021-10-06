const reporter = require("cucumber-html-reporter")
const fs = require('fs');
const path = require('path');

const cucumberJsonFolder = './cypress/reports/cucumber-json';

let jsonData = []
const reportJsonFileName = 'report-data.json'
fs.readdirSync(cucumberJsonFolder).forEach(file => {
  if (path.extname(file) === '.json' && file !== reportJsonFileName) {
    const featureData = require(`${cucumberJsonFolder}/${file}`)
    jsonData = [...jsonData, ...featureData]
  }
});

const reportDataPath = `${cucumberJsonFolder}/${reportJsonFileName}`

fs.writeFile(reportDataPath, JSON.stringify(jsonData, 0, 2), function (err) {
  if (err) return console.log('error generate report data json', err)
  console.log(`File report data json exported! Path: ${reportDataPath}`)
  
  console.log(`Report is generating....`)
  const today = (new Date()).toISOString().split('T')[0]
  const todayHtmlFolder = `cypress/reports/html/${today}`
  if (!fs.existsSync(todayHtmlFolder)) {
    fs.mkdirSync(todayHtmlFolder, { recursive: true })
  }
  const options = {
    theme: "bootstrap",
    jsonFile: reportDataPath,
    output: `${todayHtmlFolder}/cucumber_report_${new Date().getTime()}.html`,
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true
  }
  
  reporter.generate(options)
  console.log(`Report is generated!`)
})