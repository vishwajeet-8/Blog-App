import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql";

export const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.on("error", (err) => {
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    handleDisconnect(); // Reconnect if connection was lost
  } else {
    throw err; // For other errors, propagate the error
  }
});
