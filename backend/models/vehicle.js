
const { sequelize, Sequelize } = require("./index");

const Vehicle = sequelize.define("Vehicle", {
  name: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },
  typeId: { 
    type: Sequelize.INTEGER, 
    allowNull: false,
    references: {
      model: "VehicleTypes", // Name of the VehicleType table
      key: "id",             // The primary key of the VehicleType table
    }
  },
  isBooked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false, // By default, the vehicle is not booked
  },
});

// Define the relationship between Vehicle and VehicleType models
Vehicle.associate = (models) => {
  // A Vehicle belongs to one VehicleType
  Vehicle.belongsTo(models.VehicleType, {
    foreignKey: "typeId",  // Foreign key in the Vehicle model
    as: "vehicleType",    // Optional alias for the association
  });
};

module.exports = Vehicle;
