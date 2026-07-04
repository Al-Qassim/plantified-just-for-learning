import "./Newsletter.css";

const sprig = `${import.meta.env.BASE_URL}plants/newsletter-sprig.svg`;

function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-card">
        <img
          className="newsletter-sprig"
          src={sprig}
          alt=""
          aria-hidden="true"
        />

        <div className="newsletter-content">
          <h2 className="newsletter-title">Find the plant that grows with you.</h2>
          <p className="newsletter-desc">
            Join 50,000+ urban dwellers who have rediscovered the joy of quiet
            growth. Delivered with care, straight to your door.
          </p>
        </div>

        <form
          className="newsletter-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            className="newsletter-input"
            type="email"
            placeholder="Enter your email here"
            aria-label="Email address"
          />
          <button className="newsletter-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
