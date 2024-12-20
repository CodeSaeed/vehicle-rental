const { sequelize, Sequelize } = require("../index");

const Booking = sequelize.define("Booking", {
  startDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  endDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

Booking.associate = (models) => {
  // A Booking belongs to one User
  Booking.belongsTo(models.User, {
    foreignKey: "userId",
    as: "user",
  });

  // A Booking belongs to one Vehicle
  Booking.belongsTo(models.Vehicle, {
    foreignKey: "vehicleId",
    as: "vehicle",
  });
};

module.exports = Booking;
