import { Request, Response } from "express";
import { createCategory } from "../services/categories.service";

export const createCategoryController = async (req: Request, res: Response) => {
  const { guest_id, category_id } = req.body;
  try {
    const result = await createCategory({
      guest_id,
      category_id,
    });
    return res.status(201).json({
      success: true,
      message: "Category created successfully",
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
