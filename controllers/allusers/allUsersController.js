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

export const editSingleUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new NotFoundError("No user found");
  const hobbiesArray = req.body.hobbies.split(",").map((item) => item.trim());
  const interestArray = req.body.interest.split(",").map((item) => item.trim());
  user.age = req.body.age;
  user.dateOfBirth = req.body.dateOfBirth;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.username = req.body.username;
  user.hobbies = hobbiesArray;
  user.interest = interestArray;
  user.gender = req.body.gender;
  user.smoking = req.body.smoking;
  user.drinking = req.body.drinking;
  user.address = req.body.address;
  user.highestQualification = req.body.highestQualification;
  await user.save();
  res.status(200).json({ msg: "success" });
};
