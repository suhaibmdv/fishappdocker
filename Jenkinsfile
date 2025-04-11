pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Get code from GitHub repository
                checkout scm
                echo 'Checkout completed'
            }
        }
        
        stage('Build') {
            steps {
                // Build the Docker image
                sh 'docker build -t web-app:${BUILD_NUMBER} .'
                echo 'Build completed'
            }
        }
        
        stage('Deploy') {
            steps {
                // Stop existing container if it exists
                sh '''
                    docker ps -f name=web-app -q | xargs --no-run-if-empty docker stop
                    docker ps -a -f name=web-app -q | xargs --no-run-if-empty docker rm
                '''
                
                // Run the new container
                sh 'docker run -d -p 80:80 --name web-app web-app:${BUILD_NUMBER}'
                echo 'Deployment completed'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}