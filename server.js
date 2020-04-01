const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!"
  });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
