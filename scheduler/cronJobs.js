const cron = require("node-cron");
const Reminder = require("../models/Reminder");
const Notification = require("../models/Notification");

const startScheduler = () => {
  cron.schedule("* * * * *", async () => {
    console.log("Running scheduler...");

    const now = new Date();

    const reminders = await Reminder.find({
      reminderTime: { $lte: now },
      status: "Pending"
    });

    for (let reminder of reminders) {

      console.log(`Reminder Alert: ${reminder.title}`);

      await Notification.create({
        user: reminder.user,
        reminder: reminder._id,
        message: `Reminder Alert: ${reminder.title}`
      });

      reminder.status = "Missed";
      await reminder.save();
    }
  });
};

module.exports = startScheduler;