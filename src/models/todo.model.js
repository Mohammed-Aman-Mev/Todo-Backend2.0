import mongoose from "mongoose";

const todo = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const todoModel = mongoose.model("todoModel", todo);
