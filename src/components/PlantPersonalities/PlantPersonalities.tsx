import "./PlantPersonalities.css";
import { personalities } from "./personalities.data";
import PersonalityCard from "./PersonalityCard";

const sprig = `${import.meta.env.BASE_URL}plants/personality-sprig.svg`;

function PlantPersonalities() {
  return (
    <section className="personalities">
      <div className="personalities-inner">
        <div className="personalities-panel" aria-hidden="true" />

        <img
          className="personalities-sprig"
          src={sprig}
          alt=""
          aria-hidden="true"
        />

        <div className="personalities-content">
          <div className="personalities-cards">
            {personalities.map((personality) => (
              <PersonalityCard key={personality.id} personality={personality} />
            ))}
          </div>

          <p className="personalities-tagline">
            Different plants, Different personalities.
            <br />
            Find the one that feels most like you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlantPersonalities;
