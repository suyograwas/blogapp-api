const express = require("express");
const app = express();
const dbConnection = require("./config/database");
const blogRoutes = require("./routes/blogRoutes");
require("dotenv").config();

dbConnection();
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});

app.use("/api/v1/blog", blogRoutes);

app.get("/", (req, res) => {
  res.send("<h1> This is home page <h1/>");
});
