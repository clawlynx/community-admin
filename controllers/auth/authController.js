import {
  NotFoundError,
  UnauthenticatedError,
} from "../../errors/customErrors.js";
import Admin from "../../models/AdminUserModel.js";
import { comparePassword, hashPassword } from "../../utils/bcryptutils.js";
import { createJWT } from "../../utils/jwtUtils.js";

export const registerAdminUser = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  const newAdmin = new Admin({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  await newAdmin.save();
  res.status(200).json({ msg: "successfully registered" });
};

export const loginAdminUser = async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email });
  if (!admin) throw new NotFoundError("No user found");
  const isPasswordCorrect = await comparePassword(
    req.body.password,
    admin.password
  );
  if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials");
  const token = createJWT({
    userId: admin._id,
    username: admin.username,
  });
  const tenDay = 1000 * 60 * 60 * 24 * 10;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + tenDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(201).json({
    msg: "logged in successfully",
    admin: { username: admin.username, email: admin.email },
  });
};

export const logoutUser = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ msg: "successfully logged out" });
};

export const getAdminInfo = async (req, res) => {
  const admin = await Admin.findById(req.user.userId).select("-password");
  if (!admin) throw new NotFoundError("No admin found");
  res.status(200).json({ msg: "success", admin });
};
