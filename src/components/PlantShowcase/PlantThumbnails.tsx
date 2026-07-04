import type { Plant } from "./plants.data";

type PlantThumbnailsProps = {
  plants: Plant[];
  selectedId: string;
  onSelect: (id: string) => void;
};

function PlantThumbnails({ plants, selectedId, onSelect }: PlantThumbnailsProps) {
  return (
    <div className="plant-thumbnails">
      {plants.map((plant) => {
        const isSelected = plant.id === selectedId;
        return (
          <button
            key={plant.id}
            type="button"
            className={`plant-thumb ${isSelected ? "plant-thumb--selected" : ""}`}
            onClick={() => onSelect(plant.id)}
            aria-label={plant.name}
            aria-pressed={isSelected}
          >
            <img src={plant.image} alt="" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}

export default PlantThumbnails;
