#!/bin/bash
display_usage() {
	echo "This script must be run with two arguments. "
	echo "first argument : component , second argument: path to respective Dockerfile"
	echo "Example: ./deploy.sh app API.Application/Dockerfile"
	echo -e "\nUsage: $0 [arguments] \n"
	echo "Usage: ./deploy.sh component dockerfile_path"
	}

# if less than two arguments supplied, display usage
	if [  $# -ne 2 ]
	then
		display_usage
		exit 1
	fi
component=$1
path=$2
version=`git rev-parse --short HEAD | cut -c 1-6`
aws_account=068668040281

#build
docker build --no-cache -t ${component}:${version} -f ${path} .
docker tag ${component}:${version} ${aws_account}.dkr.ecr.eu-west-3.amazonaws.com/${component}:${version}
aws ecr get-login-password --region eu-west-3 | docker login --username AWS --password-stdin ${aws_account}.dkr.ecr.eu-west-3.amazonaws.com
docker push ${aws_account}.dkr.ecr.eu-west-3.amazonaws.com/${component}:${version}

# deploy
cd deploy/
sed -e "s/COMPONENT/${component}/g" -e "s/VERSION/${version}/g" template.yaml > ${component}.yaml
kubectl apply -f ${component}.yaml

## add bastion sg to ps-mssql-test
