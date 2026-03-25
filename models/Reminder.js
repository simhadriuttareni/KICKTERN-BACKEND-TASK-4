const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  title: { type: String, required: true },
  description: { type: String },

  reminderTime: { type: Date, required: true },

  status: {
    type: String,
    enum: ["Pending", "Completed", "Missed"],
    default: "Pending"
  }

}, { timestamps: true });

module.exports = mongoose.model("Reminder", reminderSchema);