import { Request, Response } from "express";
import { todos } from "../../db/todo";

export const DeleteById = (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteF = todos.filter((todo) => todo.id !== Number(id));
  res.json({ message: deleteF });
};
