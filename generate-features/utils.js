const fs = require('fs')
const Path = require('path')
const { uniq } = require('lodash')

const generateFeatureFile = (name, outputFilePath, options = {}, isGenerateSteps) => {
  if (!(typeof outputFilePath === 'string')) {
    throw new Error('Output Path is required')
  }
  const outputDir = Path.dirname(outputFilePath)
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }
  const { description, backgroundName, backgroundSteps, generateScenariosFunction } = options
  let outputData = [
    `Feature: ${name}`,
    description ? `\t${description}` : '',
  ]
  if (backgroundSteps) {
    outputData = [
      ...outputData,
      `\n\tBackground:${backgroundName ? ' ' + backgroundName : ''}`,
      ...backgroundSteps.map(stepString => `\t\t${stepString}`),
      ''
    ]
  }
  let allSteps = []
  if (typeof generateScenariosFunction === 'function') {
    const allScenarioObject = generateScenariosFunction()
    const scenarios = Object.keys(allScenarioObject).reduce((resultArr, scenarioNameKey) => {
      const { required, type, description, dynamic, steps, examples, focus } = allScenarioObject[scenarioNameKey]
      const scenarioSteps = steps.map(stepString => {
        if (dynamic) {
          for (const dynamicKey in dynamic) {
            if (stepString.includes(dynamicKey)) {
              stepString = stepString.replace(dynamicKey, dynamic[dynamicKey])
            }
          }
        }
        return `\t\t${stepString}`
      })
      resultArr = [
        ...resultArr,
        ...(focus ? ['\t@focus'] : []),
        `\t${type}: ${scenarioNameKey}:${required ? ` Pass ${required} ->` : ''} ${description}`,
        ...scenarioSteps,
        `${examples ? `\t\tExamples:${examples}\n` : '\n'}`
      ]
      if (isGenerateSteps) {
        allSteps = [...allSteps, ...scenarioSteps]
      }
      return resultArr
    }, [])

    outputData = [...outputData, ...scenarios]
  }
  if (isGenerateSteps) {
    const stepFolderPath = outputFilePath.replace('.feature', '')
    if (!fs.existsSync(stepFolderPath)) {
      fs.mkdirSync(stepFolderPath, { recursive: true })
    }
    const stepFilePath = `${stepFolderPath}/steps.js`
    const allStepObj = allSteps.reduce((resultObj, stepString) => {
      const splitedArr = stepString.split(' ')
      let prefix = String(splitedArr[0]).trim()
      if (prefix === 'And') {
        prefix = 'Then'
      }
      splitedArr.splice(0, 1)
      let countArgs = 0
      const computedWords = []
      for (const word of splitedArr) {
        if (word[0] === '"' && word[word.length - 1] === '"') {
          countArgs++
          computedWords.push('{string}')
        } else {
          computedWords.push(word)
        }
      }
      const stepDesc = computedWords.join(' ')
      resultObj[prefix] = {
        ...(resultObj[prefix] || {}),
        [stepDesc]: countArgs
      }
      return resultObj
    }, {})
    const writeAllStepString = Object.keys(allStepObj).reduce((resultArr, prefix) => {
      const prefixSteps = allStepObj[prefix]
      return [
        ...resultArr,
        ...Object.keys(prefixSteps).map(stepDesc => {
          const countArgs = prefixSteps[stepDesc]
          const argArr = []
          if (countArgs) {
            for (let i = 1; i <= countArgs; i++) {
              argArr.push('arg' + i)
            }
          }
          const argsString = argArr.join(', ') || ''
          return `\n${prefix}(\`${stepDesc}\`, (${argsString}) => {\n})`
        })
      ]
    }, []).join('\n')
    
    fs.writeFile(stepFilePath, writeAllStepString, function (err) {
      if (err) return console.log('error generate steps', err)
      console.log(`File steps exported! Path: ${stepFilePath}`)
    })
  }
  let writeFileString = outputData.join('\n')
  writeFileString = writeFileString.replace('\n\n\n', '\n\n')
  fs.writeFile(outputFilePath, writeFileString, function (err) {
    if (err) return console.log('error generate feature file', err)
    console.log(`File exported! Path: ${outputFilePath}`)
  })
}

const generateScenario = (name, allScenarioObject, options) => {
  let {
    description = '',
    required,
    dynamic,
    steps = [],
    reuseExamples,
    examples,
    focus
  } = options
  const type = reuseExamples || examples ? 'Scenario Outline' : 'Scenario'
  if (required) {
    const firstRequired = required.split(' or ')[0]
    if (allScenarioObject && allScenarioObject[firstRequired]) {
      const requiredScenario = allScenarioObject[firstRequired]
      steps = [...(requiredScenario.steps || []), ...steps]
      if (reuseExamples) {
        examples = requiredScenario.examples
      }
    }
  }
  allScenarioObject[name] = {
    type,
    description,
    required,
    dynamic,
    steps,
    examples,
    focus
  }
}

module.exports = {
  generateScenario,
  generateFeatureFile
}

