import React from "react";
import about from './about-img.jpg'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h2>We have 15 years of experience in delivering quality results.</h2>
        <button className="read-more">Read More</button>
      </div>
      <div className="about-image">
        <img src={about} alt="About us" />
      </div>
    </section>
  );
};

export default About;
