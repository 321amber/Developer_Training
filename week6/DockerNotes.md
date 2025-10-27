Docker containers: A Docker container is like a small, portable box that holds everything your application needs to run the code, libraries, and settings — so it works the same everywhere.
properties of container: portable, lightweight, 

docker image: it is an executable file, that helps us create multiple containers. it is like a class - blueprint or snapshot of container.


Basic Docker Commands
Command	            Description
docker --version	Check Docker version
docker info	        Display system-wide information
docker login	    Log in to Docker Hub
docker logout	    Log out from Docker Hub


Working with Images
Command	                        Description
docker pull <image>	            Download an image from Docker Hub
docker images	                List all images
docker rmi <image>	            Remove an image
docker build -t <name>:<tag> .	Build image from Dockerfile
docker tag <image> <repo>:<tag>	Tag an image for repository


Working with Containers
Command	                                Description
docker ps	                            List running containers
docker ps -a	                        List all containers (including stopped)
docker run -d --name <name> <image>	    Run container in background
docker run -it <image> /bin/bash	    Run container interactively
docker stop <container>	                Stop a running container
docker start <container>	            Start a stopped container
docker restart <container>	            Restart a container
docker rm <container>	                Remove a container
docker exec -it <container> /bin/bash	Open shell in running container (for shell use 'sh' instead of bash) 
docker logs <container>	                View logs from container
docker inspect <container>	            Get detailed container information


Docker Compose
Command	                  Description
docker-compose up	      Start all services in the docker-compose.yml
docker-compose up -d	  Start services in detached mode
docker-compose down	      Stop and remove services
docker-compose ps	      List running compose services


MySQL Commands

docker run -d -e MYSQL_ROOT_PASSWORD=secret (we can also name the container here --name) mysql     - to run the image of mysql and creating container.

🔹 Login & Basic
Command	                    Description
mysql -u root -p	        Log in as root user
SHOW DATABASES;	            List databases
CREATE DATABASE db_name;	Create a new database
USE db_name;	            Switch to database
DROP DATABASE db_name;	    Delete database


Tables
Command	                                                           Description
SHOW TABLES;	                                                   List tables in current DB
DESCRIBE table_name;	                                           Show table structure
CREATE TABLE table_name (id INT PRIMARY KEY, name VARCHAR(50));	   Create table
DROP TABLE table_name;	                                           Delete table


Data Manipulation
Command	                                                       Description
INSERT INTO table_name VALUES (1, 'John');	                   Insert data
SELECT * FROM table_name;	                                   Show all data
UPDATE table_name SET name='Jane' WHERE id=1;	               Update data
DELETE FROM table_name WHERE id=1;	                           Delete data


User Management
Command	                                                      Description
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';	  Create new user
GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost';	          Grant privileges
FLUSH PRIVILEGES;	                                          Reload privilege tables
SHOW GRANTS FOR 'user'@'localhost';	                          Show user privileges




-> docker images are made up of different layesrs, botttom - base layer- linux, and upper layer - container

Port Binding:- all containers are bind with a port. so we can bind our hostport with the container port to run it in a binded port
docker run -p8080(host port):3306(continer port) IMAGE_NAME
-> ek baar hostmachine ka port bind ho gaya to hum dusre container ko bind nahi kar sakte.


Docker vs VM: docker host os kernal par hi work karta hai aur appplication layer ko virtualize karta hai, lekin Virtula machines dono ko hi virtualize karta hai.
vm compatible for all machines, but docker mostly based on linux kernal.


development with docker:
docker network:
cretion: docker network create NETWORK_NAME

docker mongo image :- docker run -d -p27017:27017 --name mongo --network mongo-network -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=qwerty mongo (used this for this time)

docker mongo-express image:- It makes user interface for our docker mongo, an we can use for data manupulation and reading.


Docker Compose:- big command files we can run by writing then inside a file with extension of .yaml 
** it is a tool for defining and running multi container applications.**
commnads:
docker compose -f file_name.yaml up -d (want to create the container in the detechment)
docker compose -f file_name.yaml down  ( to delete or remove the files/continer permanantly)
**in yaml file we dont need to create network for the docker files, compose do it itself



Dockerizing the Applications: 
ex: for the file, filename should be always Dockerfile


FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=qwerty

RUN mkdir -p testapp

COPY . /dockerTest

CMD ["node", "/testapp/server.js"]



