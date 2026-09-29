import { Router } from "express";
import { createGuestController } from "../controllers/guest.controller";

const router = Router();

router.post("/guests", createGuestController);

export default router;