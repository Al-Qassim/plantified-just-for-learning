import lifespanIcon from "../../assets/icons/lifespan.svg";
import heightIcon from "../../assets/icons/height.svg";
import wateringIcon from "../../assets/icons/watering.svg";
import type { PlantStats as PlantStatsType } from "./plants.data";

const statItems = [
  { icon: lifespanIcon, label: "Lifespan", key: "lifespan" },
  { icon: heightIcon, label: "Avg Height", key: "height" },
  { icon: wateringIcon, label: "Watering", key: "watering" },
] as const;

function PlantStats({ stats }: { stats: PlantStatsType }) {
  return (
    <div className="plant-stats">
      {statItems.map((item) => (
        <div key={item.key} className="plant-stat">
          <img className="plant-stat-icon" src={item.icon} alt="" aria-hidden="true" />
          <div className="plant-stat-text">
            <span className="plant-stat-label">{item.label}</span>
            <span className="plant-stat-value">{stats[item.key]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlantStats;
