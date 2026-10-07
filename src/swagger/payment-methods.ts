/**
 * @swagger
 * /api/payment-method:
 *   post:
 *     summary: Create a payment method
 *     tags:
 *       - Payment Methods
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             payment_method_name: Cash
 *     responses:
 *       201:
 *         description: Payment method created successfully
 */

/**
 * @swagger
 * /api/guests/{guest_id}/payment-methods:
 *   get:
 *     summary: Get payment methods by guest ID
 *     tags:
 *       - Payment Methods
 *     parameters:
 *       - in: path
 *         name: guest_id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: Payment methods fetched successfully
 */

/**
 * @swagger
 * /api/paymentMethods:
 *   get:
 *     summary: Get all payment methods
 *     tags:
 *       - Payment Methods
 *     responses:
 *       200:
 *         description: Payment methods fetched successfully
 */

export {};
