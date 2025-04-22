import React from "react";
import "../styles/About.scss";
import paris from '../images/paris.jpg';
import china from '../images/belgium.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-text">
        <p className="hi">hi, my name is</p>
        <p className="name">Erin Xu.</p>
        <p>
          I’m a senior at Cornell University majoring in Computer Science. I love
          building things with technology, and I’m especially interested in
          developing high-performance, low-latency systems. After graduation,
          I’ll be joining Hudson River Trading as a Core Developer. Feel free to
          explore my portfolio and reach out to connect!
        </p>
      </div>
      <div className="about-images">
        <img src={paris} alt="Erin in Paris" />
        <img src={china} alt="Erin in China" />
      </div>
    </section>
  );
};

export default About;