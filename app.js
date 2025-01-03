const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const PDFDocument = require('pdfkit');
const Timetable = require('./models/timetable');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/timetableDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const timetable = await Timetable.find({});
  res.render('index', { timetable });
});

app.post('/save', async (req, res) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  for (let day of days) {
    const activity = req.body[`${day}_activity`];
    const time = req.body[`${day}_time`];
    if (activity && time) {
      const timetable = await Timetable.findOne({ day });
      if (timetable) {
        // Add new task to existing timetable
        timetable.tasks.push({ time, activity });
        await timetable.save();
      } else {
        // Create new timetable for the day
        const newTimetable = new Timetable({ day, tasks: [{ time, activity }] });
        await newTimetable.save();
      }
    }
  }
  
  res.redirect('/');
});

app.get('/download', async (req, res) => {
  const timetable = await Timetable.find({});

  const doc = new PDFDocument();
  let buffers = [];
  
  doc.on('data', buffers.push.bind(buffers));
  doc.on('end', () => {
    let pdfData = Buffer.concat(buffers);
    res.setHeader('Content-Disposition', 'attachment; filename=timetable.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdfData);
  });

  doc.fontSize(20).text('Weekly Timetable', { align: 'center' });
  timetable.forEach((day) => {
    doc.moveDown().fontSize(15).text(`${day.day}:`);
    day.tasks.forEach((task) => {
      doc.fontSize(12).text(`- ${task.time}: ${task.activity}`);
    });
  });
  
  doc.end();
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
