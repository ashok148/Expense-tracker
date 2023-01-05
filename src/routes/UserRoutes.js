const express = require("express");
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, updateProfile } = require("../controllers/UserController");
const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.post("/password/forgot", forgotPassword);
router.post("/password/reset/:id/:token", resetPassword);
router.put("/profile/update/:id", updateProfile);

module.exports = router;