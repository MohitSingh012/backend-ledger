const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const transactionController = require("../controllers/transaction.controller");

const transactionRoutes = Router();

/*
 *- POST /api/transactions
 *- create a new transaction
 */

transactionRoutes.post(
  "/",
  authMiddleware.authMiddleware,
  transactionController.createTransaction,
);

/**
 * - POST /api/transactions/system/intial-funds
 * - Create initial funds transaction from system user
 */

transactionRoutes.post(
  "/system/initial-funds",
  authMiddleware.authMiddleware,
  authMiddleware.authSystemUserMiddleware,
  transactionController.createIntialFundsTransaction,
);
module.exports = transactionRoutes;
