export const CREATE_GUEST_QUERY = `
  INSERT INTO guest_users (name)
  VALUES ($1)
  RETURNING guest_id, name
`;

export const CREATE_CATEGORY_QUERY = `
 INSERT INTO guest_categories (guest_id, category_id)
 VALUES($1, $2)
 RETURNING *
`;

export const CREATE_PAYMENT_METHOD_QUERY = `
 INSERT INTO guest_payment_methods (guest_id, payment_method_id)
 VALUES ($1, $2)
 RETURNING *
`;

export const CREATE_EXPENSE_QUERY = `
 INSERT INTO expenses (guest_id, expense_name, expense_amount, expense_date, expense_time, category_id, payment_method_id, expense_notes)
 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
 RETURNING *
`;

export const CREATE_INCOME_QUERY = `
 INSERT INTO incomes (guest_id, income_name, income_amount, income_date, income_time, category_id, payment_method_id, income_notes)
 VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
 RETURNING *
`;

export const GET_ALL_CATEGORIES = `
 SELECT * FROM categories;
`;

export const GET_ALL_PAYMENT_METHODS = `
 SELECT * FROM payment_methods;
`;