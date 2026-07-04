import "./Hero.css";
import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";

function Hero() {
  return (
    <section className="hero">
      <HeroContent />
      <HeroMedia />
    </section>
  );
}

export default Hero;
