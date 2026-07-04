import arrowIcon from "../../assets/icons/arrow-right.svg";

function HeroActions() {
  return (
    <div className="hero-actions">
      <button type="button" className="btn btn-primary">
        Find Your Plant Friend
        <span className="btn-badge">
          <img src={arrowIcon} alt="" aria-hidden="true" />
        </span>
      </button>

      <button type="button" className="btn btn-ghost">
        Explore
      </button>
    </div>
  );
}

export default HeroActions;
