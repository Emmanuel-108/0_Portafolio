pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/Emmanuel-108/0_Portafolio', branch: 'master')
      }
    }

    stage('List Directory Contents') {
      parallel {
        stage('List Directory Contents') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-End Unit Tests') {
          steps {
            sh 'cd portafolio-testing && npm i && npm run test:unit'
          }
        }

      }
    }

  }
}