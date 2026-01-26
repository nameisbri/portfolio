import "./SocialProof.scss";

const SocialProof = () => {
  return (
    <section className="social-proof">
      <div className="social-proof__container">
        <div className="social-proof__stat">
          <span className="social-proof__number">8+</span>
          <span className="social-proof__label">Years Experience</span>
        </div>
        <div className="social-proof__stat">
          <span className="social-proof__number">20+</span>
          <span className="social-proof__label">Products Launched</span>
        </div>
        <div className="social-proof__stat">
          <span className="social-proof__number">100%</span>
          <span className="social-proof__label">Client Satisfaction</span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
