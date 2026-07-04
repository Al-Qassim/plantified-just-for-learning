import HeroHighlights from "./HeroHighlights";
import HeroActions from "./HeroActions";

const leafImage = `${import.meta.env.BASE_URL}hero-leaf.svg`;
const leafImageAlt = `${import.meta.env.BASE_URL}hero-leaf-2.svg`;

function HeroContent() {
  return (
    <div className="hero-text">
      <span className="hero-leaf-sprig" aria-hidden="true">
        <img
          className="hero-leaf-sprig-img hero-leaf-sprig-img--a"
          src={leafImage}
          alt=""
        />
        <img
          className="hero-leaf-sprig-img hero-leaf-sprig-img--b"
          src={leafImageAlt}
          alt=""
        />
      </span>

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
