# Introduction
A simple way to maintain and/or create a web scraper. 

# Prerequisites
* Docker
* Node

# Running the App/Server

before anything else make sure to spin up the docker for mongoDB using docker-compose as shown below
```
docker-compose up mongodb
````
To run the app first we need to install its dependencies using npm command in both client and server directory, to do this we first change directory to client folder
```
cd client
```
then, we need to install dependencies.
```
npm install
````
after installing packages, we will run the build with watch flag using below command, this will keep watching for new file changes to update the client bundle automatically.
```
npm run build:dev
````
now, using another terminal we need to navigate to the server folder.
```
cd server
````
and, now install the dependencies
```
npm install
````
now we can start the server as well in watch mode
```
npm run start:dev
````

# 