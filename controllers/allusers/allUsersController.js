import { NotFoundError } from "../../errors/customErrors.js";
import User from "../../models/UserModel.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  if (!users) throw new NotFoundError("No users found");
  res.status(200).json({ msg: "success", users });
};

export const getSingleUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new NotFoundError("No user found");
  res.status(200).json({ msg: "success", user });
};
