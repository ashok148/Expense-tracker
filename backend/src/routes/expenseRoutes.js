const express = require("express");
const { createExpense, getExpenseByUserId, updateExpense, deleteExpense } = require("../controllers/expenseController");
const authenticatedUser = require("../middleware/auth");
const router = express.Router();

router.post("/create", createExpense);
router.get("/user/:id", getExpenseByUserId);
router.put("/update/:id", updateExpense)
router.delete("/delete/:id", deleteExpense);

module.exports = router;