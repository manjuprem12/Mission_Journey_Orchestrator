import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FcPhone } from "react-icons/fc";
import { FiArrowRight } from "react-icons/fi";

//style
import '../style/Home.scss';

//images
import FeatureMartianDream from "../Assets/dream.jpeg";
import FeatureHome from "../Assets/home.jpeg";
import FeatureStart from "../Assets/start.jpeg";
import FeatureJourney from '../Assets/journey.jpeg';

const Home = () => {
  const navigate = useNavigate();

  //Function for Next button
  const handleSubmit = () => {
    navigate('/Mission_List');
  };
  
  return (
    <React.Fragment>
      <header className='Home-header'>
        <h1>JOURNEY ORCHESTRATOR</h1>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className='section-container'>
        <h2>Welcome To The Journey Orchestrator</h2>
        <p>Your Gateway to Mars</p>
      </section>

      <section id="features" className='section-container'>
        <div className='feature-container'>
          <div className="card card-container">
            <img src={FeatureMartianDream} className="card-img-top" alt="Martian Dream" />
            <div className="card-body">
              <h5 className="card-title">Martian Dream</h5>
              <p className="card-text">With Earth running out of coffee, Mars is our next home. Relay42's "Journey Orchestrator" helps us settle there, making the dream of living under Martian sunsets a reality.</p>
            </div>
          </div>

          <div className="card card-container">
            <img src={FeatureJourney} className="card-img-top" alt="Journey Orchestrator" />
            <div className="card-body">
              <h5 className="card-title">Journey Orchestrator</h5>
              <p className="card-text">Relay42’s "Journey Orchestrator" is the game-changer for Martian colonization. It’s not just about managing logistics but orchestrating humanity’s leap from Earth to Mars, ensuring a seamless and innovative transition.</p>
            </div>
          </div>

          <div className="card card-container">
            <img src={FeatureHome} className="card-img-top" alt="A New Home" />
            <div className="card-body">
              <h5 className="card-title">A New Home</h5>
              <p className="card-text">The journey to Mars is no longer a dream. With Relay42’s "Journey Orchestrator," the chaos of interplanetary settlement becomes a structured reality, paving the way for humans to thrive under Martian skies.</p>
            </div>
          </div>

          <div className="card card-container">
            <img src={FeatureStart} className="card-img-top" alt="Ready? Let's Start!" />
            <div className="card-body">
              <h5 className="card-title">Ready? Let's Start!</h5>
              <p className="card-text">Ready for Mars? Relay42's Journey Orchestrator makes it easy. Our platform manages everything for your mission with real-time updates and a user-friendly interface. Let's make Mars our new home together.</p>
              <Button variant="outline-primary" onClick={handleSubmit}>Next <FiArrowRight />{" "}</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className='section-container'>
        <h2>About Us</h2>
        <div>
          <p>Brief overview of Relay42 and its mission.</p>
          <p>Introduction to the team behind the Journey Orchestrator platform.</p>
          <p>Company values and commitment to innovation.</p>
        </div>
      </section>

      <section id="contact" className='section-container'>
        <h2>Contact Us</h2>
        <div className='contact'>
          <div className="card card-container">
            <div className="card-body">
              <h5 className="card-title">AMSTERDAM</h5>
              <p className="card-text">Meeuwenlaan 100</p>
              <p className="card-text">1021 JL Amsterdam</p>
              <p className="card-text">The Netherlands</p>
              <p className="card-text"><FcPhone />&nbsp;&nbsp;+31(0)20 303</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
