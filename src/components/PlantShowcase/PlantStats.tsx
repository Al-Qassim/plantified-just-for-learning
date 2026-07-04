import { AnimatePresence, motion } from "framer-motion";
import lifespanIcon from "../../assets/icons/lifespan.svg";
import heightIcon from "../../assets/icons/height.svg";
import wateringIcon from "../../assets/icons/watering.svg";
import type { PlantStats as PlantStatsType } from "./plants.data";

const statItems = [
  { icon: lifespanIcon, label: "Lifespan", key: "lifespan" },
  { icon: heightIcon, label: "Avg Height", key: "height" },
  { icon: wateringIcon, label: "Watering", key: "watering" },
] as const;

const VALUE_SLIDE = 28;

const valueVariants = {
  enter: (direction: number) => ({
    y: direction >= 0 ? VALUE_SLIDE : -VALUE_SLIDE,
  }),
  center: { y: 0 },
  exit: (direction: number) => ({
    y: direction >= 0 ? -VALUE_SLIDE : VALUE_SLIDE,
  }),
};

type PlantStatsProps = {
  plantId: string;
  stats: PlantStatsType;
  direction: number;
};

function PlantStats({ plantId, stats, direction }: PlantStatsProps) {
  return (
    <div className="plant-stats">
      {statItems.map((item) => (
        <div key={item.key} className="plant-stat">
          <img className="plant-stat-icon" src={item.icon} alt="" aria-hidden="true" />
          <div className="plant-stat-text">
            <span className="plant-stat-label">{item.label}</span>
            <div className="plant-stat-value">
              <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                <motion.span
                  key={`${plantId}-${item.key}`}
                  custom={direction}
                  className="plant-stat-value-text"
                  variants={valueVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                  {stats[item.key]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlantStats;
