import pool from "../config/db";

export const getTestRecords = async () => {
  const result = await pool.query(
    "SELECT * FROM testing ORDER BY id"
  );

  return result.rows;
};