
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite", // Path to SQLite database file
  logging: false, // Disable logging to avoid cluttering the console (set to true if you want to see SQL queries)
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = { sequelize, Sequelize };
