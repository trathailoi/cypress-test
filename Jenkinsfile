pipeline {
  agent any
  environment {
    AWS_CYPRESS_DEMO_IP = credentials('AWS_CYPRESS_DEMO_IP')
    CYPRESS_PATH = '/srv/sites/bosley-wp-08-2021'
    CURRENT_WORKSPACE = "${env.WORKSPACE}"
  }
  // environment {
  //   MSTEAMS_WEBHOOK = "https://9thwonder.webhook.office.com/webhookb2/daf5f66c-b00f-44ed-a3fd-87484b31aad9@3bd5f15a-bde3-4bdc-88ec-f43c1486de74/JenkinsCI/498df47cd87b411b9c55f53fe5dfa687/36d17080-d6aa-437a-b0bd-7b14254b84fb"
  // }
	options {
    disableConcurrentBuilds()
  }
  parameters {
    string(name: 'siteURL', defaultValue: 'https://bosley-develop.box.carbon8test.com', description: 'Please enter fully and exactly the site URL that you want to run e2e test.')
    booleanParam(name: 'video', description: 'with recording video ? Note: It would take way so longer.', defaultValue: false)
    string(name: 'cliOpt', description: 'Additional CLI options of cypress run. E.g. --spec "**/1.default-scheduler.feature"')
    booleanParam(name: 'confirmation', description: 'my lord, please do it!', defaultValue: false)
    booleanParam(name: 'installPackages', description: 'Install NPM packages first ?', defaultValue: false)
  }
	stages {
    stage('Setup') {
      when {
        expression { params.confirmation == true }
      }
      steps {
        sshagent(credentials: ['AWS_CYPRESS_DEMO']) {
          sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" --exclude "cypress/videos" --exclude "cypress/screenshots" --exclude "cypress/reports" "${CURRENT_WORKSPACE}/cypress" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH/cypress'
          sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" "${CURRENT_WORKSPACE}/cypress.json" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH'
          sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" "${CURRENT_WORKSPACE}/package.json" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH'
          sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" "${CURRENT_WORKSPACE}/package-lock.json" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH'
          sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" "${CURRENT_WORKSPACE}/report-html.js" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH'
          sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" "${CURRENT_WORKSPACE}/test.js" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH'
          // sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" --exclude "$CURRENT_WORKSPACE/node_modules" "$CURRENT_WORKSPACE" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH'
          // sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" --delete "$CURRENT_WORKSPACE/wp-content/plugins" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH/wp-content'  
          // sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" "$CURRENT_WORKSPACE/wp-content/uploads" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH/wp-content'
        }
      }
    }
		stage('Install Dependencies') {
      when {
        allOf {
          expression { params.installPackages == true }
          expression { params.confirmation == true }
        }
      }
      steps{
        sshagent(credentials: ['AWS_CYPRESS_DEMO']) {
          sh 'ssh -o StrictHostKeyChecking=no -l ubuntu $AWS_CYPRESS_DEMO_IP \"' + "cd $CYPRESS_PATH && npm install && npx cypress install" + '\"'
        }
      }
		}
		// stage('Clean Reports') {
    //   steps{
    //     sh 'npm run clean:reports'
    //   }
		// }
    stage('Chrome') {
      when {
        expression { params.confirmation == true }
      }
      steps{
        script {
          cmdString="CYPRESS_baseUrl=${siteURL} npm run cypress:run"
          additionalOptions=""
          if (params.video == true) {
            additionalOptions="$additionalOptions --config video=true"
          } else {
            additionalOptions="$additionalOptions --config video=false"
          }

          if (params.cliOpt) {
            additionalOptions="$additionalOptions ${params.cliOpt}"
          }
          if (additionalOptions) {
            cmdString="$cmdString -- $additionalOptions"
          }
          echo "$cmdString"
          // sh -C \"$cmdString\" // -- --parallel --env coverage=true --config video=true
        }
        echo "$cmdString"
        // sh "$cmdString"

        sshagent(credentials: ['AWS_CYPRESS_DEMO']) {
          sh 'ssh -o StrictHostKeyChecking=no -l ubuntu $AWS_CYPRESS_DEMO_IP \"' + "cd $CYPRESS_PATH && $cmdString" + '\"'
        }
      }
    }

    // stage('Take the result report') {
    //   when {
    //     expression { params.confirmation == true }
    //   }
    //   steps {
    //     sshagent(credentials: ['AWS_CYPRESS_DEMO']) {
    //       sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH/cypress/videos "${CURRENT_WORKSPACE}/cypress"'
    //       sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH/cypress/screenshots "${CURRENT_WORKSPACE}/cypress"'
    //       sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH/cypress/reports "${CURRENT_WORKSPACE}/cypress"'
    //     }
    //   }
    // }

    // stage('Generate & Publish HTML Reports') {
    //   when {
    //     expression { params.confirmation == true }
    //   }
    //   steps {
    //     sh 'node cucumber-report.js'
    //     publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: "E2E Report - ${siteURL}", reportTitles: "${siteURL}"])
    //   }
    // }
	}
  post{
    always {
      sshagent(credentials: ['AWS_CYPRESS_DEMO']) {
        sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH/cypress/reports "${CURRENT_WORKSPACE}/cypress"'
        sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH/cypress/videos "${CURRENT_WORKSPACE}/cypress"'
        sh 'rsync -avhze "ssh -o StrictHostKeyChecking=no" ubuntu@$AWS_CYPRESS_DEMO_IP:$CYPRESS_PATH/cypress/screenshots "${CURRENT_WORKSPACE}/cypress"'
      }
      // sh 'node cucumber-report.js'
      sh 'node report-html.js'
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: "E2E Report - ${siteURL}", reportTitles: "${siteURL}"])
    }
    // success{
    //   office365ConnectorSend(webhookUrl: "${MSTEAMS_WEBHOOK}", color:'#008000',  message: "Site URL: ${siteURL}  \nAll the end-to-end test suites passed.  \nTake a look on the report here: ", status: 'SUCCESS')
    // }
    // failure{
    //   // publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/html', reportFiles: 'index.html', reportName: "E2E Report - ${siteURL}", reportTitles: "${siteURL}"])
    //   office365ConnectorSend(webhookUrl: "${MSTEAMS_WEBHOOK}", color:'#FF0000',  message: "Site URL: ${siteURL}  \nEnd-to-end tests have been failed.  \nTake a look on the report here: ", status: 'FAILED')
    // }
  }
}