const { Sequelize } = require("sequelize");
const path = require("path");

// Set an absolute path for the database file (helps avoid path issues)
const databasePath = path.resolve(__dirname, './database.sqlite');

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: databasePath, // Path to SQLite database file
  logging: false, // Disable logging to avoid cluttering the console (set to true if you want to see SQL queries)
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");

    // Sync the models with the database
    sequelize.sync({ force: false }) // Change to `true` if you want to reset the database schema
      .then(() => {
        console.log("Database synchronized successfully!");
      })
      .catch((error) => {
        console.error("Error syncing the database:", error);
      });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = { sequelize, Sequelize };
