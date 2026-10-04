import { Request, Response } from "express";
import {
  createPayementMethod,
  getAllPaymentMethods,
} from "../services/payment-methods.service";
import { handleError } from "../utils/error-handler";

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
    return handleError(error, res);
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
    return handleError(error, res);
  }
};
