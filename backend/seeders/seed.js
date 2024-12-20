const { sequelize } = require("../models");
const VehicleType = require("../models/vehicleType");
const Vehicle = require("../models/vehicle");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seed the vehicle types (3 car types and 1 bike type)
  const types = [
    { name: "Hatchback", wheels: 4 },
    { name: "SUV", wheels: 4 },
    { name: "Sedan", wheels: 4 },
    { name: "Cruiser", wheels: 2 },
  ];
  await VehicleType.bulkCreate(types);

  // Seed the vehicles associated with each type
  const vehicles = [
    { name: "Honda City", typeId: 1 }, // Hatchback
    { name: "Hyundai Creta", typeId: 2 }, // SUV
    { name: "Tata Nexon", typeId: 3 }, // Sedan
    { name: "Maruti Swift", typeId: 1 }, // Hatchback
    { name: "BMW X5", typeId: 2 }, // SUV
    { name: "Audi A6", typeId: 3 }, // Sedan
    { name: "Royal Enfield", typeId: 4 }, // Cruiser
    { name: "Kawasaki Ninja", typeId: 4 }, // Sports
  ];
  await Vehicle.bulkCreate(vehicles);

  console.log("Database seeded!");
  process.exit();
};

seedDatabase();
