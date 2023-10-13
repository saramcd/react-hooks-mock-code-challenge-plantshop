import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onPlantDelete }) {
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return (
          <PlantCard
            key={plant.name}
            plant={plant}
            onPlantDelete={onPlantDelete}
          />
        );
      })}
    </ul>
  );
}
export default PlantList;
