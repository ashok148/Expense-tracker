const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require("../config/sendEmail");

//Register New User
exports.registerUser = async (req, res, next) => {
  const { firstname, lastname, email, password, cpassword } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (existingUser) {
    return res.status(404).json({ error: "User already exists! Please login" });
  }
  if (password !== cpassword) {
    return res.status(404).json({ error: "Password does'nt match!" });
  }

  const user = new User({
    firstname,
    lastname,
    email,
    password,
    cpassword,
  });
  const token = await user.generateAuthToken();
  res.cookie("jwtoken", token, {
    expires: new Date(Date.now() + 25892000000),
    httpOnly: true,
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err, "Fail to register.");
  }
  return res.status(201).json({ user, message: "User create successfully..." });
};

//Login user
exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  let existingUser;
  let token;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ err: "Could not find any user for this account!" });
  }
  const isPasswordCorrect = await bcrypt.compareSync(
    password,
    existingUser.password
  );
  if (!isPasswordCorrect) {
    return res.status(404).json({ error: "Incorrect email or password!" });
  }
  token = await existingUser.generateAuthToken();
  res.cookie("jwtoken", token, {
    expires: new Date(Date.now() + 25892000000),
    httpOnly: true,
  });
  return res
    .status(200)
    .json({ user: existingUser, message: "Login Successfull..." });
};

//Forgot password
exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  let existingUser;
  let info;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ error: "Could not find any user for this account!" });
    } 
    const secret = existingUser._id + process.env.JWT_SECRET_KEY;
    const resetToken = jwt.sign({ userID: existingUser._id }, secret, {
      expiresIn: "15m",
    });
    const passwordResetLink = `http:localhost:300/password/reset/${existingUser._id}/${resetToken}`;
    console.log(passwordResetLink);
    //send Email to user
    try{
        info = await transporter.sendMail({
          from: process.env.EMAIL_EROM,
          to: existingUser.email,
          subject: `ExpenseTracker - Password Reset Link`,
          html: `<a href=${passwordResetLink}>Click Here</a> to Reset Your Password.`
        });
    } catch (error){
      console.log(error);
        return res.status(404).json({ error: "Fail to send email!" });
    }
  return res
    .status(200)
    .json({
      status: "success",
      message: `Email sent to ${existingUser.email} successfully...please check your email.`,
      info,
    });
};

//Reset Password
exports.resetPassword = async (req, res, next) => {
  const { password, cpassword } = req.body;
  const { id, token } = req.params;
  const user = await User.findById(id);
  const new_secret = user._id + process.env.JWT_SECRET_KEY;
  try {
    jwt.verify(token, new_secret);
    if (password && cpassword) {
      if (password !== cpassword) {
        return res
          .status(404)
          .json({
            error: "New Password & Confirm New Password does'nt matched!",
          });
      } else {
        const newPassword = await bcrypt.hashSync(password);
        await User.findByIdAndUpdate(user._id, {
          $set: {
            password: newPassword,
          },
        });
        return res
          .status(404)
          .json({ error: "Password reset successfully..." });
      }
    }
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ error: "Reset password token is invalid or has been expired!" });
  }
};

//Logout user
exports.logoutUser = async (req, res, next) => {
  res.cookie('token', '', {
    expires: new Date(Date.now() + 1000),
    httpOnly: true,
  })
  return res.status(200).json({ status: "success", message: "Logged Out..." });
};
