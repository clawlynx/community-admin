import { Router } from "express";
import {
  getAllCandidates,
  getAllEmployers,
  getAllJobs,
  getSingleCandidate,
  getSingleEmployer,
  getSingleJob,
} from "../../controllers/jobportal/jobPortalController.js";

const router = Router();

router.get("/employers", getAllEmployers);
router.get("/employers/:id", getSingleEmployer);
router.get("/jobseekers", getAllCandidates);
router.get("/jobseekers/:id", getSingleCandidate);
router.get("/jobs", getAllJobs);
router.get("/jobs/:id", getSingleJob);
export default router;
