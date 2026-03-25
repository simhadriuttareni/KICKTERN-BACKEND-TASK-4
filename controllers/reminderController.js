const Reminder = require("../models/Reminder");

// CREATE
exports.createReminder = async (req, res) => {
  try {
    const { title, description, reminderTime } = req.body;

    if (!title || !reminderTime)
      return res.status(400).json({ msg: "Required fields missing" });

    const reminder = await Reminder.create({
      user: req.user,
      title,
      description,
      reminderTime
    });

    res.status(201).json(reminder);

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// GET ALL
exports.getReminders = async (req, res) => {
  const reminders = await Reminder.find({ user: req.user });
  res.json(reminders);
};

// GET ONE
exports.getReminderById = async (req, res) => {
  const reminder = await Reminder.findById(req.params.id);

  if (!reminder)
    return res.status(404).json({ msg: "Not found" });

  res.json(reminder);
};

// UPDATE
exports.updateReminder = async (req, res) => {
  const reminder = await Reminder.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(reminder);
};

// DELETE
exports.deleteReminder = async (req, res) => {
  await Reminder.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};

// MARK COMPLETE
exports.markComplete = async (req, res) => {
  const reminder = await Reminder.findByIdAndUpdate(
    req.params.id,
    { status: "Completed" },
    { new: true }
  );

  res.json(reminder);
};