// const User = require("../models/User");

// // Get all users
// exports.getAllUsers = async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// };

// // Get user by ID
// exports.getUserById = async (req, res) => {
//   const user = await User.findById(req.params.id);

//   if (!user) {
//     res.status(404).json({ message: "User not found" });
//   } else {
//     res.json(user);
//   }
// };

// // Create a new user
// exports.createUser = async (req, res) => {
//   const user = await User.create(req.body);
//   res.status(201).json({ message: "User created successfully", user });
// };
