pipeline{
  agent any
  tools{
    nodejs 'Default'
  }
  stages{
    stage('Build'){
      steps{
        sh 'npm install --legacy-peer-deps'
        }
      }
  } 
}