import React, { useState } from "react";
// import "../styling/About.scss";
import { NavLink } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const About = () => {
  const [spinner, setSpinner] = useState(true);
  console.log(spinner);
  return (
    <>
      <header>
        <div
          className="menu-btn"
          onClick={() => {
            if (spinner) {
              setSpinner(false);
            } else {
              setSpinner(true);
            }
          }}
        >
          <span
            className={spinner ? "menu-btn__burger" : "menu-btn__burger open"}
          ></span>
        </div>
        <nav className={spinner ? "nav" : "nav open"}>
          <ul className={spinner ? "menu-nav" : "menu-nav open"}>
            <li className={spinner ? "menu-nav__item" : "menu-nav__item open"}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "menu-nav__link active" : "menu-nav__link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className={spinner ? "menu-nav__item" : "menu-nav__item open"}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "menu-nav__link active" : "menu-nav__link"
                }
              >
                About Me
              </NavLink>
            </li>

            <li className={spinner ? "menu-nav__item" : "menu-nav__item open"}>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "menu-nav__link active" : "menu-nav__link"
                }
              >
                My Projects
              </NavLink>
            </li>

            <li className={spinner ? "menu-nav__item" : "menu-nav__item open"}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "menu-nav__link active" : "menu-nav__link"
                }
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="about">
          <div className="about__bio-image">
            <div className="about__bio">
              <h2 className="text-secondary">BIO</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos,
                architecto molestias? Expedita perspiciatis rem error ducimus
                dolores? Blanditiis, sint fugiat. Ducimus consectetur id impedit
                praesentium nemo, hic harum dolores ex.
              </p>
            </div>
          </div>

          <div className="jobs">
            <div className="jobs__job">
              <h2 className="text-secondary">2017 - Current</h2>
              <h3>Google</h3>
              <h6>Full Stack Developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                fugit ut illo minima laudantium quibusdam velit soluta
                veritatis, tempore architecto.
              </p>
            </div>

            <div className="jobs__job">
              <h2 className="text-secondary">2015 - 2017</h2>
              <h3>Microsoft</h3>
              <h6>Front End Developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                fugit ut illo minima laudantium quibusdam velit soluta
                veritatis, tempore architecto.
              </p>
            </div>

            <div className="jobs__job">
              <h2 className="text-secondary">2012 - 2015</h2>
              <h3>Web Design Co.</h3>
              <h6>Graphic Designer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                fugit ut illo minima laudantium quibusdam velit soluta
                veritatis, tempore architecto.
              </p>
            </div>
          </div>

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

export default About;
