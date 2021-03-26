const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Thankyou for calling me");
});

app.listen(3000, () => console.log("Listening to PORT 3000"));