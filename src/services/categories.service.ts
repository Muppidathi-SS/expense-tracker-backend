import pool from "../config/db";
import { CREATE_CATEGORY_QUERY } from "../queries/query";
import { Category } from "../types/categories.types";

export const createCategory = async (category: Category) => {
  const { guest_id, category_id } = category;
  const result = await pool.query(CREATE_CATEGORY_QUERY, [
    guest_id,
    category_id,
  ]);
  return result.rows[0];
};