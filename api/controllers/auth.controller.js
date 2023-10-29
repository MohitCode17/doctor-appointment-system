import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/generateToken.js";

// ---------------- Register controller ------------------
export const register = async (req, res) => {
  const { name, email, password, photo, role, gender } = req.body;
  try {
    let user = null;
    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }

    // Check if user already registered
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists!" });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user based on role
    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashedPassword,
        photo,
        role,
        gender,
      });
    }

    if (role === "doctor") {
      user = new Doctor({
        name,
        email,
        password: hashedPassword,
        photo,
        role,
        gender,
      });
    }

    await user.save();
    res
      .status(201)
      .json({ success: true, message: "User successfully created" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error, Please try again!",
    });
  }
};

// ---------------- Login controller ------------------
export const login = async (req, res) => {
  const { email, password: userPassword } = req.body;
  try {
    let user = null;
    const patient = await User.findOne({ email });
    const doctor = await Doctor.findOne({ email });

    if (patient) {
      user = patient;
    }
    if (doctor) {
      user = doctor;
    }

    // Check if user not exists
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    // Check password if user exist
    const isPasswordMatch = await bcrypt.compare(userPassword, user.password);

    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials!" });
    }

    // Send Session cookie to user
    const token = generateToken(user);
    const { password, role, appointments, ...rest } = user._doc;
    res.status(200).json({
      success: true,
      message: "Successfully login",
      token,
      data: { ...rest },
      role,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "failed to login",
    });
  }
};
