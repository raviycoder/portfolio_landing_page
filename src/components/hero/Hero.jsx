import Image from "next/image";
import Button from "../button/Button";
import styles from "./hero.module.css";
import SocialLinks from "../social-links/SocialLinks";
const Hero = () => {
  return (
    <section id="hero" className={styles.main}>
      <div className={styles.content}>
        <h3>Hi I am</h3>
        <h2>Muhammad Umair</h2>
        <div className={styles.text2}>
          <h1>UI & UX</h1>
          <h1>Designer</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div className={styles.button1}>
          <Button customPadding={"9px 40px"}>Hire Me</Button>
        </div>
      </div>
      <div className={styles.imageContent}>
        <div className={styles.imageContent2}>
          <div className={styles.imageContainer}>
            <Image
              src="/boy1.png"
              alt="Picture of the author"
              className={styles.image}
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
          <div className={styles.socialLinks}>
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
