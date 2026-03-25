const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  reminder: { type: mongoose.Schema.Types.ObjectId, ref: "Reminder" },

  message: String,
  sentAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model("Notification", notificationSchema);