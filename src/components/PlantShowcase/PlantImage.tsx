import type { Plant } from "./plants.data";

const glow = `${import.meta.env.BASE_URL}plants/plant-glow.svg`;

function PlantImage({ plant }: { plant: Plant }) {
  return (
    <div className="plant-image">
      <div className="plant-glow" aria-hidden="true">
        <img src={glow} alt="" />
      </div>
      <img className="plant-photo" src={plant.image} alt={plant.name} />
    </div>
  );
}

export default PlantImage;
