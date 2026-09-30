import pool from "../config/db";

export const createGuest = async (name: string) => {
  const result = await pool.query(
    `INSERT INTO guest_users (name)
     VALUES ($1)
     RETURNING guest_id, name`,
    [name],
  );

  return result.rows[0];
};
