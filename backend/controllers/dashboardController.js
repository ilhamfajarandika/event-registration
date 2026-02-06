const Registration = require("../models/Registration");

// @desc    Get User Dashboard Info
// @route   GET /api/dashboard
// @access  Private
exports.userDashboard = async (req, res) => {
  try {
    const registration = await Registration.findOne({
      user: req.user._id,
    })
      .populate("event", "title date location")
      .select("-__v");

    if (!registration) {
      return res.json({
        registered: false,
        message: "You have not registered yet",
      });
    }

    res.json({
      registered: true,
      event: registration.event,
      qrCode: registration.qrCode,
      checkedIn: registration.checkedIn,
      checkedInAt: registration.checkedInAt,
      registeredAt: registration.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get Admin Dashboard Info
// @route   GET /api/dashboard/admin
// @access  Private/Admin
exports.adminDashboard = async (req, res) => {
  try {
    const registrations = await Registration.find()
      .populate("user", "name email")
      .select("user checkedIn checkedInAt createdAt");

    res.json({
      totalParticipants: registrations.length,
      participants: registrations,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
