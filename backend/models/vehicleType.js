const { sequelize, Sequelize } = require("./index");

const VehicleType = sequelize.define("VehicleType", {
  name: { type: Sequelize.STRING, allowNull: false },
  wheels: { type: Sequelize.INTEGER, allowNull: false },
});

module.exports = VehicleType;
