import pool from "../config/db";
import {
  GET_TOTAL_EXPENSES_BY_GUEST_ID_QUERY,
  GET_TOTAL_INCOMES_BY_GUEST_ID_QUERY,
} from "../queries/query";

export const getTotalExpensesByGuestId = async (guest_id: string) => {
  const result = await pool.query(GET_TOTAL_EXPENSES_BY_GUEST_ID_QUERY, [
    guest_id,
  ]);
  return result.rows;
};

export const getTotalIncomesByGuestId = async (guest_id: string) => {
  const result = await pool.query(GET_TOTAL_INCOMES_BY_GUEST_ID_QUERY, [
    guest_id,
  ]);
  return result.rows;
};
