import { Router } from "express";
import { getAllEmployers } from "../../controllers/jobportal/jobPortalController.js";

const router = Router();

router.get("/employers", getAllEmployers);
export default router;
