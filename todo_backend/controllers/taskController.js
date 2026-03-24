const Task = require("../models/taskModel");

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({
      error: "Server error",
      message: err.message,
    });
  }
};

// Add task
exports.addTask = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        error: "Title is required",
      });
    }

    const task = new Task({ title });

    await task.save();

    res.status(201).json(task);

  } catch (err) {
    res.status(500).json({
      error: "Failed to add task",
      message: err.message,
    });
  }
};

// Delete task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    res.status(200).json({
      message: "Task deleted",
    });

  } catch (err) {
    res.status(500).json({
      error: "Failed to delete task",
      message: err.message,
    });
  }
};

// Update task
exports.updateTask = async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({
        error: "Title is required",
      });
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    res.status(200).json(task);

  } catch (err) {
    res.status(500).json({
      error: "Failed to update task",
      message: err.message,
    });
  }
};

// Update status
exports.updateTaskStatus = async (req, res) => {
  try {
    if (typeof req.body.completed !== "boolean") {
      return res.status(400).json({
        error: "Completed must be true or false",
      });
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    res.status(200).json(task);

  } catch (err) {
    res.status(500).json({
      error: "Failed to update status",
      message: err.message,
    });
  }
};

// Search tasks
exports.searchTasks = async (req, res) => {
  try {
    const keyword = req.query.q || "";

    const tasks = await Task.find({
      title: { $regex: keyword, $options: "i" },
    });

    res.status(200).json(tasks);

  } catch (err) {
    res.status(500).json({
      error: "Search failed",
      message: err.message,
    });
  }
};

// Get task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        error: "Task not found",
      });
    }

    res.status(200).json(task);

  } catch (err) {
    res.status(500).json({
      error: "Failed to get task",
      message: err.message,
    });
  }
};