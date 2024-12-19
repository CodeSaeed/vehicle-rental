const { sequelize } = require("../models");
const VehicleType = require("../models/vehicleType");
const Vehicle = require("../models/vehicle");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const types = [
    { name: "Hatchback", wheels: 4 },
    { name: "SUV", wheels: 4 },
    { name: "Sedan", wheels: 4 },
    { name: "Cruiser", wheels: 2 },
  ];
  await VehicleType.bulkCreate(types);

  const vehicles = [
    { name: "Honda City", typeId: 1 },
    { name: "Hyundai Creta", typeId: 2 },
    { name: "Tata Nexon", typeId: 3 },
    { name: "Royal Enfield", typeId: 4 },
  ];
  await Vehicle.bulkCreate(vehicles);

  console.log("Database seeded!");
  process.exit();
};

seedDatabase();
