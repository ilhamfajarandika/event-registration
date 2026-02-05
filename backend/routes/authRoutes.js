const express = require("express");
const {
  register,
  login,
  logout,
  getMe,
  updateMe,
} = require("../controllers/authController");
const { protect, adminOnly } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", adminOnly, login);
router.post("/logout", logout);

router.get("/me", protect, getMe);
router.put("/me", protect, updateMe);

module.exports = router;
