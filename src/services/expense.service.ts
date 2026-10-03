import pool from "../config/db";
import { CREATE_EXPENSE_QUERY } from "../queries/query";

interface Expense {
  guest_id: string;
  expense_name: string;
  expense_amount: number;
  expense_date: string;
  expense_time: string;
  category_id: number;
  expense_type: string;
  expense_payment_method: number;
  expense_notes?: string;
}

export const createExpense = async (expense: Expense) => {
  const {
    guest_id,
    expense_name,
    expense_amount,
    expense_date,
    expense_time,
    category_id,
    expense_type,
    expense_payment_method,
    expense_notes,
  } = expense;

  const result = await pool.query(CREATE_EXPENSE_QUERY, [
    guest_id,
    expense_name,
    expense_amount,
    expense_date,
    expense_time,
    category_id,
    expense_type,
    expense_payment_method,
    expense_notes ?? null,
  ]);

  return result.rows[0];
};
