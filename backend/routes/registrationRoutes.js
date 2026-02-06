const express = require("express");
const {
  registerEvent,
  getUserRegistrations,
  getRegistrationDetail,
  checkInRegistration,
} = require("../controllers/registrationController");

const { protect, adminOnly } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, registerEvent);
router.get("/myregistrations", protect, getUserRegistrations);
router.get("/:id", protect, getRegistrationDetail);

// admin route
router.post("/:id/checkin", protect, adminOnly, checkInRegistration);

module.exports = router;
