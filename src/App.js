import React, { Component } from 'react';
//import logo from './logo.svg';

import './index.css';
import './css/animate.css';
import './css/animation.css';
import './css/animation-without-delay.css';
import './css/responsive.css';
import './css/reset.css';
import './css/slicknav.min.css';
import './css/pace-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="entire-content">
          <header>
            <div className="container">
              <div className="row">
                <a className="" href="#" data-animation={"fadeInLeft"}><span className="logo">vdiaz.tech</span></a>
                <nav className="" data-animation={"fadeInRight"}>
                  <ul className="menu" id={"menu"}>
                    <li><a href="#slider">Home</a>
                    </li><li><a href="#services">Services</a>
                    </li><li><a href="#portfolio">My Work</a>
                    
                    </li>
                  </ul> 
                </nav>
                <div className="clearfix"></div>
              </div>
            </div>
          </header>

        <section className="slider" id={"slider"}>
          <ul className="slider-carousel" id="slider-carousel">
            <li className="img1">
              <h1>Full Stack <span className="primary">Developer</span></h1>
              <p>It is a long established fact that a reader will be distracted by the readable<br/>content of a page when looking at its layout</p>
              <a href="http://www.vdiazdesigns.com" target="_blank" className="primary-bg cta1">My Work</a><a href={"./src/img/vdiaz_resume.pdf"} className="secondary-sky-blue-bg cta2" target="_blank">Resume</a> 
            </li>
          </ul>
        </section>

        <section className="services section-padding" id={"services"}>
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


        <section className="portfolio section-padding" data-stellar-background-ratio="0.5" id={"portfolio"}>
          <div className="" data-animation="fadeIn">
            <div className="portfolio-header">
              <h1 className="white">My Work</h1>
              <p>It is a long established fact that a reader will be distracted by the<br/> readable content of a page when looking at its layout</p>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div data-animation="fadeInUp">
                <ul className={"portfolio-carousel"}>
                  
                  <li>
                    <div className="inner-content">
                      <img alt="text" />
                      <div className="overlay-content">
                        <h3>Environment Website</h3>
                        <p><a href="#" alt="portfolio">Click here</a> for details</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="inner-content">
                      <img alt="text" />
                      <div className="overlay-content">
                        <h3>Ecommerce Website</h3>
                        <p><a href="#" alt="portfolio">Click here</a> for details</p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="inner-content">
                      <img alt="text" />
                      <div className="overlay-content">
                        <h3>Portfolio Website</h3>
                        <p><a href="#" alt="portfolio">Click here</a> for details</p>
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

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
          
              </div>
              <div className="col-md-4">
              <div data-animation={"fadeInLeft"}>
                  <h1>Stay In Touch</h1>
                  <ul className={"footer-social-links"}>
                    <li><a href="#"><i className="fa fa-facebook"></i></a>
                    </li><li><a href="#"><i className="fa fa-twitter"></i></a>
                    </li><li><a href="#"><i className="fa fa-linkedin"></i></a>
                    </li><li><a href="#"><i className="fa fa-dribbble"></i></a>
                    </li><li><a href="#"><i className="fa fa-youtube"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                
              </div>
            </div>
          </div>
          <div className="copyright">
          <p>Copyright &copy; 2017. All Rights Reserved.</p>
          </div>
        </footer>


        </div>  
      </div>
    );
  }
}

export default App;
