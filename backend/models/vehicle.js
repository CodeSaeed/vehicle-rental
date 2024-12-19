const { sequelize, Sequelize } = require("./index");
const VehicleType = require("./vehicleType");

const Vehicle = sequelize.define("Vehicle", {
  name: { type: Sequelize.STRING, allowNull: false },
  typeId: {
    type: Sequelize.INTEGER,
    references: { model: VehicleType, key: "id" },
  },
});

Vehicle.belongsTo(VehicleType, { foreignKey: "typeId" });
module.exports = Vehicle;
