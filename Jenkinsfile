pipeline {
    agent any
    
    tools {
        maven 'Maven'
        jdk 'jdk-17'
    }

    stages {
        stage('Build Backend') {
            steps {
                script {
                    sh 'cd Banking-app && mvn clean package -DskipTests'
                }
            }
        }

        stage('Run the App') {
            steps {
                script {
                    sh 'cd Banking-app && java -jar target/*.jar &'
                    sleep 10
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    sh 'curl http://localhost:8080'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    sh 'pkill -f "java"'
                }
            }
        }
    }
}