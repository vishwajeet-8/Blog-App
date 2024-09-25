// import dotenv from "dotenv";
// dotenv.config();
// import mysql from "mysql";

// export const db = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });

import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const dbConfig = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

let db;

function handleDisconnect() {
  db = mysql.createConnection(dbConfig);

  db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      setTimeout(handleDisconnect, 2000); // Retry after 2 seconds
    } else {
      console.log("Connected to the database.");
    }
  });

  db.on("error", (err) => {
    console.error("Database error:", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was lost. Attempting to reconnect...");
      handleDisconnect(); // Reconnect if connection was lost
    } else if (err.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR") {
      console.error("Fatal error occurred. Resetting the connection...");
      handleDisconnect(); // Reset the connection on fatal error
    } else {
      throw err; // For other errors, propagate the error
    }
  });
}

// Initial connection
handleDisconnect();

export default db;
