import "./styles/Career.css";
import { portfolioExperience } from "../data/portfolioContent";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          Career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {portfolioExperience.map((item) => (
            <div className="career-info-box" key={`${item.company}-${item.role}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>
                    {item.company} · {item.meta}
                  </h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
