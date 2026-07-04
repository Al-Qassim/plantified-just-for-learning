const highlights = ["A plant won't interrupt you", "A cute little roommate"];

function HeroHighlights() {
  return (
    <div className="hero-proof">
      {highlights.map((text) => (
        <span key={text} className="hero-proof-pill">
          {text}
        </span>
      ))}
    </div>
  );
}

export default HeroHighlights;
