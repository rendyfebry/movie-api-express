const express = require("express");
require("dotenv").config();

const searchRoutes = require("./routes/search");
const detailRoutes = require("./routes/detail");

const app = express();
const port = process.env.PORT;

app.use("/search", searchRoutes);
app.use("/detail", detailRoutes);

// 404 Handler
app.use("*", (req, res) => {
  res.status(404).json({
    message: "Not Found!"
  });
});

// error handler
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || "Something wrong!"
  });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
