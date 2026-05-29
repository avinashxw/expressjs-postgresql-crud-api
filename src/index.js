import express from 'express';
import cors from 'cors';
import pool from './config/db.js';

import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// routes

// server error handling

// testing postgres connection
app.get("/", async (req,res) => {
    const result = await pool.query("SELECT current_database()");
    res.json({ message: "The database connection established is: ", database: result.rows[0].current_database });
});

// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 