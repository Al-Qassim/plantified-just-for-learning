import { AnimatePresence, motion } from "framer-motion";
import cartIcon from "../../assets/icons/cart-add.svg";
import PlantStats from "./PlantStats";
import type { Plant } from "./plants.data";

const HEAD_SLIDE = 200;

const headVariants = {
  enter: (direction: number) => ({
    y: direction >= 0 ? HEAD_SLIDE : -HEAD_SLIDE,
  }),
  center: { y: 0 },
  exit: (direction: number) => ({
    y: direction >= 0 ? -HEAD_SLIDE : HEAD_SLIDE,
  }),
};

type PlantInfoProps = {
  plant: Plant;
  direction: number;
};

function PlantInfo({ plant, direction }: PlantInfoProps) {
  return (
    <div className="plant-info">
      <div className="plant-info-main">
        <div className="plant-info-head">
          <AnimatePresence mode="popLayout" custom={direction} initial={false}>
            <motion.div
              key={plant.id}
              custom={direction}
              className="plant-info-head-content"
              variants={headVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <h2 className="plant-name">{plant.name}</h2>
              <p className="plant-description">{plant.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <PlantStats plantId={plant.id} stats={plant.stats} direction={direction} />
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
