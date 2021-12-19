const axios = require("axios");
const express = require("express");
const app = express();
const port = 3030;

const call = async (num) => {
  await axios.get(`http://localhost:3030/?number=${num}`);
};
app.get("/", (req, res) => {
  let num = 0;
  setTimeout(() => {
    call(Math.random());
  }, 1000 * 1);
  num = num + 1;
  console.log(req.query.number);
  res.send(`Hello World! ${req.query.number}`);
});

app.listen(port, () => {
  console.log(`express app listening at http://localhost:${port}`);
});
