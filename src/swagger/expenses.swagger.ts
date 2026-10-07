/**
 * @swagger
 * /api/guests/{guest_id}/expense/{expense_id}:
 *   get:
 *     summary: Get expense by ID
 *     tags:
 *       - Expenses
 *     parameters:
 *       - in: path
 *         name: guest_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *       - in: path
 *         name: expense_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Expense fetched successfully
 */

/**
 * @swagger
 * /api/guests/{guest_id}/expenses:
 *   get:
 *     summary: Get all expenses for a guest
 *     tags:
 *       - Expenses
 *     parameters:
 *       - in: path
 *         name: guest_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Expenses fetched successfully
 */

/**
 * @swagger
 * /api/expense:
 *   post:
 *     summary: Create an expense
 *     tags:
 *       - Expenses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - guest_id
 *               - expense_name
 *               - expense_amount
 *               - expense_date
 *               - expense_time
 *               - category_id
 *               - payment_method_id
 *           example:
 *             guest_id: 65ddc0b3-0f72-4825-bab6-71f51eabfd35
 *             expense_name: Lunch
 *             expense_amount: 250
 *             expense_date: "2026-10-07"
 *             expense_time: "13:00:00"
 *             category_id: 1
 *             payment_method_id: 1
 *             expense_notes: Lunch at restaurant
 *     responses:
 *       201:
 *         description: Expense created successfully
 */

export {};