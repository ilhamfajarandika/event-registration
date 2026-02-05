const Event = require("../models/Event");

// @desc    Get an event
// @route   GET /api/events/:id
// @access  Private/Admin
exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findOne();

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
