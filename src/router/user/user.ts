import express, { Request, Response } from "express";
import fs from "fs";
import { User } from "../../Types/types";

const userRouter = express.Router();

userRouter.post("/user", (req: Request, res: Response) => {
  const { name, age }: { name: string; age: number } = req.body;
  res.json({ message: `User  ${name} is ${age} years old.` });
});
userRouter.get("/", (req: Request, res: Response) => {
  res.send({
    name: "testName",
    age: "1",
    id: 1,
  });
});

userRouter.put("/updateUser", (req: Request, res: Response) => {
  const { Firstname, Lastname }: { Firstname: string; Lastname: number } =
    req.body;
  res.send(`updated user ${Firstname} ${Lastname}`);
});

userRouter.get("/users", (req: Request, res: Response) => {
  const users = fs.readFileSync("./user.json", { encoding: "utf8", flag: "r" });
  res.json(JSON.parse(users));
});

userRouter.post("/createUser", (req: Request, res: Response) => {
  const { name, age, userName, userEmail, phoneNumber, password }: User =
    req.body;

  const filePath = "./user.json";
  const uniqueId = Math.random();

  let users: User[] = [];

  if (fs.existsSync(filePath)) {
    const existingData = fs.readFileSync(filePath, "utf8");
    if (existingData.trim().length > 0) {
      users = JSON.parse(existingData);
    }
  }

  users.push({
    name,
    age,
    userName,
    userEmail,
    phoneNumber,
    password,
    userId: uniqueId,
  });

  fs.writeFileSync(filePath, JSON.stringify(users));

  res.send("Successfully created User");
});
userRouter.delete("/deleteUser", (req: Request, res: Response) => {
  const { userId } = req.body;
  const existingData = fs.readFileSync("./user.json", "utf8");

  const deletedUser = JSON.parse(existingData).filter(
    (user: User) => user.userId !== userId
  );

  fs.writeFileSync("./user.json", JSON.stringify(deletedUser, null, 2));

  res.json({ userId });
});

export default userRouter;
