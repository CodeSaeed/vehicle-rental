import React, { useEffect, useState } from "react";
import { fetchVehicleTypes } from "../api";

const Step3 = ({ setType, wheels, nextStep }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    const loadTypes = async () => {
      const data = await fetchVehicleTypes();
      setVehicleTypes(data.filter((type) => type.wheels.toString() === wheels));
    };
    loadTypes();
  }, [wheels]);

  return (
    <div>
      <h3>Select Vehicle Type</h3>
      {vehicleTypes.map((type) => (
        <label key={type.id}>
          <input
            type="radio"
            value={type.id}
            onChange={(e) => setType(e.target.value)}
          />
          {type.name}
        </label>
      ))}
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step3;
