import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { portfolioProfile } from "../data/portfolioContent";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello, I'm</h2>
            <h1>
              {portfolioProfile.shortName}
              <br />
              <span>{portfolioProfile.lastName}</span>
            </h1>
            <p className="landing-summary">
              Software engineer building backend systems, applied AI products,
              and reliable user-facing experiences that hold up under real use.
            </p>
          </div>
          <div className="landing-info">
            <h3>{portfolioProfile.rolePrefix}</h3>
            <h2 className="landing-highlight">{portfolioProfile.rolePrimary}</h2>
            <p className="landing-detail">
              Product sense, systems thinking, and execution speed for teams that
              need engineers who can own meaningful work early.
            </p>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
