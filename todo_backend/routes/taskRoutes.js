const router = require("express").Router();

const controller = require("../controllers/taskController");

router.get("/", controller.getTasks);
router.post("/", controller.createTask);
router.delete("/:id", controller.deleteTask);
router.put("/:id", controller.updateTask);

module.exports = router;