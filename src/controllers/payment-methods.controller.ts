import { Request, Response } from "express";
import { createPayementMethod } from "../services/payment-methods.service";

export const createPaymentMethodController = async (
  req: Request,
  res: Response,
) => {
  const { guest_id, payment_name } = req.body;
  try {
    const result = await createPayementMethod({ guest_id, payment_name });
    return res.status(201).json({
      success: true,
      message: "Payement Method created successfully",
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
