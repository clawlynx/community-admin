import { Router } from "express";
import {
  deleteCandidate,
  deleteEmployer,
  editSingleCandidate,
  editSingleEmployer,
  editSingleJob,
  getAllCandidates,
  getAllEmployers,
  getAllJobs,
  getDeleteRequests,
  getSingleCandidate,
  getSingleEmployer,
  getSingleJob,
} from "../../controllers/jobportal/jobPortalController.js";
import { validateEditEmployerInput } from "../../middleware/validationMiddleware.js";

const router = Router();

router.get("/employers", getAllEmployers);
router.get("/employers/:id", getSingleEmployer);
router.patch("/employers/:id", validateEditEmployerInput, editSingleEmployer);
router.delete("/employers/:id", deleteEmployer);
router.get("/jobseekers", getAllCandidates);
router.get("/jobseekers/:id", getSingleCandidate);
router.patch("/jobseekers/:id", editSingleCandidate);
router.delete("/jobseekers/:id", deleteCandidate);
router.get("/jobs", getAllJobs);
router.get("/jobs/:id", getSingleJob);
router.patch("/jobs/:id", editSingleJob);
router.get("/delete-requests", getDeleteRequests);
export default router;
