const express = require("express");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = 3000;

// Database connection configuration
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// Endpoint to return the list of gifts
app.get("/api/gifts", async (req, res) => {
  try {
    const query = "SELECT * FROM gifts";
    const { rows } = await pool.query(query);

    res.json(rows);
  } catch (error) {
    console.error("Error retrieving the list of gifts:", error);
    res.status(500).json({ error: "Error retrieving the list of gifts" });
  }
});

// Endpoint to update a gift with the provided string in the "guest" field
app.put("/api/gifts/:id", async (req, res) => {
  const { id } = req.params;
  const { guest } = req.body;

  try {
    const query = "UPDATE gifts SET guest = $1 WHERE id = $2";
    await pool.query(query, [guest, id]);

    res.json({ message: "Gift updated successfully" });
  } catch (error) {
    console.error("Error updating the gift:", error);
    res.status(500).json({ error: "Error updating the gift" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
