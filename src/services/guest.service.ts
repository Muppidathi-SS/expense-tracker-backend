import pool from "../config/db";
import { CREATE_GUEST_QUERY } from "../queries/query";

export const createGuest = async (name: string) => {
  const result = await pool.query(CREATE_GUEST_QUERY, [name]);
  return result.rows[0];
};
