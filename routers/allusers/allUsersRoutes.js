import { Router } from "express";
import { getAllUsers } from "../../controllers/allusers/allUsersController.js";

const router = Router();

router.get("/", getAllUsers);

export default router;
