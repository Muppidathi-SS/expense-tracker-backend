import { Router } from "express";
import { createGuestController } from "../controllers/guest.controller";
import { createExpenseController } from "../controllers/expense.controller";
import { createCategoryController } from "../controllers/categories.controller";
import { createPaymentMethodController } from "../controllers/payment-methods.controller";
import { createIncomeController } from "../controllers/income.controller";

const router = Router();

router.post("/guests", createGuestController);
router.post("/add-expense", createExpenseController);
router.post("/add-income", createIncomeController);
router.post("/add-category", createCategoryController);
router.post("/add-payment-method", createPaymentMethodController);

export default router;