import "./styles/About.css";
import { portfolioProfile } from "../data/portfolioContent";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About</h3>
        <p className="para">{portfolioProfile.about}</p>
      </div>
    </div>
  );
};

export default About;
