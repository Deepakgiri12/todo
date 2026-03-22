const service = require("../services/taskServices");

const getTasks = async (req, res) => {
  const tasks = await service.getTasks();
  res.json(tasks);
};

const createTask = async (req, res) => {
  const task = await service.createTask(req.body);
  res.json(task);
};

const deleteTask = async (req, res) => {
  await service.deleteTask(req.params.id);
  res.json({ message: "deleted" });
};

const updateTask = async (req, res) => {
  const task = await service.updateTask(
    req.params.id,
    req.body
  );
  res.json(task);
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
};