import { Router } from "express";
import { createGuestController } from "../controllers/guest.controller";
import {
  createExpenseController,
  getExpenseByIdController,
  getExpensesController,
} from "../controllers/expense.controller";
import {
  createCategoryController,
  getAllCategoriesByGuestIdController,
  getCategoryExpenseChartByGuestIdController,
  getAllCategoriesController,
} from "../controllers/categories.controller";
import {
  createPaymentMethodController,
  getAllPaymentMethodsByGuestIdController,
  getAllPaymentMethodsController,
} from "../controllers/payment-methods.controller";
import {
  createIncomeController,
  getIncomeByIdController,
  getIncomesController,
} from "../controllers/income.controller";

const router = Router();

router.post("/guests", createGuestController);
router.post("/expense", createExpenseController);
router.post("/income", createIncomeController);
router.post("/category", createCategoryController);
router.post("/payment-method", createPaymentMethodController);

router.get("/categories", getAllCategoriesController);
router.get("/paymentMethods", getAllPaymentMethodsController);
router.get("/guests/:guest_id/categories", getAllCategoriesByGuestIdController);
router.get(
  "/guests/:guest_id/payment-methods",
  getAllPaymentMethodsByGuestIdController,
);
router.get("/guests/:guest_id/expenses", getExpensesController);
router.get("/guests/:guest_id/incomes", getIncomesController);
router.get("/guests/:guest_id/expense/:expense_id", getExpenseByIdController);
router.get("/guests/:guest_id/income/:income_id", getIncomeByIdController);
router.get(
  "/guests/:guest_id/category-expense-chart",
  getCategoryExpenseChartByGuestIdController,
);

export default router;
