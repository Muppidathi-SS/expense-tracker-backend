import { Request, Response } from "express";
import {
  createCategory,
  getAllCategories,
  getAllCategoriesByGuestId,
} from "../services/categories.service";
import { handleError } from "../utils/error-handler";

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
    return handleError(error, res);
  }
};

export const getAllCategoriesController = async (
  req: Request,
  res: Response,
) => {
  try {
    const result = await getAllCategories();
    return res.status(201).json({
      success: true,
      message: "Categories fetched successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};

export const getAllCategoriesByGuestIdController = async (
  req: Request,
  res: Response,
) => {
  const { guest_id } = req.params as { guest_id: string };

  try {
    const result = await getAllCategoriesByGuestId(guest_id);
    return res.status(201).json({
      success: true,
      message: "Categories fetched successfully",
      data: result,
    });
  } catch (error) {
    return handleError(error, res);
  }
};
