const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const VehicleType = require("./models/vehicleType");
const Vehicle = require("./models/vehicle");

const app = express();

// Middleware
app.use(bodyParser.json());  // Parse JSON bodies
app.use(cors());  // Enable Cross-Origin Resource Sharing

// API Routes
app.get("/api/types", async (req, res) => {
  try {
    const types = await VehicleType.findAll();
    res.json(types);  // Return vehicle types as JSON
  } catch (error) {
    console.error("Error fetching vehicle types:", error);
    res.status(500).json({ message: "Error fetching vehicle types" });
  }
});

app.get("/api/vehicles/:typeId", async (req, res) => {
  const { typeId } = req.params;
  
  try {
    const vehicles = await Vehicle.findAll({ where: { typeId } });
    
    if (vehicles.length === 0) {
      return res.status(404).json({ message: "No vehicles found for this type" });
    }

    res.json(vehicles);  // Return vehicles based on the typeId
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    res.status(500).json({ message: "Error fetching vehicles" });
  }
});

app.post("/api/book", async (req, res) => {
  const { vehicleId, startDate, endDate } = req.body;

  if (!vehicleId || !startDate || !endDate) {
    return res.status(400).json({ message: "Missing required fields: vehicleId, startDate, endDate" });
  }

  // Logic for booking (you can add actual booking logic here)
  try {
    // Assuming the booking logic works correctly:
    res.json({ message: "Booking successful!" });
  } catch (error) {
    console.error("Error processing booking:", error);
    res.status(500).json({ message: "Error processing booking" });
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
