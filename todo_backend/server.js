const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB();
app.use("/tasks", taskRoutes); // prefix

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));