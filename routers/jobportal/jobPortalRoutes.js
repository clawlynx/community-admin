import { Router } from "express";
import {
  getAllCandidates,
  getAllEmployers,
  getAllJobs,
  getSingleEmployer,
} from "../../controllers/jobportal/jobPortalController.js";

const router = Router();

router.get("/employers", getAllEmployers);
router.get("/employers/:id", getSingleEmployer);
router.get("/jobseekers", getAllCandidates);
router.get("/jobs", getAllJobs);
export default router;
