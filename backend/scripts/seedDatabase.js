const { sequelize } = require("../index");
const { VehicleType, Vehicle, User } = require("../index");

const seedDatabase = async () => {
  try {
    // Force synchronization (drops all tables and recreates them)
    await sequelize.sync({ force: true });

    // Seed VehicleTypes
    const types = [
      { name: "Hatchback", wheels: 4 },
      { name: "SUV", wheels: 4 },
      { name: "Sedan", wheels: 4 },
      { name: "Cruiser", wheels: 2 },
    ];
    await VehicleType.bulkCreate(types);
    console.log("Vehicle Types seeded!");

    // Seed Vehicles
    const vehicles = [
      { name: "Honda City", typeId: 1 },
      { name: "Hyundai Creta", typeId: 2 },
      { name: "Tata Nexon", typeId: 3 },
      { name: "Royal Enfield", typeId: 4 },
    ];
    await Vehicle.bulkCreate(vehicles);
    console.log("Vehicles seeded!");

    // Seed Users
    const users = [
      { firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
      { firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com" },
    ];
    await User.bulkCreate(users);
    console.log("Users seeded!");

    console.log("Database seeded!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  } finally {
    // Exit the process after seeding
    process.exit();
  }
};

seedDatabase();
