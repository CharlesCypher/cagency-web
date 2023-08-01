import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <section className="section section-two">
      <div className="container data-content">
        <div className="row gap-8">
          <div className="col col-2 w-60">
            <div className="sect-4-grid">
              <div className="sticky-paper">
                <img
                  src="https://odama.io/images/odama_LP_Artboard-1.png"
                  alt="illustration of a laptop"
                  loading="lazy"
                  className="sticky-paper-img"
                />
                <h3 className="sticky-paper-text">Landing Page Design</h3>
              </div>
              <div className="sticky-paper">
                <img
                  src="https://odama.io/images/odama_LP_Artboard-2.png"
                  alt="illustration of a monitor"
                  loading="lazy"
                  className="sticky-paper-img"
                />
                <h3 className="sticky-paper-text">Saas, POS, Dashboard</h3>
              </div>
              <div className="sticky-paper">
                <img
                  src="https://odama.io/images/odama_LP_Artboard-3.png"
                  alt="illustration of a 2D & 3D object"
                  loading="lazy"
                  className="sticky-paper-img"
                />
                <h3 className="sticky-paper-text">2D & 3D Illustration</h3>
              </div>
              <div className="sticky-paper">
                <img
                  src="https://odama.io/images/odama_LP_Artboard-4.png"
                  alt="illustration of a phone"
                  loading="lazy"
                  className="sticky-paper-img"
                />
                <h3 className="sticky-paper-text">Mobile app Design</h3>
              </div>
            </div>
          </div>
          <div className="col col-2 w-45">
            <div className="title-wrapper">
              <div className="cropper-heading">
                <div className="text-wrapper">
                  <h2>We don&apos;t copy</h2>
                </div>
              </div>
              <div className="cropper-heading">
                <div className="text-wrapper">
                  <h2>We create</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
