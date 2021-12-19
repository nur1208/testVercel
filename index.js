const axios = require("axios");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`Hello World! ${req.query.number}`);
});

app.listen(port, () => {
  console.log(`express app listening at http://localhost:${port}`);
});

export const call = async (num) => {
  await axios.get(
    `https://test-vercel-six-psi.vercel.app?number=${num}`
  );
};

while (true) {
  let num = 0;
  setTimeout(() => {
    call(Math.random());
  }, 1000 * 10);
  num = num + 1;
}
