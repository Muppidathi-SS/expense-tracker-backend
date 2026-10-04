import { Router } from "express";
import { createGuestController } from "../controllers/guest.controller";
import { createExpenseController } from "../controllers/expense.controller";
import {
  createCategoryController,
  getAllCategoriesByGuestIdController,
  getAllCategoriesController,
} from "../controllers/categories.controller";
import {
  createPaymentMethodController,
  getAllPaymentMethodsController,
} from "../controllers/payment-methods.controller";
import { createIncomeController } from "../controllers/income.controller";

const router = Router();

router.post("/guests", createGuestController);
router.post("/expense", createExpenseController);
router.post("/income", createIncomeController);
router.post("/category", createCategoryController);
router.post("/payment-method", createPaymentMethodController);

router.get("/categories", getAllCategoriesController);
router.get("/paymentMethods", getAllPaymentMethodsController);
router.get("/guests/:guest_id/categories",getAllCategoriesByGuestIdController)

export default router;