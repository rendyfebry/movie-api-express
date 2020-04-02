const express = require("express");
require("dotenv").config();

const searchRoutes = require("./routes/search");
const detailRoutes = require("./routes/detail");

const app = express();
const port = process.env.PORT;

app.use("/search", searchRoutes);
app.use("/detail", detailRoutes);

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    message: "Not Found!"
  });
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
