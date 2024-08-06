import { NotFoundError } from "../../errors/customErrors.js";
import Employer from "../../models/jobportal/EmployerModel.js";
import Job from "../../models/jobportal/JobModel.js";
import JobSeeker from "../../models/jobportal/JobSeeker.js";

export const getAllEmployers = async (req, res) => {
  const employers = await Employer.find();
  if (!employers) throw new NotFoundError("No Employers found");
  res.status(200).json({ msg: "success", employers });
};

export const getSingleEmployer = async (req, res) => {
  const employer = await Employer.findById(req.params.id).populate([
    "owner",
    "totalJobs",
  ]);
  if (!employer) throw new NotFoundError("No employer found");
  res.status(200).json({ msg: "success", employer });
};

export const getAllCandidates = async (req, res) => {
  const candidates = await JobSeeker.find().populate("owner");
  if (!candidates) throw new NotFoundError("No jobseekers found");
  res.status(200).json({ msg: "success", candidates });
};

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find().populate("owner");
  if (!jobs) throw new NotFoundError("No jobs found");
  res.status(200).json({ msg: "success", jobs });
};
