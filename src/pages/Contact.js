import React, { useState } from "react";
// import "../styling/About.scss";
import { NavLink } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaMobileAlt,
  FaMarker,
} from "react-icons/fa";

const Contact = () => {
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
        <section className="contact">
          <h2>Contact Me...</h2>

          <div className="contact__list">
            <div className="contact__email">
              <FaEnvelope /> Email
              <div className="text-secondary">email@email.com</div>
            </div>

            <div className="contact__phone">
              <FaMobileAlt /> Phone
              <div className="text-secondary">+1 (555) 555-555</div>
            </div>

            <div className="contact__addreess">
              <FaMarker /> Address
              <div className="text-secondary">123 First St. Houston, Tx</div>
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

export default Contact;
