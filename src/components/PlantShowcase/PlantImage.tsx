import { AnimatePresence, motion } from "framer-motion";
import type { Plant } from "./plants.data";

const glow = `${import.meta.env.BASE_URL}plants/plant-glow.svg`;

const SLIDE_DISTANCE = 450;

const photoVariants = {
  enter: (direction: number) => ({
    x: direction >= 0 ? SLIDE_DISTANCE : -SLIDE_DISTANCE,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction >= 0 ? -SLIDE_DISTANCE : SLIDE_DISTANCE,
    opacity: 0,
  }),
};

type PlantImageProps = {
  plant: Plant;
  direction: number;
};

function PlantImage({ plant, direction }: PlantImageProps) {
  return (
    <div className="plant-image">
      <div className="plant-glow" aria-hidden="true">
        <img src={glow} alt="" />
      </div>

      <div className="plant-photo-stage">
        <AnimatePresence custom={direction} initial={false}>
          <motion.img
            key={plant.id}
            custom={direction}
            className="plant-photo"
            src={plant.image}
            alt={plant.name}
            variants={photoVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default PlantImage;
