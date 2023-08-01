import "./SectionOne.css";

const SectionOne = () => {
  return (
    <section className="section about-cagency">
      <div className="container">
        <div className="title-wrapper about-section data-content">
          <div className="desktop">
            <div className="cropper-heading">
              <div className="text-wrapper">
                <h2 className="section-title">an agency committed TO EVOLVE</h2>
              </div>
            </div>
            <div className="cropper-heading">
              <div className="text-wrapper">
                <h2 className="section-title">ABSTRACT IDEAS INTO CONCREATE</h2>
              </div>
            </div>
            <div className="cropper-heading">
              <div className="text-wrapper">
                <h2 className="section-title">PRODUCT. MEET us, the most</h2>
              </div>
            </div>
            <div className="cropper-heading">
              <div className="text-wrapper">
                <h2 className="section-title">passionate people in the industry</h2>
              </div>
            </div>
          </div>
          <div className="mobile tablet">
            <div className="cropper-heading">
              <div className="text-wrapper">
                <h2 className="section-title">
                  an agency committed TO EVOLVE ABSTRACT IDEAS INTO CONCREATE PRODUCT. MEET us, the most passionate people in the industry
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="about-para-wrapper">
          <p className="about-para">
            Odama Studio is a game-changing agency. We don’t give a sh*t about the size of your company. We&apos;re designed to design high-quality
            product.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
