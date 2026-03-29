import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { portfolioProfile } from "../data/portfolioContent";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Based In</h4>
            <p>{portfolioProfile.location}</p>
            <h4>Open To</h4>
            <p>
              New grad and early-career software engineering roles across backend,
              platform, applied AI, and full-stack product teams.
            </p>
            <p>
              Fast-moving teams that want engineers who can own systems, think
              product-first, and ship with discipline.
            </p>
            <h4>Education</h4>
            <p>
              Trinity College, B.S. in Computer Science &amp; Economics
              <br />
              Faculty Honors, Full-Ride Scholar
            </p>
          </div>
          <div className="contact-box">
            <h4>Connect</h4>
            <a
              href={portfolioProfile.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={portfolioProfile.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={`mailto:${portfolioProfile.email}`}
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href={portfolioProfile.resumePath}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Built to signal <br /> <span>range, ownership, and velocity.</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
