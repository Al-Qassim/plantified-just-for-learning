const plantImage = `${import.meta.env.BASE_URL}hero-plant.png`;

function HeroMedia() {
  return (
    <div className="hero-media">
      <div className="hero-blob" aria-hidden="true" />
      <img
        className="hero-plant"
        src={plantImage}
        alt="A lush Monstera plant in a white pot held by a hand"
        loading="eager"
        fetchPriority="high"
        width={470}
        height={470}
      />
    </div>
  );
}

export default HeroMedia;
