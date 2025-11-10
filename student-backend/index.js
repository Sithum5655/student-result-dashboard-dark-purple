const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection to WampServer MySQL
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',      // default for Wamp
  password: '',      // leave empty for Wamp
  database: 'student_db'
});

// Test connection
db.query('SELECT * FROM students', (err, results) => {
  if (err) console.log('❌ Database connection error:', err);
  else console.log('✅ Connected to database. Students:', results);
});

// Get all students
app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Get all results
app.get('/results', (req, res) => {
  db.query('SELECT * FROM results', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Start server
app.listen(5000, () => console.log('🚀 Backend running at http://localhost:5000'));
