const Registration = require("../models/Registration");
const Event = require("../models/Event");
const QRCode = require("qrcode");

// @desc    User Registration for an Event
// @route   POST /api/events
// @access  Private
exports.registerEvent = async (req, res) => {
  try {
    // Check if event exists
    const event = await Event.findOne();

    if (!event) {
      return res.status(404).json({ message: "No event found" });
    }

    // Check if user is already registered
    const existingRegristration = await Registration.findOne({
      user: req.user._id,
      event: event._id,
    });

    if (existingRegristration) {
      return res
        .status(400)
        .json({ message: "User already registered for this event" });
    }

    // Create new registration
    const registration = new Registration({
      user: req.user._id,
      event: event._id,
      qrCode: "TEMP_QR_CODE",
    });

    await registration.save();

    // Payload for QR Code
    const qrPayload = {
      registrationId: new Date().getTime(),
      userId: req.user._id,
      eventId: event._id,
    };

    const qrCode = await QRCode.toDataURL(JSON.stringify(qrPayload));

    registration.qrCode = qrCode;

    // Update registration with QR code
    await registration.save();

    res.status(201).json({
      message: "Registration successful",
      registrationId: registration._id,
      qrCode: registration.qrCode,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get User Registrations
// @route   GET /api/registrations
// @access  Private
exports.getUserRegistrations = async (req, res) => {
  try {
    const registration = await Registration.findOne({
      user: req.user._id,
    })
      .populate("event", "title date location")
      .populate("user", "name email");

    if (!registration) {
      return res.status(404).json({ message: "No registrations found" });
    }

    res.json(registration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get Registrations Detail
// @route   GET /api/registrations/:id
// @access  Private
exports.getRegistrationDetail = async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id)
      .populate("event", "title date location")
      .populate("user", "name email");

    if (!registration) {
      return res.status(404).json({ message: "No registrations found" });
    }

    // Users can only access their own registration details
    if (
      registration.user._id.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Access prohibited" });
    }

    res.json(registration);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// @desc    Admin do check-in for a registration
// @route   POST /api/registrations/:id/checkin
// @access  Private/Admin
exports.checkInRegistration = async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);

    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }

    if (registration.checkedIn) {
      return res.status(400).json({ message: "Already checked in" });
    }

    registration.checkedIn = true;
    registration.checkedInAt = new Date();
    await registration.save();

    return res.json({ message: "Check-in successful" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
