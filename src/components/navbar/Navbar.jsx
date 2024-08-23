"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { Link } from "react-scroll/modules";
import Button from "../button/Button";
import ThemeToggle from "../theme/ThemeToggle";
import { useState } from "react";
const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className={styles.main}>
      <div className={styles.logo}>
        <div className={styles.icon}>
          <Image src="/Subtract.png" alt="logo" width={65} height={65} />
        </div>
        <div className={styles.text}>
          <p>
            <span className={styles.textM}>M</span>umair
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.toggleMenu} onClick={handleToggle}>
          {/* Hamburger Menu Icon */}
          {
            isNavbarOpen ? <span>&#10005;</span> : <span>&#9776;</span>
          }
        </div>
        <div
          className={`${styles.navbar} ${isNavbarOpen ? styles.active : ""}`}
        >
          <div className={styles.nav}>
            <Link
              className={styles.navLink}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="hero"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.navLink}
              to="about"
            >
              About Me
            </Link>
            <Link
              className={styles.navLink}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="services"
            >
              Servcies
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.navLink}
              to="projects"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.navLink}
              to="testimonials"
            >
              Testimonials
            </Link>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.navLink}
              to="contact"
            >
              Contact
            </Link>
          </div>
          <div className={styles.button}>
            <Button>Download CV</Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
