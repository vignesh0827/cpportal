pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies first
                    sh 'npm install'
                }
            }
        }
        stage('Run Node.js Script') {
            steps {
                script {
                    // Now run the desired script
                    sh 'node your-script.js'
                }
            }
        }
    }
}
