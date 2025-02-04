import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-text">
        <h2>About Us</h2>
        <p>We have 15 years of experience in delivering quality results.</p>
        <button className="read-more">Read More</button>
      </div>
      <div className="about-image">
        <img src="https://via.placeholder.com/300" alt="About us" />
      </div>
    </section>
  );
};

export default About;
