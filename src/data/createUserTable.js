import pool from "../config/db.js";

const createUserTable = async () => {
    const queryText = `
        CREATE TABLE IF NOT EXISTS users (
            uid SERIAL PRIMARY KEY,
            u_name VARCHAR(255) NOT NULL,
            u_email VARCHAR(255) NOT NULL UNIQUE,
            u_createdAt TIMESTAMPZONE DEFAULT NOW()
        );
    `;
    try {
        await pool.query(queryText);
        console.log("Users table created successfully");
    } catch (error) {
        console.error("Error creating users table:", error);
    }
}

export default createUserTable;