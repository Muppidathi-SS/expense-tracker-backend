import { Router } from "express";
import { createGuestController } from "../controllers/guest.controller";
import { createExpenseController } from "../controllers/expense.controller";

const router = Router();

router.post("/guests", createGuestController);
router.post("/add-expense", createExpenseController);

export default router;