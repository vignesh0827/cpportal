pipeline {
    agent any
    stages {
        stage('Install Node.js') {
            steps {
                script {
                    // Install Node.js and npm
                    sh 'curl -sL https://deb.nodesource.com/setup_16.x | bash -'
                    sh 'sudo apt-get install -y nodejs'
                }
            }
        }
        stage('Install npm Packages') {
            steps {
                sh 'npm install'
            }
        }
        // Other stages as needed
    }
}
