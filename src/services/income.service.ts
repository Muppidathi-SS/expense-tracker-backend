import { CREATE_INCOME_QUERY } from "../queries/query";
import pool from "../config/db";

interface Income {
  guest_id: string;
  income_name: string;
  income_amount: number;
  income_date: string;
  income_time: string;
  category_id: number;
  payment_method_id: number;
  income_notes?: string;
}

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
