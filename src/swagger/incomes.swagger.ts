/**
 * @swagger
 * /api/income:
 *   post:
 *     summary: Create an income
 *     tags:
 *       - Incomes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             guest_id: 65ddc0b3-0f72-4825-bab6-71f51eabfd35
 *             income_name: Monthly Salary
 *             income_amount: 50000
 *             income_date: "2026-10-07"
 *             income_time: "10:00:00"
 *             category_id: 1
 *             payment_method_id: 1
 *             income_notes: October salary
 *     responses:
 *       201:
 *         description: Income created successfully
 */

/**
 * @swagger
 * /api/guests/{guest_id}/incomes:
 *   get:
 *     summary: Get all incomes for a guest
 *     tags:
 *       - Incomes
 *     parameters:
 *       - in: path
 *         name: guest_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Incomes fetched successfully
 */

/**
 * @swagger
 * /api/guests/{guest_id}/income/{income_id}:
 *   get:
 *     summary: Get income by ID
 *     tags:
 *       - Incomes
 *     parameters:
 *       - in: path
 *         name: guest_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *       - in: path
 *         name: income_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Income fetched successfully
 */

export {};
