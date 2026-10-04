import pool from "../config/db";
import { CREATE_PAYMENT_METHOD_QUERY, GET_ALL_PAYMENT_METHODS } from "../queries/query";
import { PaymentMethod } from "../types/payment-methods.types";

export const createPayementMethod = async (payment_method: PaymentMethod) => {
  const { guest_id, payment_method_id } = payment_method;
  const result = await pool.query(CREATE_PAYMENT_METHOD_QUERY, [
    guest_id,
    payment_method_id,
  ]);
  return result.rows[0]
};

export const getAllPaymentMethods = async () => {
  const result = await pool.query(GET_ALL_PAYMENT_METHODS);
  return result.rows;
};