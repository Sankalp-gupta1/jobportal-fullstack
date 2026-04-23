const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("Job Portal Backend Running");
});

app.listen(5000, () => {
  console.log("Server Started");
});