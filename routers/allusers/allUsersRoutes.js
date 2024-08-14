import { Router } from "express";
import {
  editSingleUser,
  getAllUsers,
  getSingleUser,
} from "../../controllers/allusers/allUsersController.js";
import { validateEditUserInput } from "../../middleware/validationMiddleware.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.patch("/:id", validateEditUserInput, editSingleUser);

export default router;
