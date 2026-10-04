import pool from "../config/db";
import {
  CREATE_CATEGORY_QUERY,
  GET_ALL_CATEGORIES,
  GET_CATEGORIES_BY_GUEST_ID_QUERY,
} from "../queries/query";
import { Category } from "../types/categories.types";

export const createCategory = async (category: Category) => {
  const { guest_id, category_id } = category;
  const result = await pool.query(CREATE_CATEGORY_QUERY, [
    guest_id,
    category_id,
  ]);
  return result.rows[0];
};

export const getAllCategories = async () => {
  const result = await pool.query(GET_ALL_CATEGORIES);
  return result.rows;
};

export const getAllCategoriesByGuestId = async (guest_id: string) => {
  const result = await pool.query(GET_CATEGORIES_BY_GUEST_ID_QUERY, [guest_id]);
  return result.rows;
};
