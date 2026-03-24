# API Testing Documentation

All APIs were tested using Postman.

Base URL:

http://localhost:5000/tasks

---

## 1. Get All Tasks

Method: GET

URL:

http://localhost:5000/tasks

Result:

* Returns all tasks
* Status: 200 OK

Example response:

[
{
"_id": "1",
"title": "Study",
"completed": false,
"createdAt": "...",
"updatedAt": "..."
}
]

---

## 2. Add Task

Method: POST

URL:

http://localhost:5000/tasks

Body (JSON):

{
"title": "New Task"
}

Result:

* Task created
* Status: 201 Created

---

## 3. Delete Task

Method: DELETE

URL:

http://localhost:5000/tasks/:id

Example:

http://localhost:5000/tasks/123

Result:

* Task deleted
* Status: 200 OK

---

## 4. Update Task

Method: PUT

URL:

http://localhost:5000/tasks/:id

Body:

{
"title": "Updated task",
"completed": true
}

Result:

* Task updated
* Status: 200 OK

---

## 5. Update Task Status

Method: PATCH

URL:

http://localhost:5000/tasks/:id/status

Body:

{
"completed": true
}

Result:

* Status updated
* Status: 200 OK

---

## 6. Search Tasks

Method: GET

URL:

http://localhost:5000/tasks/search?q=study

Result:

* Returns matching tasks
* Status: 200 OK

---

## 7. Get Task By ID

Method: GET

URL:

http://localhost:5000/tasks/:id

Result:

* Returns single task
* Status: 200 OK

If not found:

Status: 404

---

## Error Handling Tested

* Empty title → 400
* Wrong ID → 404
* Server error → 500

All controllers use try-catch blocks.

---

## Tools Used

* Postman
* MongoDB Atlas
* Node.js
* Express
* React
