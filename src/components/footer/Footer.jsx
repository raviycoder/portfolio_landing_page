"use client"
import Image from "next/image";
import styles from "./footer.module.css";
import {Link} from "react-scroll/modules";
import SocialLinks from "../social-links/SocialLinks";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Footer = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  if (!mounted) return null;
  return (
    <footer style={{backgroundColor: currentTheme === 'dark' ? '#121212' : '#f8f8f8'}} className={styles.main}>
      <div className={styles.logo}>
        <div className={styles.icon}>
          <Image src="/Subtract.png" alt="logo" width={45} height={45} />
        </div>
        <div className={styles.text}>
          <p>
            <span className={styles.textM}>M</span>umair
          </p>
        </div>
      </div>
      <div className={styles.footerLinks}>
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
      </div>
      <div className={styles.social}>
        <SocialLinks />
      </div>
      <div className={styles.endContent}>
        <h3>
          © 2023 <span className={styles.spanText}>Mumair</span> All Rights Reserved , Inc.
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
