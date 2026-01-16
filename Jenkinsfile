pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/Emmanuel-108/0_Portafolio', branch: 'master')
      }
    }

    stage('List Directory Contents') {
      steps {
        sh 'ls -la'
      }
    }

  }
}