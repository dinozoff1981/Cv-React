import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <section className="container-home">
      <div className="home-img">
        <img src="./images/dino6.jpeg" alt="" />
      </div>
      <div className="home-text">
        <span>Full-Stack .Net Developer</span>
        <h1>Tensae G. Seifu</h1>
        <p>Are you in search of a seasoned Full-Stack .NET Developer to drive innovation and bring your ideas to life? <br />
          Look no further. I'm a dynamic 42-year-old freelancer with a passion for transforming concepts into
          high-quality code. <br />While I excel in both front-end and back-end development, my true passion lies in the
          harmony between the two – the essence of full-stack mastery.</p>
        <div className="main-btn">
          <a href="./about.html">About Me</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
