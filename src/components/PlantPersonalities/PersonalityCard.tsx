import type { Personality } from "./personalities.data";

function PersonalityCard({ personality }: { personality: Personality }) {
  return (
    <article className="personality-card">
      <div className="personality-card-media">
        <img src={personality.image} alt={personality.name} />
        <span className="personality-card-price">{personality.price}$</span>
      </div>

      <div className="personality-card-body">
        <p className="personality-card-title">
          {personality.prompt}
          <br />
          {personality.name}
        </p>
        <a className="personality-card-link" href="#">
          View Details
        </a>
      </div>
    </article>
  );
}

export default PersonalityCard;
