# SNAPNOTES
![image](https://github.com/anuragdaksh7/SNAPNOTES/assets/84393491/5e5ca47d-db64-407c-ae02-95840ba8bace)
![image](https://github.com/anuragdaksh7/SNAPNOTES/assets/84393491/a109daa5-b209-43ed-96da-b124e29f1358)

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
