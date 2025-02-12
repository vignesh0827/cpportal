pipeline {
    agent any
    tools {
        nodejs 'nodejs'  // Use the configured NodeJS tool
    }
    stages {
        stage('Install Node.js') {
            steps {
                script {
                    // Install NVM (Node Version Manager)
                    sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash'
                    sh 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm install 16'
                }
            }
        }
        stage('Install npm Packages') {
            steps {
                sh 'export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && npm install'
            }
        }
        // stage('Run Tests') {
        //     steps {
        //         script {
        //             sh 'npm test'
        //         }
        //     }
        // }

        stage('Start Node.js Application') {
            steps {
                script {
                    sh 'node app.js'
                }
            }
        }
    }
}
