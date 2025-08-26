const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get("/", (req, res) => {
  db.query("SELECT NOW() AS time", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("DB error");
    }
    res.send("Hello Machaa 🚀 | MySQL Time: " + results[0].time);
  });
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
