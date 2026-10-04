import { Request, Response } from "express";
import { createGuest } from "../services/guest.service";
import { handleError } from "../utils/error-handler";

export const createGuestController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }
    const guest = await createGuest(name.trim());
    return res.status(201).json({
      success: true,
      message: "Guest created successfully",
      data: guest,
    });
  } catch (error) {
    return handleError(error, res);
  }
};
