/**
 * @swagger
 * /api/category:
 *   post:
 *     summary: Create a category
 *     tags:
 *       - Categories
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             category_name: Food
 *     responses:
 *       201:
 *         description: Category created successfully
 */

/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     tags:
 *       - Categories
 *     responses:
 *       200:
 *         description: Categories fetched successfully
 */

/**
 * @swagger
 * /api/guests/{guest_id}/categories:
 *   get:
 *     summary: Get categories by guest ID
 *     tags:
 *       - Categories
 *     parameters:
 *       - in: path
 *         name: guest_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Categories fetched successfully
 */

export {};
