const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();


// SIGNUP ROUTE
router.post("/signup", async (req, res) => {

  const { name, email, password } = req.body;

  const oldUser = await User.findOne({ email });

  if (oldUser) {
    return res.json({ msg: "Email already exists" });
  }

  const hashPass = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashPass
  });

  await newUser.save();

  res.json({ msg: "Signup Success" });

});


// LOGIN ROUTE
router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({ msg: "User not found" });
  }

  const checkPass = await bcrypt.compare(password, user.password);

  if (!checkPass) {
    return res.json({ msg: "Wrong Password" });
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    msg: "Login Success",
    token
  });

});

module.exports = router;