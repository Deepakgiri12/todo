const Task=require('../models/taskModel');

// Get all tasks
const getTasks=async()=>{
    return await Task.find();
};

// Create a new task
const createTask=async(data)=>{
    return await Task.create(data);
};

// Delete a task by ID
const deleteTask=async(id)=>{
    return await Task.findByIdAndDelete(id);
};

// Update a task by ID
const updateTask=async(id,data)=>{
    return await Task.findByIdAndUpdate(id , data , {new:true});
};

module.exports={
    getTasks,
    createTask,
    deleteTask,
    updateTask
};
