import { CREATE_INCOME_QUERY } from "../queries/query";
import pool from "../config/db";
import { Income } from "../types/income.types";

export const createIncome = async (income: Income) => {
  const {
    guest_id,
    income_name,
    income_amount,
    income_date,
    income_time,
    category_id,
    payment_method_id,
    income_notes,
  } = income;
  const result = await pool.query(CREATE_INCOME_QUERY, [
    guest_id,
    income_name,
    income_amount,
    income_date,
    income_time,
    category_id,
    payment_method_id,
    income_notes ?? null,
  ]);

  return result.rows[0];
};
