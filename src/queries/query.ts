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

export const GET_CATEGORIES_BY_GUEST_ID_QUERY = `
SELECT
  c.category_id,
  c.category_name,
  c.category_description
FROM guest_categories gc
INNER JOIN categories c
  ON gc.category_id = c.category_id
WHERE gc.guest_id = $1;
`;

export const GET_PAYMENT_METHODS_BY_GUEST_ID_QUERY = `
SELECT
  p.payment_method_id,
  p.payment_method_name
FROM payment_methods p
INNER JOIN guest_payment_methods gp
  ON p.payment_method_id = gp.payment_method_id
WHERE gp.guest_id = $1
`;

export const GET_EXPENSES = `
SELECT
    e.*,
    c.category_name,
    pm.payment_method_name
FROM expenses e
LEFT JOIN categories c
    ON e.category_id = c.category_id
LEFT JOIN payment_methods pm
    ON e.payment_method_id = pm.payment_method_id
WHERE e.guest_id = $1;
`;

export const GET_INCOMES = `
SELECT
    i.*,
    c.category_name,
    pm.payment_method_name
FROM incomes i
LEFT JOIN categories c
    ON i.category_id = c.category_id
LEFT JOIN payment_methods pm
    ON i.payment_method_id = pm.payment_method_id
WHERE i.guest_id = $1;
`;

export const GET_EXPENSE_BY_ID = `
SELECT *
FROM expenses
WHERE guest_id = $1
  AND expense_id = $2
`;

export const GET_INCOME_BY_ID = `
SELECT *
FROM incomes
WHERE guest_id = $1
  AND income_id = $2
`;

export const GET_CATEGORY_EXPENSE_CHART_QUERY = `
SELECT
  e.category_id,
  c.category_name,
  SUM(e.expense_amount) AS total,
  ROUND(
    SUM(e.expense_amount) * 100.0 /
    SUM(SUM(e.expense_amount)) OVER (),
    0
  ) AS percentage
FROM expenses e
JOIN categories c
  ON e.category_id = c.category_id
WHERE e.guest_id = $1
GROUP BY
  e.category_id,
  c.category_name
`;

export const GET_TOTAL_EXPENSES_BY_GUEST_ID_QUERY = `
  SELECT SUM(expense_amount) AS total_expenses
  FROM expenses
  WHERE guest_id = $1;
`;

export const GET_TOTAL_INCOMES_BY_GUEST_ID_QUERY = `
  SELECT SUM(income_amount) AS total_incomes
  FROM incomes
  WHERE guest_id = $1;
`;