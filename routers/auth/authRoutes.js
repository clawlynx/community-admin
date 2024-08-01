import { Router } from "express";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../../middleware/validationMiddleware.js";
import {
  getAdminInfo,
  loginAdminUser,
  logoutUser,
  registerAdminUser,
} from "../../controllers/auth/authController.js";
import { authenticateUser } from "../../middleware/authMiddleware.js";

const router = Router();

router.post("/register", validateRegisterInput, registerAdminUser);
router.post("/login", validateLoginInput, loginAdminUser);
router.post("/logout", logoutUser);
router.get("/info", authenticateUser, getAdminInfo);

export default router;
