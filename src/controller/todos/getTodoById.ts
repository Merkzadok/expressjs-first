import { Request, Response } from "express";
import { todos } from "../../db/todo";

export const getTodoById = (req: Request, res: Response) => {
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id === Number(id));

  if (!todo) {
    return res.json({ success: false, message: "not found todo" });
  }

  res.json({ todo });
};
