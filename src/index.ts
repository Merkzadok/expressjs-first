import express, { Request, Response } from "express";
import userRouter from "./router/user/user";
import { todoRouter } from "./router/todos/todos.router";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/", userRouter);

app.use("/todos", todoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
