import cartIcon from "../../assets/icons/cart-add.svg";
import PlantStats from "./PlantStats";
import type { Plant } from "./plants.data";

function PlantInfo({ plant }: { plant: Plant }) {
  return (
    <div className="plant-info">
      <div className="plant-info-main">
        <div className="plant-info-head">
          <h2 className="plant-name">{plant.name}</h2>
          <p className="plant-description">{plant.description}</p>
        </div>
        <PlantStats stats={plant.stats} />
      </div>

      <button type="button" className="plant-buy">
        <span className="plant-buy-label">
          <span>Add to my desk</span>
          <span className="plant-buy-dot" aria-hidden="true" />
          <span>{plant.price}$</span>
        </span>
        <span className="plant-buy-icon">
          <img src={cartIcon} alt="" aria-hidden="true" />
        </span>
      </button>
    </div>
  );
}

export default PlantInfo;
