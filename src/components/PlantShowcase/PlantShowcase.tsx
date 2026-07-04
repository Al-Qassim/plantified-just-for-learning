import { useState } from "react";
import "./PlantShowcase.css";
import { plants } from "./plants.data";
import PlantImage from "./PlantImage";
import PlantInfo from "./PlantInfo";
import PlantThumbnails from "./PlantThumbnails";

const branch = `${import.meta.env.BASE_URL}plants/branch.svg`;

function PlantShowcase() {
  const [selectedId, setSelectedId] = useState(plants[0].id);
  const selectedPlant = plants.find((plant) => plant.id === selectedId) ?? plants[0];

  return (
    <section className="plant-showcase">
      <img className="plant-branch" src={branch} alt="" aria-hidden="true" />
      <div className="plant-image-and-info-container">
        <PlantImage plant={selectedPlant} />
        <PlantInfo plant={selectedPlant} />
      </div>
      
      <PlantThumbnails
        plants={plants}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />
    </section>
  );
}

export default PlantShowcase;
