const { sequelize, Sequelize } = require("./index");


const User = sequelize.define("User", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,  // Ensure email is unique
  },
});

User.associate = (models) => {
  // A User can have many Bookings
  User.hasMany(models.Booking, {
    foreignKey: "userId", // Foreign key in the Booking model
    as: "bookings",       // Alias for the association
  });
};

module.exports = User;
