const testFolder = './cypress/integration/website/';
const fs = require('fs');
const path = require('path')

fs.readdir(testFolder, (err, folders) => {
  for (const folder of folders) {
    const folderPath = `${testFolder}${folder}/`
    fs.readdir(folderPath, (error, files) => {
      for (const file of files) {
        const parsed = path.parse(file)
        if (parsed.ext === '.feature') {
          const fileFolderPath = folderPath + parsed.name + '/' + 'steps.js'
          if (!fs.existsSync(fileFolderPath)) {
            fs.writeFileSync(fileFolderPath, '')
            // fs.mkdirSync(fileFolderPath)
            // console.log('created')
          }
        }
      }
    })
  }
});
