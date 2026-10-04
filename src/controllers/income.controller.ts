import { Request, Response } from "express";
import { createIncome } from "../services/income.service";
import { handleError } from "../utils/error-handler";

export const createIncomeController = async (req: Request, res: Response) => {
  try {
    const {
      guest_id,
      income_name,
      income_amount,
      income_date,
      income_time,
      category_id,
      payment_method_id,
      income_notes,
    } = req.body;

    const result = await createIncome({
      guest_id,
      income_name,
      income_amount,
      income_date,
      income_time,
      category_id,
      payment_method_id,
      income_notes,
    });
    return res.status(201).json({
      success: true,
      message: "Income created successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};
