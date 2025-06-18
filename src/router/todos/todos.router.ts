const express = require("express");
import { getTodos } from "../../controller/todos/getTodos";
import { addTodo } from "../../controller/todos/addTodo";
import { getTodoById } from "../../controller/todos/getTodoById";
import { DeleteById } from "../../controller/todos/deleteById";
export const todoRouter = express.Router();

todoRouter.get("/", getTodos);

todoRouter.post("/add", addTodo);

todoRouter.get("/:id", getTodoById);

todoRouter.delete("/:id", DeleteById);
