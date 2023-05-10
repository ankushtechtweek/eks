pipeline {
  agent any
  parameters {
    choice(name: 'environment', choices: ['test', 'prod'], description: 'Select the environment to deploy to')    
    choice(name: 'aws_account', choices: ['068668040281', '625033407804'], description: 'Select the AWS account to deploy to :  test:"068668040281", prod:"625033407804"')    
    }    

  environment {        
        node_version = "v16.15.0"
        git_hash = sh(returnStdout: true, script: "git rev-parse --short HEAD | cut -c 1-6").trim()
        aws_region = "us-east-2"
        git_url = "git@gitlab.dev.propertyscout.io:devs/UI.git"
        component = "ui"        
        branch   = "${params.environment}"
        version = "${git_hash}"                
        AWS_CREDENTIAL_ID = "${params.environment}-aws-tfuser"
        ecr_repo_uri = "${aws_account}.dkr.ecr.${aws_region}.amazonaws.com"     
        
    }
  
  stages {
     stage ('Clear Workspace') {
            steps {
                deleteDir()
            }
        }

        stage ('Clone') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: "${branch}"]],
                    extensions: [[$class: 'WipeWorkspace']],
                    userRemoteConfigs: [[url: "${git_url}"]]
                ])
                
            }
        
        }

        stage ('Build') {
            steps {
                sh """   
                    hostname       
                    export PATH="/var/lib/jenkins/":$PATH
                    echo $PATH                                                  
                    node --version 
                    which node                   
                    npm --version
                    which npm                    
                """
            }
        }

        stage ('Docker Build and Push') {
            steps {
                script {
                    withCredentials([[$class: 'AmazonWebServicesCredentialsBinding',
                                  accessKeyVariable: 'AWS_ACCESS_KEY_ID',
                                  credentialsId: "${AWS_CREDENTIAL_ID}",
                                  secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                        sh """
                            
                        docker build -t ${component}:${version} .
                        docker tag ${component}:${version} ${ecr_repo_uri}/${component}:${version}
                        aws ecr get-login-password --region ${aws_region} | docker login --username AWS --password-stdin ${aws_account}.dkr.ecr.${aws_region}.amazonaws.com
                        docker push ${ecr_repo_uri}/${component}:${version}
                        
                        """
                    }
                }                
                
            }
        }

        // stage ('Deploy') {
        //     steps { 
        //          // deploy to k8s
        //          sh " echo "Deploying to k8s" "
        //     }

               

        // }
    
  }
}