import express from "express";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getAlltodos,
  getTodo,
} from "../controller/todo.controller.js";

export const router = express.Router();

router.get("/", getAlltodos);

router.get("/:id", getTodo);

router.post("/", createTodo);

router.put("/:id", editTodo);

router.delete("/:id", deleteTodo);
