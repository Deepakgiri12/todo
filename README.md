# To-Do List App (Full Stack Assignment)

This project is a full stack To-Do List application built using Node.js, Express.js, MongoDB, and React.js.  
The application allows users to add, update, delete, search, and manage tasks.  
Backend APIs are connected with the React frontend to make a fully functional app.

------------------------------------------------------------

## Features

- Add Task
- Delete Task
- Update Task
- Mark Task as Completed
- Search Task
- REST API Integration
- MongoDB Database
- MVC Folder Structure
- Error Handling
- Axios API Calls

------------------------------------------------------------

## Tech Stack

Frontend:
React.js  
Axios  
CSS  

Backend:
Node.js  
Express.js  
MongoDB  
Mongoose  
dotenv  
cors  

Tools:
Postman  
GitHub  
Render  
Netlify  

------------------------------------------------------------

## Project Structure

Assignment8
│
├── todo_backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── server.js
│   └── .env
│
├── todo-frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md

------------------------------------------------------------

## Backend Setup

Go to backend folder

cd todo_backend

Install packages

npm install

Create .env file

PORT=5000
MONGO_URL=your_mongodb_url

Run server

npm run dev

------------------------------------------------------------

## Frontend Setup

Go to frontend folder

cd todo-frontend

Install packages

npm install

Run project

npm start

------------------------------------------------------------

## API Endpoints

GET /tasks  
POST /tasks  
PUT /tasks/:id  
DELETE /tasks/:id  

Search is implemented on frontend.

------------------------------------------------------------

## Deployment

Backend deployed on Render  
Frontend deployed on Netlify  

Example:

Backend URL:
https://your-backend.onrender.com

Frontend URL:
https://your-frontend.netlify.app

------------------------------------------------------------

## Environment Variables

.env file (backend)

PORT=5000
MONGO_URL=your_mongodb_connection

.env file is not uploaded to GitHub.

------------------------------------------------------------

## Challenges Faced

- MongoDB connection issue
- CORS error while connecting frontend
- Git remote error
- node_modules size issue
- API integration debugging

These problems were solved by checking logs,
using dotenv, fixing API URL, and correcting git remote.

------------------------------------------------------------

## Conclusion

This project demonstrates a full stack To-Do List application
using React, Node.js, Express, and MongoDB.

All CRUD operations are implemented and frontend is successfully
connected with backend APIs.
