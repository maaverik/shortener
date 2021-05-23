const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(4445, () => {
  console.log("Server started on localhost:4445");
});
