import { Router } from "express";
import { createGuestController } from "../controllers/guest.controller";
import { createExpenseController } from "../controllers/expense.controller";
import { createCategoryController } from "../controllers/categories.controller";

const router = Router();

router.post("/guests", createGuestController);
router.post("/add-expense", createExpenseController);
router.post("/add-category", createCategoryController);

export default router;