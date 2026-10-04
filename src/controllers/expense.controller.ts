import { Request, Response } from "express";
import { createExpense } from "../services/expense.service";
import { handleError } from "../utils/error-handler";

export const createExpenseController = async (req: Request, res: Response) => {
  try {
    const {
      guest_id,
      expense_name,
      expense_amount,
      expense_date,
      expense_time,
      category_id,
      payment_method_id,
      expense_notes,
    } = req.body;

    const result = await createExpense({
      guest_id,
      expense_name,
      expense_amount,
      expense_date,
      expense_time,
      category_id,
      payment_method_id,
      expense_notes,
    });
    return res.status(201).json({
      success: true,
      message: "Expense created successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};
