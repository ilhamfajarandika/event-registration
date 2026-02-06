const express = require("express");
const {
  userDashboard,
  adminDashboard,
} = require("../controllers/dashboardController");
const { protect, adminOnly } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/user", protect, userDashboard);
router.get("/admin", protect, adminOnly, adminDashboard);

module.exports = router;
