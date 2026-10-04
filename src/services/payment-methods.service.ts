import pool from "../config/db";
import { CREATE_PAYMENT_METHOD_QUERY } from "../queries/query";
import { PaymentMethod } from "../types/payment-methods.types";

export const createPayementMethod = async (payment_method: PaymentMethod) => {
  const { guest_id, payment_name } = payment_method;
  const result = await pool.query(CREATE_PAYMENT_METHOD_QUERY, [
    guest_id,
    payment_name,
  ]);
  return result.rows[0]
};