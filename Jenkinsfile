pipeline {
	agent any
  // environment {
  //   MSTEAMS_WEBHOOK = "https://9thwonder.webhook.office.com/webhookb2/daf5f66c-b00f-44ed-a3fd-87484b31aad9@3bd5f15a-bde3-4bdc-88ec-f43c1486de74/JenkinsCI/498df47cd87b411b9c55f53fe5dfa687/36d17080-d6aa-437a-b0bd-7b14254b84fb"
  // }
	options {
    disableConcurrentBuilds()
  }
  parameters {
    string(name: 'siteURL', defaultValue: 'https://bosley-develop.box.carbon8test.com', description: 'Please enter fully and exactly the site URL that you want to run e2e test.')
  }
	stages {
		stage('Install Dependencies') {
      steps{
        sh 'npm install'
      }
		}
		// stage('Clean Reports') {
    //   steps{
    //     sh 'npm run clean:reports'
    //   }
		// }
		stage('Run Tests') {
      parallel {
        stage('Chrome') {
            steps{
                sh "CYPRESS_baseUrl=$siteURL npm run cy:run" // -- --parallel --env coverage=true --config video=true
            }
        }
        // stage('Firefox') {
        //     steps{
        //         sh "CYPRESS_baseUrl=$siteURL npm run cy:firefoxl" // -- --paralle --env coverage=true --config video=true
        //     }
        // }
      }
		}
        // stage('Generate Reports') {
        //     steps {
        //         sh 'npm run combine-reports && npm run generate-report'
        //     }
        // }
		// stage('Publish HTML Report') {
        //     steps{
        //         publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: "E2E Report - $siteURL", reportTitles: "$siteURL"])
        //     }
		// }
	}
  post{
    always {
      sh 'node cucumber-report.js'
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: "E2E Report - $siteURL", reportTitles: "$siteURL"])
    }
    // success{
    //   office365ConnectorSend(webhookUrl: "${MSTEAMS_WEBHOOK}", color:'#008000',  message: "Site URL: $siteURL  \nAll the end-to-end test suites passed.  \nTake a look on the report here: ", status: 'SUCCESS')
    // }
    // failure{
    //   // publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: "E2E Report - $siteURL", reportTitles: "$siteURL"])
    //   office365ConnectorSend(webhookUrl: "${MSTEAMS_WEBHOOK}", color:'#FF0000',  message: "Site URL: $siteURL  \nEnd-to-end tests have been failed.  \nTake a look on the report here: ", status: 'FAILED')
    // }
  }
}