pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                withCredentials([
                    string(credentialsId: 'registry-domain', variable: 'REGISTRY_URL'),
                    file(credentialsId: 'controler-api-secret', variable: 'SECRET')
                    ]) {
                    echo 'Building the Docker image...'
                    sh 'docker build -t $REGISTRY_URL/dats-web:v$BUILD_NUMBER .'
                }
            }
        }

        stage('Publish Docker Image') {
            steps {
                echo 'Publishing the Docker image...'
                withCredentials([
                    usernamePassword(credentialsId: 'docker-registry', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME'),
                    string(credentialsId: 'registry-domain', variable: 'REGISTRY_URL')
                    ]) {
                        sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD  $REGISTRY_URL'
                        sh 'docker push $REGISTRY_URL/dats-web:v$BUILD_NUMBER'
                } 
            }
        }

        stage('Deploy to Jenkins') { 
            steps {
                echo 'Deploying to Jenkins...'
                //sh "argocd version"
                withCredentials([ 
                    //usernamePassword(credentialsId: 'argocd-login', passwordVariable: 'ARGOCD_PASSWORD', usernameVariable: 'ARGOCD_USERNAME'),
                    //string(credentialsId: 'argocd-domain', variable: 'ARGOCD_URL'),
                    string(credentialsId: 'registry-domain', variable: 'REGISTRY_URL')
                    ]) {
                    sh 'helm un --wait dats-web  -n default || exit 0'
                    sh 'helm install  dats-web ./helm  --set image.repository=$REGISTRY_URL/dats-web --set image.tag=v$BUILD_NUMBER  --namespace default'
               }
            }
        }
    }
}