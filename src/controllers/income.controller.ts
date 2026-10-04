import { Request, Response } from "express";
import {
  createIncome,
  getIncomes,
  getIncomesById,
} from "../services/income.service";
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

export const getIncomesController = async (req: Request, res: Response) => {
  const { guest_id } = req.params as { guest_id: string };
  try {
    const result = await getIncomes(guest_id);
    return res.status(200).json({
      success: true,
      message: "Incomes fetched successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};

export const getIncomeByIdController = async (req: Request, res: Response) => {
  const { guest_id, income_id } = req.params as {
    guest_id: string;
    income_id: string;
  };
  try {
    const result = await getIncomesById(guest_id, income_id);
    return res.status(200).json({
      success: true,
      message: "Income fetched successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};
