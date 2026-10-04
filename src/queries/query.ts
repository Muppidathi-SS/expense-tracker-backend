export const CREATE_GUEST_QUERY = `
  INSERT INTO guest_users (name)
  VALUES ($1)
  RETURNING guest_id, name
`;

export const CREATE_EXPENSE_QUERY = `
 INSERT INTO expenses (guest_id, expense_name, expense_amount, expense_date, expense_time, category_id, expense_type, expense_payment_method, expense_notes)
 VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
 RETURNING guest_id, expense_name, expense_amount, expense_date, expense_time, category_id, expense_type, expense_payment_method, expense_notes
`;

export const CREATE_CATEGORY = `
 INSERT INTO categories (guest_id, category_name, category_description)
 VALUES($1, $2, $3)
 RETURNING *
`;