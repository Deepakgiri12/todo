# Todo App Frontend

This is the frontend of the Todo App built using React.
It connects to the backend API to perform CRUD operations on tasks.

---

## Features

* Add new task
* Delete task
* Mark task as completed
* Search tasks
* Loading state handling
* Error handling with messages
* API URL using environment variables

---

## Tech Stack

* React
* Axios
* CSS
* Environment Variables (.env)

---

## Project Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create .env file

Create a `.env` file in the frontend root folder.

```
REACT_APP_API_URL=http://localhost:5000
```

⚠️ Must start with REACT_APP_

### 3. Run the project

```bash
npm start
```

App will run on:

```
http://localhost:3000
```

Make sure backend is running on port 5000.

---

## API Endpoints Used

* GET /tasks
* POST /tasks
* DELETE /tasks/:id
* PATCH /tasks/:id/status
* GET /tasks/search?q=keyword

---

## Error Handling

All API calls use try-catch blocks.
Errors are shown to users using error state.

---

## Loading State

Loading message is shown while API request is running.

---

## Notes

* API URL is stored in environment variable
* Axios is used for API calls
* CSS is used for styling
* React hooks are used for state management

---

