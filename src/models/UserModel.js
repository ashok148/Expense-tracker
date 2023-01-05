const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    require: true,
  },
  expenses:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Expense",
    required: true
   }],
});

//password hashing
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, 12);
    this.cpassword = bcrypt.hashSync(this.password, 12);
  }
  next();
});

//generating JWT auth token

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY);
    this.tokens = this.tokens?.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};
module.exports = mongoose.model("User", userSchema);
