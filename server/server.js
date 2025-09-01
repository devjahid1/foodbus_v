const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');

\const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'foodbus'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
  res.send('Welcome to the Foodbus API');
});

app.post('/menu', (req, res) => {
  const { name, price, image } = req.body;
  const sql = 'INSERT INTO menu (name, price, image) VALUES (?, ?, ?)';
  db.query(sql, [name, price, image], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(201).json({ message: 'Menu item added', id: result.insertId });
  });
});

app.get('/menu', (req, res) => {
  db.query('SELECT * FROM menu', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get('/menu/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM menu WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Item not found' });
    res.json(results[0]);
  });
});

app.put('/menu/:id', (req, res) => {
  const { id } = req.params;
  const { name, price, image } = req.body;
  const sql = 'UPDATE menu SET name = ?, price = ?, image = ? WHERE id = ?';
  db.query(sql, [name, price, image, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Menu item updated' });
  });
});

app.delete('/menu/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM menu WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Menu item deleted' });
  });
});

app.post('/booking', (req, res) => {
  const { name, email, phone, date } = req.body;
  const sql = 'INSERT INTO booking (name, email, phone, date) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, phone, date], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.status(201).json({ message: 'Booking added', id: result.insertId });
  });
});

app.get('/booking', (req, res) => {
  db.query('SELECT * FROM booking', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

app.get('/booking/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM booking WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Booking not found' });
    res.json(results[0]);
  });
});

app.put('/booking/:id', (req, res) => {
  const { id } = req.params;
  const { name, email, phone, date } = req.body;
  const sql = 'UPDATE booking SET name = ?, email = ?, phone = ?, date = ? WHERE id = ?';
  db.query(sql, [name, email, phone, date, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Booking updated' });
  });
});

app.delete('/booking/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM booking WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Booking deleted' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
