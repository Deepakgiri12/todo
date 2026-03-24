const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [2, "Title must be at least 2 characters"],
      maxlength: [100, "Title too long"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

module.exports = mongoose.model("Task", taskSchema);