import pool from "../config/db.js";

export const getAllUsersService = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};

export const getUserByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE uid = $1", [id]);
    return result.rows[0];
};

export const createUserService = async (name, email) => {
    const result = await pool.query("INSERT INTO users (u_name, u_email) VALUES ($1,$2) RETURNING *", [name, email]);
    return result.rows[0];
};

export const updateUserService = async (id, name, email) => {
    const result = await pool.query("UPDATE users SET u_name = $1, u_email = $2 WHERE uid = $3 RETURNING *", [name, email, id]);
    return result.rows[0];
};

export const deleteUserService = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE uid = $1 RETURNING *", [id]);
    return result.rows[0];
};