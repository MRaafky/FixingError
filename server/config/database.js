const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Konfigurasi koneksi ke database
const dbConfig = {
  host: "103.66.86.234",
  user: "unteyojo_atun",
  password: ")?9hi-o--AYI",
  database: "unteyojo_PortalNews",
};

const db = mysql.createConnection(dbConfig);

// Menghubungkan ke database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("MySQL Connected...");
});

// Router GET untuk mengambil data dari tabel tertentu
app.get("/social_action_news", (req, res) => {
  const sql = "SELECT * FROM social_action_news";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching data:", err);
      res.status(500).json({ error: "Database query error" });
      return;
    }
    res.json(results);
  });
});

// Menjalankan server
app.listen(port, () => console.log(`Server is running on port ${port}`));
