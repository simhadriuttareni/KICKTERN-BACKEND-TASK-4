const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const {
  createReminder,
  getReminders,
  getReminderById,
  updateReminder,
  deleteReminder,
  markComplete
} = require("../controllers/reminderController");

router.post("/", auth, createReminder);
router.get("/", auth, getReminders);
router.get("/:id", auth, getReminderById);
router.put("/:id", auth, updateReminder);
router.delete("/:id", auth, deleteReminder);
router.put("/complete/:id", auth, markComplete);

module.exports = router;