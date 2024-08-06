import { Router } from "express";
import {
  getAllUsers,
  getSingleUser,
} from "../../controllers/allusers/allUsersController.js";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);

export default router;
