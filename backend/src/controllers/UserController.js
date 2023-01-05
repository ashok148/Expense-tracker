const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require("../config/sendEmail");
const mongoose = require('mongoose');

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
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
  }
  if (!existingUser) {
    return res
      .status(404)
      .json({ "status":"fail", error: "Could not find any user for this account!" });
  }
  const isPasswordCorrect = await bcrypt.compareSync(
    password,
    existingUser.password
  );
  if (!isPasswordCorrect) {
    return res.status(404).json({ error: "Incorrect email or password!" });
  }

  const token = await existingUser.generateAuthToken();
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
     res
      .status(404)
      .json({ error: "Could not find any user for this account!" });
    } 
    const secret = existingUser._id + process.env.JWT_SECRET_KEY;
    const resetToken = jwt.sign({ userID: existingUser._id }, secret, {
      expiresIn: "2h",
    });
  const passwordResetLink = `http://localhost:3000/password/reset/${existingUser._id}/${resetToken}`;
    console.log(passwordResetLink);
    //send Email to user
    try{
        info = await transporter.sendMail({
          from: process.env.EMAIL_EROM,
          to: existingUser.email,
          subject: `ExpenseTracker - Password Reset Link`,
          html: `<p>We have received your request to reset the password </p> <p>Use the link below to update your password:</p> <a href='${passwordResetLink}'> <button style="background:blue; color: white; font-size: 16px;">Click Here!</button></a>. <p>This link will expire in 24 hours.</p>
          <p>Thank You</p>
          <p>Customer Support</p>`
        });
    } catch (error){
      console.log(error);
        return res.status(404).json({ error: "Fail to send email!" });
    }
   res
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
          .status(200)
          .json({ message: "Password reset successfully..." });
      }
    }
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ error: "Reset password token is invalid or has been expired!" });
  }
};

//Update profile 
exports.updateProfile = async (req, res, next) => {
  const { firstname, lastname, password, cpassword } = req.body;
  const { id } = req.params;
  const user = await User.findById(id);
  try {
    if (password && cpassword) {
      if (password !== cpassword) {
        return res
          .status(404)
          .json({
            error: "Old Password &  New Password does'nt matched!",
          });
      } else {
        const newPassword = await bcrypt.hashSync(password);
        const updatedData = await User.findByIdAndUpdate(user._id, {
            firstname,
            lastname,     
            password: newPassword,
        });
        return res
          .status(200)
          .json({ message: "Details updated successfully...", data: updatedData });
      }
    }
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ error: "Something went wrong please try again!" });
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
