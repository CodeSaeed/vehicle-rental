const { sequelize } = require("../models");  // Import sequelize instance
const VehicleType = require("../models/vehicleType");  // Import VehicleType model
const Vehicle = require("../models/vehicle");  // Import Vehicle model

const seedDatabase = async () => {
  try {
    // Sync database and force table re-creation
    await sequelize.sync({ force: true });

    // Seed VehicleTypes
    const types = [
      { name: "Hatchback", wheels: 4 },
      { name: "SUV", wheels: 4 },
      { name: "Sedan", wheels: 4 },
      { name: "Cruiser", wheels: 2 },
    ];
    await VehicleType.bulkCreate(types);  // Insert multiple vehicle types
    console.log("Vehicle types seeded!");

    // Seed Vehicles
    const vehicles = [
      { name: "Honda City", typeId: 1 },  // Hatchback
      { name: "Hyundai Creta", typeId: 2 },  // SUV
      { name: "Tata Nexon", typeId: 3 },  // Sedan
      { name: "Maruti Swift", typeId: 1 },  // Hatchback
      { name: "BMW X5", typeId: 2 },  // SUV
      { name: "Audi A6", typeId: 3 },  // Sedan
      { name: "Royal Enfield", typeId: 4 },  // Cruiser
      { name: "Kawasaki Ninja", typeId: 4 },  // Sports (Cruiser/Bike)
    ];
    await Vehicle.bulkCreate(vehicles);  // Insert multiple vehicles
    console.log("Vehicles seeded!");

    console.log("Database successfully seeded!");

  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Exit the process after seeding is complete
    process.exit();
  }
};

seedDatabase();