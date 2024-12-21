
const { sequelize, Sequelize } = require("./index");

const VehicleType = sequelize.define("VehicleType", {
  name: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },
  wheels: { 
    type: Sequelize.INTEGER, 
    allowNull: false 
  },
});

// Define the relationship between VehicleType and Vehicle models
VehicleType.associate = (models) => {
  // A VehicleType can have many Vehicles
  VehicleType.hasMany(models.Vehicle, {
    foreignKey: "typeId",  // Foreign key in the Vehicle model
    as: "vehicles",       // Optional alias for the association
  });
};

module.exports = VehicleType;