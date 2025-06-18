import { Request, Response } from "express";
import { todos } from "../../db/todo";

export const addTodo = (req: Request, res: Response) => {
  const { desc } = req.body;

  const todo = {
    id: Math.random(),
    desc,
    isComplete: false,
  };
  todos.push(todo);

  res.json({ success: true, todos });
};
