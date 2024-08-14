import generateToken from "../jwt/generateTokenJwt.js";
import Conversation from "../models/conversaction.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
export const signIn = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const hassPassword = await bcrypt.hash(password, 10);
    const createUser = await User.create({
      fullName,
      email,
      password: hassPassword,
    });

    createUser.save();
    if (createUser) {
      generateToken(createUser._id, res);
      res
        .status(201)
        .json({ message: "User created successfully", createUser });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    generateToken(user, res);
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Logout Api

export const logout = (req, res) => {
  try {
    res.clearCookie("jwt");
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// All Get Users

export const getAllUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in allUsers Controller: " + error);
    res.status(500).json({ error: "Internal server error" });
  }
};
