import express, { Request, Response } from "express";
import userRouter from "./router/user/user";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
