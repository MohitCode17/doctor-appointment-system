import User from "../models/UserSchema.js";
import bcrypt from "bcryptjs";

// ---------------- Update user controller ------------------
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update details!" });
  }
};

// ---------------- Delete user controller ------------------
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Account deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to delete account, Try again!",
    });
  }
};

// ---------------- Get all user controller ------------------
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Interval server error!" });
  }
};

// ---------------- Get single user controller ------------------
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id).select("-password");
    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Interval server error!" });
  }
};
