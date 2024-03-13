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