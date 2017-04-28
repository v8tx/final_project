import React, { Component } from 'react';
//import logo from './logo.svg';

import './index.css';
import './css/animate.css';
import './css/animation.css';
import './css/responsive.css';
import './css/reset.css';
import './css/slicknav.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="entire-content">
          <header>
            <div className="container">
              <div className="row">
                <a className="" href="#" data-animation="fadeInLeft"><span className="logo">vdiaz.tech</span></a>
                <nav className="" data-animation="fadeInRight">
                  <ul className="menu" id="menu">
                    <li><a href="#slider">Home</a>
                    </li><li><a href="#services">Services</a>
                    </li><li><a href="#portfolio">My Work</a>
                    </li><li><a href="#team">About</a>
                    </li><li><a href="#contact">Contact</a>
                    </li>
                  </ul> 
                </nav>
                <div className="clearfix"></div>
              </div>
            </div>
          </header>

        <section className="slider" id="slider">
          <ul className="slider-carousel" id="slider-carousel">
            <li className="img1">
              <h1>Full Stack <span className="primary">Developer</span></h1>
              <p>It is a long established fact that a reader will be distracted by the readable<br/>content of a page when looking at its layout</p>
              <a href="#" className="primary-bg cta1">My Work</a><a href="#" className="secondary-sky-blue-bg cta2">About</a> 
            </li>
          </ul>
        </section>

        <section className="services section-padding" id="services">
          <div className="services-header">
            <div className="" data-animation="fadeIn">
              <h1>Services</h1>
              <p>It is a long established fact that a reader will be distracted by the<br/> readable content of a page when looking at its layout</p>
            </div>
          </div>
          <div className="services-content">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="" data-animation="fadeInLeft">
                    <p><i className="fa fa-laptop"></i></p>
                    <h3>Web Design</h3>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="" data-animation="fadeInLeft">
                    <p><i className="fa fa-edit"></i></p>
                    <h3>Graphic Design</h3>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="" data-animation="fadeInLeft">
                    <p><i className="fa fa-cog"></i></p>
                    <h3>PSD to HTML/CSS</h3>
                    <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


  <section className="portfolio section-padding" data-stellar-background-ratio="0.5" id="portfolio">
    <div className="" data-animation="fadeIn">
      <div className="portfolio-header">
        <h1 className="white">My Work</h1>
        <p>It is a long established fact that a reader will be distracted by the<br/> readable content of a page when looking at its layout</p>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="" data-animation="fadeInUp">
          <ul className="portfolio-carousel">
            <li>
              <div className="inner-content">
                <img/>
                <div className="overlay-content">
                  <h3>Environment Website</h3>
                  <p><a href="#">Click here</a> for details</p>
                </div>
              </div>
            </li><li>
              <div className="inner-content">
                <img/>
                <div className="overlay-content">
                  <h3>Ecommerce Website</h3>
                  <p><a href="#">Click here</a> for details</p>
                </div>
              </div>
            </li><li>
              <div className="inner-content">
                <img/>
                <div className="overlay-content">
                  <h3>Portfolio Website</h3>
                  <p><a href="#">Click here</a> for details</p>
                </div>
              </div>
            </li><li>
              <div className="inner-content">
                <img/>
                <div className="overlay-content">
                  <h3>Blog Website</h3>
                  <p><a href="#">Click here</a> for details</p>
                </div>
              </div>
            </li><li>
              <div className="inner-content">
                <img/>
                <div className="overlay-content">
                  <h3>Corporate Website</h3>
                  <p><a href="#">Click here</a> for details</p>
                </div>
              </div>
            </li><li>
              <div className="inner-content">
                <img/>
                <div className="overlay-content">
                  <h3>Ecommerce Website</h3>
                  <p><a href="#">Click here</a> for details</p>
                </div>
              </div>
            </li><li>
              <div className="inner-content">
                <img/>
                <div className="overlay-content">
                  <h3>Retail Website</h3>
                  <p><a href="#">Click here</a> for details</p>
                </div>
              </div>
            </li>
          </ul>

          <ul className="portfolio-nav">
            <li id="prev">&lt;</li>
            <li id="next">&gt;</li>
          </ul>
        </div>
      </div>
    </div>

  </section>
        </div>  
      </div>
    );
  }
}

export default App;
