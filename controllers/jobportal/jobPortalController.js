import { NotFoundError } from "../../errors/customErrors.js";
import Employer from "../../models/jobportal/EmployerModel.js";
import Job from "../../models/jobportal/JobModel.js";
import JobSeeker from "../../models/jobportal/JobSeeker.js";

export const getAllEmployers = async (req, res) => {
  const employers = await Employer.find({ companyName: { $exists: true } });
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

export const editSingleEmployer = async (req, res) => {
  const employer = await Employer.findById(req.params.id);
  if (!employer) throw new NotFoundError("No Employer found");
  employer.founded = req.body.founded;
  employer.companyName = req.body.companyName;
  employer.companyEmail = req.body.companyEmail;
  employer.companyContact = req.body.companyContact;
  employer.companyAddress = req.body.companyAddress;
  employer.state = req.body.state;
  employer.country = req.body.country;
  employer.industry = req.body.industry;
  employer.facebook = req.body.facebook;
  employer.twitter = req.body.twitter;
  employer.linkedin = req.body.linkedin;
  employer.website = req.body.website;
  employer.size = req.body.size;
  employer.about = req.body.about;
  await employer.save();
  res.status(200).json({ msg: "success" });
};

export const deleteEmployer = async (req, res) => {
  const employer = await Employer.findByIdAndDelete(req.params.id);
  if (!employer) throw new NotFoundError("No employer found");
  const jobs = await Job.deleteMany({ owner: req.params.id });
  res.status(200).json({ msg: "success" });
};

export const getAllCandidates = async (req, res) => {
  const candidates = await JobSeeker.find().populate("owner");
  if (!candidates) throw new NotFoundError("No jobseekers found");
  res.status(200).json({ msg: "success", candidates });
};

export const getSingleCandidate = async (req, res) => {
  const candidate = await JobSeeker.findById(req.params.id).populate([
    "owner",
    "appliedJobs",
  ]);
  if (!candidate) throw new NotFoundError("No Candidate found");
  res.status(200).json({ msg: "success", candidate });
};

export const editSingleCandidate = async (req, res) => {
  const candidate = await JobSeeker.findById(req.params.id);
  if (!candidate) throw new NotFoundError("No candidate found");
  const skillsArray = req.body.skills.split(",").map((item) => item.trim());
  const locationArray = req.body.location.split(",").map((item) => item.trim());
  const languagesArray = req.body.languages
    .split(",")
    .map((item) => item.trim());
  candidate.fullName = req.body.fullName;
  candidate.oneWord = req.body.role;
  candidate.totalExperience = req.body.experience;
  candidate.skills = skillsArray;
  candidate.qualification = req.body.qualification;
  candidate.preferredLocation = locationArray;
  candidate.portfolio = req.body.portfolio;
  candidate.languages = languagesArray;
  candidate.github = req.body.github;
  candidate.expectedSalary = req.body.expected;
  candidate.currentSalary = req.body.current;
  candidate.about = req.body.about;
  await candidate.save();
  res.status(200).json({ msg: "success" });
};

export const deleteCandidate = async (req, res) => {
  const candidate = await JobSeeker.findByIdAndDelete(req.params.id);
  if (!candidate) throw new NotFoundError("No candidate found");
  res.status(200).json({ msg: "success" });
};

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find().populate("owner");
  if (!jobs) throw new NotFoundError("No jobs found");
  res.status(200).json({ msg: "success", jobs });
};

export const getSingleJob = async (req, res) => {
  const job = await Job.findById(req.params.id).populate(["owner", "applied"]);
  if (!job) throw new NotFoundError("No job found");
  res.status(200).json({ msg: "success", job });
};

export const editSingleJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) throw new NotFoundError("No job found");
  const skillsArray = req.body.skills.split(",").map((item) => item.trim());
  job.jobTitle = req.body.jobTitle;
  job.category = req.body.category;
  job.deadline = req.body.deadline;
  job.jobPlace = req.body.address;
  job.qualification = req.body.qualification;
  job.experience = req.body.experience;
  job.gender = req.body.gender;
  job.jobLocation = req.body.location;
  job.jobType = req.body.type;
  job.salary = req.body.salary;
  job.skills = skillsArray;
  job.description = req.body.desc;
  await job.save();
  res.status(200).json({ msg: "success" });
};

export const getDeleteRequests = async (req, res) => {
  const employers = await Employer.find({ deleteRequest: true });
  if (!employers) throw new NotFoundError("No employers");
  const candidates = await JobSeeker.find({ deleteRequest: true });
  if (!candidates) throw new NotFoundError("No Candidates");
  res.status(200).json({ msg: "success", employers, candidates });
};

export const getApprovals = async (req, res) => {
  const approvals = await Employer.find({
    $or: [{ verified: { $exists: false } }, { verified: false }],
  });
  if (!approvals) throw new NotFoundError("No pending approvals");
  res.status(200).json({ msg: "success", approvals });
};

export const verifyCompany = async (req, res) => {
  const employer = await Employer.findById(req.params.id);
  if (!employer) throw new NotFoundError("No employer found");
  employer.verified = true;
  await employer.save();
  res.status(200).json({ msg: "success" });
};
