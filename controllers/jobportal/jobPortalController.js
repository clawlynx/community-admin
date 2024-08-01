import { NotFoundError } from "../../errors/customErrors.js";
import Employer from "../../models/jobportal/EmployerModel.js";

export const getAllEmployers = async (req, res) => {
  const employers = await Employer.find();
  if (!employers) throw new NotFoundError("No Employers found");
  res.status(200).json({ msg: "success", employers });
};
