import { Request, Response } from "express";
import { getTotalExpensesByGuestId, getTotalIncomesByGuestId } from "../services/dashboard.service";
import { handleError } from "../utils/error-handler";

export const getTotalExpensesByGuestIdController = async (
  req: Request,
  res: Response,
) => {
  const { guest_id } = req.params as { guest_id: string };
  try {
    const result = await getTotalExpensesByGuestId(guest_id);
    return res.status(201).json({
      success: true,
      message: "Total Expenses fetched successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};

export const getTotalIncomesByGuestIdController = async (
  req: Request,
  res: Response,
) => {
  const { guest_id } = req.params as { guest_id: string };
  try {
    const result = await getTotalIncomesByGuestId(guest_id);
    return res.status(201).json({
      success: true,
      message: "Total Incomes fetched successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};
