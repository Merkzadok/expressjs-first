import express from "express";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    name: "merk",
    address: "London",
    age: "unknown",
    id: 7,
  });
});

app.post("/user", (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `User ${name} is ${age} years old.` });
});

app.post("/Firstname", (req, res) => {
  const { Firstname, Lastname, Address, PhoneNumber } = req.body;
  res.json({
    FirstName: `${Firstname}`,
    Lastname: `${Lastname}`,
    Address: `${Address}`,
    PhoneNumber: `${PhoneNumber}`,
  });
});

app.delete("/deleteUser", (req, res) => {
  const { userId } = req.body;
  res.send(`deleted user id ${userId}`);
});
app.put("/updateUser", (req, res) => {
  const { name } = req.body;
  res.send(`update user ${name}  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
