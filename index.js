const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Thankyou for calling me at 4200");
});

const users = ["Rahul", "Rohit", "Virat", "Gill", "ishan"];
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  res.send({ name: users[userId], id: userId });
});

app.listen(4200, () => console.log("Listening to PORT 4200"));
