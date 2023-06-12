import React, { useEffect } from 'react';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'feather-icons/dist/feather.min.js';
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './default (1).css';
import Logo from './miclogo.png';
import { Helmet } from 'react-helmet';

function home() {
  useEffect(() => {
    $(".carousel").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      arrows: false,
      pauseOnHover: false,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Home</title>
        <meta name="description" content="Lost and Found" />
        <link href="https://rsms.me/inter/inter-ui.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
        <link rel="stylesheet" href="default.css" id="theme-color" />
        <style>
          {
            ` .heading-black {
              color: rgb(58, 55, 150);
            }

            body {
              background-color: #aeeaf9b0;
            }

            .navbar-brand {
              color: #e74c3c;
            }

            .navbar-nav .nav-link {
              color: #e74c3c;
            }

            .col-md-6.mr-auto h2 {
              color: #4e745e;
            }

            .mb-5 {
              color: rgb(52, 108, 72);
            }

            .logo-container {
              position: fixed;
              bottom: 20px;
              right: 20px;
              z-index: 9999;
            }

            .logo-img {
              width: 100px;
              height: auto;
            }

            #post-ad,
            #contact-us {
              color: white;
            }

            `
          }
        </style>
      </Helmet>
      <section className="smart-scroll">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-dark">
            <a className="navbar-brand heading-black" href="/">Lostings</a>
            <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
              data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#post-ad">Post Ad</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      <section className="py-7 py-md-0 bg-hero" id="home">
        <div className="container">
          <div className="row vh-md-100">
            <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
              <h1 className="heading-black text-capitalize">Lostings.</h1>
              <p className="lead py-3">A Lost and Found Listing</p>
              <a href="{{ url_for('login') }}" className="btn btn-primary d-inline-flex flex-row align-items-center"
                target="_blank">
                <em className="ml-2" data-feather="arrow-right"></em>
                Get Started now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-7" id="features">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2 className="heading-black">ABOUT US</h2>
            </div>
          </div>

          <div className="row mt-6">
            <div className="col-md-6 mr-auto">
              <h2>Glimpse of our work</h2>
              <p className="mb-5">The Microsoft Innovation Club (MIC) at VIT Chennai is a dynamic and passionate technical
                club
                dedicated to fostering innovation and technological excellence.
                With a focus on web development, app development, AI, ML, and more, MIC provides a platform
                for students to explore and expand their skills in the ever-evolving field of technology.
                As a part of MIC, members collaborate on exciting projects, participate in workshops,
                and engage in hands-on learning experiences.
                Through various events and competitions, the club encourages creativity, critical thinking,
                and problem-solving abilities.
                The club also invites industry experts to deliver insightful talks and share their expertise,
                providing students with valuable insights into the latest trends and advancements.
                MIC strives to create a vibrant community of tech enthusiasts who are eager to make a difference
                in the world through their innovative ideas and projects. Join MIC to unleash your potential,
                broaden your horizons, and be a part of the technological revolution.</p>
            </div>
            <div className="col-md-5">
              <div className="slick-about">
                <img src="img/frontend-1.png" className="img-fluid rounded d-block mx-auto" alt="frontend team" />
                <img src="img/frontend-2.png" className="img-fluid rounded d-block mx-auto" alt="backend team" />
                <img src="img/frontend-3.jpg" className="img-fluid rounded d-block mx-auto" alt="president" />
                <img src="img/frontend-5.png" className="img-fluid rounded d-block mx-auto" alt="vice president" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-7 bg-dark section-angle top-right bottom-right" id="post-ad">
        <div className="container">
          <div className="row mt-6">
            <div className="col-md-4 mr-auto">
              <h3>Anything lost is always found.</h3>
              <p className="lead">
                "Lost: The beginning of an extraordinary journey to being found."
              </p>
            </div>
            <div className="col-md-7 offset-md-1">
              <div className="form-container bg-white rounded p-4">
                <h2>Post an Ad</h2>
                <form>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" name="name" required />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" name="email" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="item">Item Lost</label>
                    <input type="text" className="form-control" id="item" name="item" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" rows="3" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-7" id="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto text-center">
              <h2 className="heading-black">Contact Us</h2>
              <p className="mb-5">If you have any questions or inquiries, feel free to get in touch with us.</p>
            </div>
          </div>

          <div className="row mt-6">
            <div className="col-md-8 col-lg-6 mx-auto">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <a href="/">Lostings</a>
            </div>
            <div className="col-md-6 text-md-right">
              <p>&copy; 2023 Lostings. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="logo-container">
        <a href="https://micvit.in/" target="_blank" rel="noreferrer">
          <img className="logo-img" src={Logo} alt="MIC logo" />
        </a>
      </div>
    </div>
  );
}

export default home;
