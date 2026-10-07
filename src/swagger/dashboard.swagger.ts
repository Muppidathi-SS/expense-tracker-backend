/**
 * @swagger
 * /api/guests/{guest_id}/category-expense-chart:
 *   get:
 *     summary: Get category expense chart data
 *     tags:
 *       - Dashboard
 *     parameters:
 *       - in: path
 *         name: guest_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Category expense chart fetched successfully
 */

/**
 * @swagger
 * /api/guests/{guest_id}/total-expenses:
 *   get:
 *     summary: Get total expenses by guest ID
 *     tags:
 *       - Dashboard
 *     parameters:
 *       - in: path
 *         name: guest_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Total expenses fetched successfully
 */

/**
 * @swagger
 * /api/guests/{guest_id}/total-incomes:
 *   get:
 *     summary: Get total incomes by guest ID
 *     tags:
 *       - Dashboard
 *     parameters:
 *       - in: path
 *         name: guest_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Total incomes fetched successfully
 */

export {};
