import "./SectionThree.css";
import { Link } from "react-router-dom";

const SectionThree = () => {
  return (
    <section className="section mouse-ani-sect fp-section">
      <div className="container relative data-content">
        <div className="section-content sect-3">
          <div className="cropper-heading">
            <div className="text-wrapper-ani-hover">
              <Link to="/">
                <h2 className="section-title text-white">Branding</h2>
              </Link>
            </div>
          </div>
          <div className="cropper-heading">
            <div className="text-wrapper-ani-hover">
              <Link to="/">
                <h2 className="section-title text-white">Web Development</h2>
              </Link>
            </div>
          </div>
          <div className="cropper-heading">
            <div className="text-wrapper-ani-hover">
              <Link to="/">
                <h2 className="section-title text-white">Mobile App design</h2>
              </Link>
            </div>
          </div>
          <div className="cropper-heading">
            <div className="text-wrapper-ani-hover">
              <Link to="/">
                <h2 className="section-title text-white">Web design</h2>
              </Link>
            </div>
          </div>
          <div className="cropper-heading">
            <div className="text-wrapper-ani-hover">
              <Link to="/">
                <h2 className="section-title text-white">illustration</h2>
              </Link>
            </div>
          </div>
          <div className="cropper-heading">
            <div className="text-wrapper-ani-hover">
              <Link to="/">
                <h2 className="section-title text-white">animation</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
