                                    ## Docker Notes ##

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