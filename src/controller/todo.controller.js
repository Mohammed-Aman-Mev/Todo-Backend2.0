import { todoModel } from "../models/todo.model.js";

const getAlltodos = async (req, res) => {
  const allTodo = await todoModel.find();

  if (!allTodo) {
    res.status(404);
    res.json({
      msg: "data not found",
    });
  }

  res.send(allTodo);
};

const getTodo = async (req, res) => {
  const todo = await todoModel.findById(req.params.id);

  if (!todo) {
    res.status(404).json({ msg: "todo not found" });
  }

  res.status(200).json(todo);
};

const createTodo = async (req, res) => {
  const { title, description, writer } = req.body;

  if (!title || !description || !writer) {
    res.status(400);
    res.json({
      msg: "please fill all fields",
    });
  }

  const newTodo = await todoModel.create({
    title,
    description,
    writer,
  });

  if (!newTodo) {
    res.json({ msg: "todo not created" });
  }
  res.status(201);
  res.json(newTodo);
};

const editTodo = async (req, res) => {
  const updatedTodo = await todoModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  if (!updatedTodo) res.status(404).json({ msg: "TOdo not found" });

  res.status(200).json(updatedTodo);
};

const deleteTodo = async (req, res) => {
  await todoModel.findByIdAndDelete(req.params.id);
  res.status(200).json({msg:"todo deleted"})
};

export { getAlltodos, getTodo, createTodo, editTodo, deleteTodo };
