const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  time: String,
  activity: String,
});

const timetableSchema = new mongoose.Schema({
  day: String,
  tasks: [taskSchema],
});

module.exports = mongoose.model('Timetable', timetableSchema);
