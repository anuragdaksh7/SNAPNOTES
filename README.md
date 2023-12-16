# SNAPNOTES
![image](https://github.com/anuragdaksh7/SNAPNOTES/assets/84393491/5e5ca47d-db64-407c-ae02-95840ba8bace)
new UI-> ![image](https://uizard.io/static/f12f8cba56dc4edf576aed59dca5360a/d9bdf/to-do-web-app-sticky-wall.png)

### A note taking app which makes it a lot easier and quicker to take quick notes from your favorite lesson or some other tutorials.

## Tech Stack
- MERN
- JWT for authentication

## Features
- Login/ Signup
- Add new note
- Delete note

## Installation Guide

```
git clone https://github.com/anuragdaksh7/SNAPNOTES.git
```
### for client
``` 
cd client 
npm install
npm start
```
### for server
```
cd server
npm install
npm run dev/ node app.js
```
### Environment Variables
- #### Frontend
- - REACT_APP_BASE_URL = "http://localhost:5000/"
- #### Backend
- - PORT = 5000
- - API_KEY = "mongodb connection string"
- - SECRET_KEY = "your secret key for JWT"

## Running using Docker
- add all enviroment variables

```
docker compose up
```
