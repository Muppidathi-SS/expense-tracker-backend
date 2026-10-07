/**
 * @swagger
 * /api/guests:
 *   post:
 *     summary: Create a guest
 *     tags:
 *       - Guests
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Muppidathi
 *     responses:
 *       201:
 *         description: Guest created successfully
 */
export {};
