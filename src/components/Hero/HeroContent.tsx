import HeroHighlights from "./HeroHighlights";
import HeroActions from "./HeroActions";

const leafImage = `${import.meta.env.BASE_URL}hero-leaf.svg`;

function HeroContent() {
  return (
    <div className="hero-text">
      <img className="hero-leaf-sprig" src={leafImage} alt="" aria-hidden="true" />

      <h1 className="hero-title">
        Life is too short, Bring a{" "}
        <span className="hero-title-accent">green</span> friend
      </h1>

      <p className="hero-subtitle">
        Your screen shouldn't be the only thing you look at all day. Breathe life
        back into your workspace with low maintenance desk plants designed for
        busy minds.
      </p>

      <HeroHighlights />
      <HeroActions />
    </div>
  );
}

export default HeroContent;
