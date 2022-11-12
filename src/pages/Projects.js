import React, { useState } from "react";
// import "../styling/About.scss";
import { NavLink } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaEye,
} from "react-icons/fa";
import img1 from "../images/project-1.jpg";
import img2 from "../images/project-2.jpg";
import img3 from "../images/project-3.jpg";
import img4 from "../images/project-4.jpg";
import img5 from "../images/project-5.jpg";
import img6 from "../images/project-6.jpg";

const Projects = () => {
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
        <section className="projects">
          <div className="projects__bio-image">
            <h1 className="text-secondary">My Projects</h1>
          </div>

          <div className="projects__items">
            <div className="projects__item">
              <img src={img1} alt="My Project" />
              <div className="projects__buttons">
                <a href="#!" className="projects__btn">
                  <FaEye /> Preview
                </a>
                <a href="#!" className="projects__btn">
                  <FaGithub /> Github
                </a>
              </div>
            </div>

            <div className="projects__item">
              <img src={img2} alt="My Project" />
              <div className="projects__buttons">
                <a href="#!" className="projects__btn">
                  <FaEye /> Preview
                </a>
                <a href="#!" className="projects__btn">
                  <FaGithub /> Github
                </a>
              </div>
            </div>

            <div className="projects__item">
              <img src={img3} alt="My Project" />
              <div className="projects__buttons">
                <a href="#!" className="projects__btn">
                  <FaEye /> Preview
                </a>
                <a href="#!" className="projects__btn">
                  <FaGithub /> Github
                </a>
              </div>
            </div>

            <div className="projects__item">
              <img src={img4} alt="My Project" />
              <div className="projects__buttons">
                <a href="#!" className="projects__btn">
                  <FaEye /> Preview
                </a>
                <a href="#!" className="projects__btn">
                  <FaGithub /> Github
                </a>
              </div>
            </div>

            <div className="projects__item">
              <img src={img5} alt="My Project" />
              <div className="projects__buttons">
                <a href="#!" className="projects__btn">
                  <FaEye /> Preview
                </a>
                <a href="#!" className="projects__btn">
                  <FaGithub /> Github
                </a>
              </div>
            </div>

            <div className="projects__item">
              <img src={img6} alt="My Project" />
              <div className="projects__buttons">
                <a href="#!" className="projects__btn">
                  <FaEye /> Preview
                </a>
                <a href="#!" className="projects__btn">
                  <FaGithub /> Github
                </a>
              </div>
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

export default Projects;
