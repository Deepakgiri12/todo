const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", taskController.getAllTasks);
router.post("/", taskController.addTask);
router.get("/search", taskController.searchTasks);
router.get("/:id", taskController.getTaskById);
router.put("/:id", taskController.updateTask);
router.patch("/:id/status", taskController.updateTaskStatus);
router.delete("/:id", taskController.deleteTask);

module.exports = router;