// import dotenv from "dotenv";
// dotenv.config();
// import mysql from "mysql";

// export const db = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });

import dotenv from "dotenv";
dotenv.config();
import mysql from "mysql";

let db;

function handleDisconnect() {
  db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });

  // Connect to the database
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      setTimeout(handleDisconnect, 2000); // Reconnect after 2 seconds if there's an error
    } else {
      console.log("Connected to MySQL!");
    }
  });

  // Handle reconnection if the connection is lost
  db.on("error", (err) => {
    console.error("MySQL error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST" || err.fatal) {
      // If connection is lost, attempt to reconnect
      console.log("Reconnecting to MySQL...");
      handleDisconnect();
    } else {
      throw err; // Handle other errors appropriately
    }
  });
}

handleDisconnect(); // Call the function to establish the initial connection

export { db };
