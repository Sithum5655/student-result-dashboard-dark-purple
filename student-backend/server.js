import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "student_db",
});

// ✅ Check DB connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database ✅");
  }
});

// ✅ API Routes
app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.get("/results", (req, res) => {
  db.query("SELECT * FROM results", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// --- USER LOGIN ---
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: 'Username and password required' });

  db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'DB error' });
      if (results.length === 0)
        return res.status(401).json({ error: 'Invalid credentials' });

      // Successful login
      res.json({ message: 'Login successful', user: results[0] });
    }
  );
});


// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
