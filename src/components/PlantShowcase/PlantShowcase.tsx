import { useState } from "react";
import "./PlantShowcase.css";
import { plants } from "./plants.data";
import PlantImage from "./PlantImage";
import PlantInfo from "./PlantInfo";
import PlantThumbnails from "./PlantThumbnails";

const branch = `${import.meta.env.BASE_URL}plants/branch.svg`;

function PlantShowcase() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const selectedPlant = plants[selectedIndex];

  function selectPlant(id: string) {
    const nextIndex = plants.findIndex((plant) => plant.id === id);
    if (nextIndex === -1 || nextIndex === selectedIndex) return;
    setDirection(nextIndex > selectedIndex ? 1 : -1);
    setSelectedIndex(nextIndex);
  }

  return (
    <section className="plant-showcase">
      <img className="plant-branch" src={branch} alt="" aria-hidden="true" />
      <div className="plant-image-and-info-container">
        <PlantImage plant={selectedPlant} direction={direction} />
        <PlantInfo plant={selectedPlant} direction={direction} />
      </div>

      <PlantThumbnails
        plants={plants}
        selectedId={selectedPlant.id}
        onSelect={selectPlant}
      />
    </section>
  );
}

export default PlantShowcase;
