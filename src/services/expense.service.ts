import pool from "../config/db";
import { CREATE_EXPENSE_QUERY, GET_EXPENSES } from "../queries/query";
import { Expense } from "../types/expense.types";

export const createExpense = async (expense: Expense) => {
  const {
    guest_id,
    expense_name,
    expense_amount,
    expense_date,
    expense_time,
    category_id,
    payment_method_id,
    expense_notes,
  } = expense;

  const result = await pool.query(CREATE_EXPENSE_QUERY, [
    guest_id,
    expense_name,
    expense_amount,
    expense_date,
    expense_time,
    category_id,
    payment_method_id,
    expense_notes ?? null,
  ]);

  return result.rows[0];
};

export const getExpenses = async (guest_id: string) => {
  const result = await pool.query(GET_EXPENSES, [guest_id]);
  return result.rows;
};
