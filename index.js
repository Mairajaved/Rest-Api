const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.SERVER_PORT || 3200;
const categoryRouter = require("./API/category/router");

app.use(express.json());
app.use("/api", categoryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
