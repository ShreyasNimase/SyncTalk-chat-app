const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");

// REGISTER
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please enter all fields",
    });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(409).json({
      success: false,
      message: "User already exists",
    });
  }

  // Cloudinary URL provided automatically by multer-storage-cloudinary
  const pic = req.file ? req.file.path : undefined;

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    pic: user.pic,
    token: generateToken(user._id),
  });
});

// LOGIN
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
    console.log(res);
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid email or password",
    })
  }
});

module.exports = { registerUser, authUser };
