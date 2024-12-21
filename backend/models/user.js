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
    validate: {
      isEmail: {
        msg: "Please provide a valid email address", // Email validation
      },
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,  // Ensure password is provided
    validate: {
      len: {
        args: [8, 128],
        msg: "Password should be at least 8 characters long",
      },
    },
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Associations
User.associate = (models) => {
  // A User can have many Bookings
  User.hasMany(models.Booking, {
    foreignKey: "userId", // Foreign key in the Booking model
    as: "bookings",       // Alias for the association
  });
};

module.exports = User;
