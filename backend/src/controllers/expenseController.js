const Expense = require("../models/ExpenseModel");
const User = require("../models/UserModel");

//Add expense
exports.createExpense = async (req, res, next) => {
    const { title, category, amount, createdAt, userId } = req.body;
    let existingUser;
    try {
      existingUser = await User.findById(userId);
    } catch (err) {
      return console.log(err);
    }
    if (!existingUser) {
      return res.status(400).json({ message: "Unable to find User By this Id!" });
    }
    const expense = new Expense({
        title,
        category,
        amount,
        createdAt,
        userId
    });
    try{
      await expense.save();
      existingUser.expenses.push(expense);
      await existingUser.save();
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: err });
    }
    return res.status(200).json({message:"expense added..", expense});
};
  

//get all expenses of a user by userId
exports.getExpenseByUserId = async (req, res, next) => {
    const user_id = req.params.id;
    let userExpenses;
    try {
        userExpenses = await User.findById(user_id).populate("expenses");
    } catch (err) {
        console.log(err);
    }
    if (!userExpenses) {
        return res.status(404).json({ message: "No expense added yet!" });
    }
    const user = {
        userId: userExpenses._id,
        name: {
            firstname: userExpenses.firstname, lastname: userExpenses.lastname
        },
        email: userExpenses.email,
        expenses: userExpenses.expenses
    }
    return res.status(200).json({ status: "success", user: user });
};

// update expense detail
exports.updateExpense = async (req, res, next) => {
    const { title, category, amount, createdAt } = req.body;
    const expenseId = req.params.id;
    let expense;
    try {
        expense = await Expense.findByIdAndUpdate(expenseId, {
            title,
            category,
            amount,
            createdAt
        });
    } catch(err) {
        console.log(err);
    }
    if(!expense){
        
    return res.status(500).json({message:"Unable to update details!" });
    }
    return res.status(200).json({status: "success", message:"details update successfully.", expense });
};

//deleteExpense
exports.deleteExpense = async (req, res, next) => {
    const expense_id = req.params.id;
    let expense;
    try {
        expense = await Expense.findByIdAndRemove(expense_id).populate("userId");
        await expense.userId.expenses.pull(expense);
        await expense.userId.save();
    } catch (err) {
        console.log(err);
    }
    if (!expense) {
        return res.status(500).json({ message: "Unable To Delete" });
    }
    return res.status(200).json({ message: "Item deleted successfully.." });
};

