import { Request, Response } from "express";
import { todos } from "../../db/todo";

export const getTodos = (req: Request, res: Response) => {
  res.json({ todos });
};
