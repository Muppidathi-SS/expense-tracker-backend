import pool from "../config/db";
import { CREATE_CATEGORY } from "../queries/query";

type Category = {
  guest_id: string;
  category_name: string;
  category_description: string;
};

export const createCategory = async (category: Category) => {
  const { guest_id, category_name, category_description } = category;
  const result = await pool.query(CREATE_CATEGORY, [
    guest_id,
    category_name,
    category_description,
  ]);
  return result.rows[0];
};
