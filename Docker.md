                                    ## Docker Notes ##

## Docker Containers:
- Docker containers are the **running instances** of docker images. 
- There can be multiple containers running from a single image.

- Containers >> Images >> Dockerfile >> Base Image (OS).

## Docker Images :
- Docker images are the **blueprints** of our application which form the basis of containers.
- for ex: ubuntu, node, nginx, redis, mongo, mysql, etc.

# Keywords : 
- -it : interactive tty (terminal) (container ke terminal me)

- *DOCKER COMMANDS* :
- docker run -it <image_name>
- docker start <container_name>
- docker stop <container_name>
- docker exec -it <container_name> bash
- docker exec <container_name> ls
- docker container ls (lists all the running containers) || docker ps
- docker container ls -a (lists all the containers)
- docker images (lists all the images locally)
- docker pull <image_name> (downloads the image from docker hub)

- *Docker Port Mapping* :
    (basically to map the port of the **image running in container** to the port of the **local machine**)
- docker run -it -p <port locally> : <port in container> <image_name> (-p stands for : port)

- *Docker Volume Mapping* :
    (basically to map the volume of the **image running in container** to the volume of the **local machine**)
- docker run -it -v <local_volume_path> : <container_volume_path> <image_name> (-v stands for : volume)


- *Passing Environment Variables* :
- docker run -it -e key=value -p 9000:9000 <image_name>

- -t (stands for "tag")

- *Docker Compose* :
- (agar tumhe multiple containers ko ek sath run karna hai toh docker-compose use karo)
- docker-compose up (basically to run the docker-compose.yml file) (docker-compose.yml file me saare containers ke configurations hote hai)
- docker-compose down (to stop the containers)
- docker-compose up -d (to run the containers in the background) (-d detached mode)
- docker-compose ps (to see the status of the containers)

- *Docker Push* :
- to push the image to the docker hub.
- docker logout
- docker login
- docker tag <image_name> <docker_hub_username>/<image_name>
- docker push <docker_hub_username>/<image_name>
- docker pull <docker_hub_username>/<image_name>








## kubectl and minikube :
- kubectl : kubernetes command line tool
- minikube : local kubernetes cluster

- basically kubernetes ko chalane ke liye hume ek cluster (minikube) chahiye hota hai. or vo cluster hum local machine pe bhi bana sakte hai using minikube. or ye kubernetes ek container me install hota hai using docker.

- *kubectl and Minikube Commands* :
- minikube start (to start the minikube cluster)
- minikube status (to check the status of the minikube cluster)
- minikube stop (to stop the minikube cluster)

- kubectl config current-context (to check the current context of kubectl)
- kubectl config get-contexts (to get the list of all the running contexts)
- kubectl config use-context <context_name>(minikube) (to switch the context)
- kubectl get nodes (to get the list of nodes)
- kubectl get pods (to get the list of pods)
- kubectl delete pod <pod_name> (to delete the pod)
- kubectl describe pod <pod_name> (to get the details of that particular pod)
- kubectl get services (to get the list of services)
- kubectl get services <service_name> (to get the list of that particular service)
- kubectl describe service <service_name> (to get the details of that particular service)
- kubectl apply -f <file_name> (to apply the configuration file)


## Please do follow these commands to push Docker Image to Artifact Registry --> 
    - video : https://www.youtube.com/watch?v=bk3LjHHWyyA

docker build -t 

gcloud services enable artifactregistry.googleapis.com
gcloud artifacts repositories create {repo-name} --repository-format=docker --location=us-central1 --description="created repo"
gcloud auth configure-docker us-central1-docker.pkg.dev

docker tag {local-image-name} us-central1-docker.pkg.dev/{project-name}/{repo-name}/{gcp-image-name}
docker push us-central1-docker.pkg.dev/{project-name}/{repo-name}/{gcp-image-name}