const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const VehicleType = require("./models/vehicleType");
const Vehicle = require("./models/vehicle");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/api/types", async (req, res) => {
  const types = await VehicleType.findAll();
  res.json(types);
});

app.get("/api/vehicles/:typeId", async (req, res) => {
  const { typeId } = req.params;
  const vehicles = await Vehicle.findAll({ where: { typeId } });
  res.json(vehicles);
});

app.post("/api/book", async (req, res) => {
  const { vehicleId, startDate, endDate } = req.body;
  res.json({ message: "Booking successful!" });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
