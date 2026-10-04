import { Request, Response } from "express";
import { createExpense } from "../services/expense.service";

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
      message: "Guest created successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
