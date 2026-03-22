const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/tasks',taskRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port https://localhost:${process.env.PORT}`);
});