import { Request, Response } from "express";
import {
  createPayementMethod,
  getAllPaymentMethods,
} from "../services/payment-methods.service";

export const createPaymentMethodController = async (
  req: Request,
  res: Response,
) => {
  const { guest_id, payment_method_id } = req.body;
  try {
    const result = await createPayementMethod({ guest_id, payment_method_id });
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

export const getAllPaymentMethodsController = async (
  req: Request,
  res: Response,
) => {
  try {
    const result = await getAllPaymentMethods();
    return res.status(201).json({
      success: true,
      message: "Payement Method fetched successfully",
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
