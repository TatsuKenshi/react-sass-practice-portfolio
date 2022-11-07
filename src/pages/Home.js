import React from "react";
import "../styling/Home.scss";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <header>
        <div className="menu-btn">
          <span className="menu-btn__burger"></span>
        </div>
        <nav>
          <ul className="menu-nav">
            <li className="menu-nav__item active">
              <NavLink to="/" className="menu-nav__link">
                Home
              </NavLink>
            </li>

            <li className="menu-nav__item">
              <NavLink to="/about" className="menu-nav__link">
                About Me
              </NavLink>
            </li>

            <li className="menu-nav__item">
              <NavLink to="/projects" className="menu-nav__link">
                My Projects
              </NavLink>
            </li>

            <li className="menu-nav__item">
              <NavLink to="/contact" className="menu-nav__link">
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="home">
          <h2>Hi! My Name Is</h2>
          <h1 className="home__name">
            John <span className="home__name--last">M. Doe</span>
          </h1>
          <h2>Web Developer, Designer & Programmer</h2>

          <div className="social-icons">
            <a href="#!">
              <FaTwitter />
            </a>
            <a href="#!">
              <FaFacebook />
            </a>
            <a href="#!">
              <FaInstagram />
            </a>
            <a href="#!">
              <FaGithub />
            </a>
          </div>

          <footer>&copy; Copyright 2022</footer>
        </section>
      </main>
    </>
  );
};

export default Home;
