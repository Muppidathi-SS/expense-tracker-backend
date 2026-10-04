import { Response } from "express";

export const handleError = (error: any, res: Response) => {
  console.error(error);

  if (error.code === "23505") {
    return res.status(409).json({
      success: false,
      message: "Record already exists.",
    });
  }

  if (error.code === "23503") {
    if (error.constraint === "incomes_category_id_fkey") {
      return res.status(400).json({
        success: false,
        message: "Category does not exist.",
      });
    }

    if (error.constraint === "incomes_payment_method_id_fkey") {
      return res.status(400).json({
        success: false,
        message: "Payment method does not exist.",
      });
    }

    return res.status(400).json({
      success: false,
      message: "Referenced record does not exist.",
    });
  }

  if (error.code === "23502") {
    return res.status(400).json({
      success: false,
      message: "Required field is missing.",
    });
  }

  if (error.code === "22007") {
    return res.status(400).json({
      success: false,
      message: "Invalid date or time format.",
    });
  }

  if (error.code === "22P02") {
    return res.status(400).json({
      success: false,
      message: "Invalid input format.",
    });
  }

  if (error.code === "22003") {
    return res.status(400).json({
      success: false,
      message: "Numeric value is out of range.",
    });
  }

  if (error.code === "23514") {
    return res.status(400).json({
      success: false,
      message: "Invalid value.",
    });
  }

  return res.status(500).json({
    success: false,
    message: "Internal server error.",
  });
};
