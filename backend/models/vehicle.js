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
      model: "VehicleTypes", // Reference to VehicleType model
      key: "id",
    },
  },
  numberOfWheels: {
    type: Sequelize.INTEGER,
    allowNull: false, // Ensure every vehicle has a defined number of wheels
  },
  isBooked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false, // Default is false, not booked
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Associations
Vehicle.associate = (models) => {
  // A Vehicle belongs to one VehicleType
  Vehicle.belongsTo(models.VehicleType, {
    foreignKey: "typeId",
    as: "vehicleType", // Alias for the association
  });
};

module.exports = Vehicle;
