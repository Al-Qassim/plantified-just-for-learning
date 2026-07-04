import { AnimatePresence, motion } from "framer-motion";
import type { Plant } from "./plants.data";

const glow = `${import.meta.env.BASE_URL}plants/plant-glow.svg`;

function PlantImage({ plant }: { plant: Plant }) {

  return (
    <div className="plant-image">
      <div className="plant-glow" aria-hidden="true">
        <img src={glow} alt="" />
      </div>
      <div className="plant-photo-stage">   {/* position: relative; overflow: hidden */}
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={plant.id}
            className="plant-photo"
            src={plant.image}
            alt={plant.name}
            initial={{ x: 450, opacity: 0 }}   
            animate={{ x: 0, opacity: 1 }} 
            exit={{ x: -450, opacity: 0 }} 
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default PlantImage;
