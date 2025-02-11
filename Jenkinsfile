pipeline {
    agent {
        docker {
            image 'node:16'  // Use a Node.js image with version 16
            label 'your-agent-label'  // Replace with your Jenkins agent label if needed
        }
    }
    stages {
        stage('Install npm Packages') {
            steps {
                sh 'npm install'
            }
        }
    }
}

