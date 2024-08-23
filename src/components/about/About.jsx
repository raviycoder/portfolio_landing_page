import Image from "next/image";
import SocialLinks from "../social-links/SocialLinks";
import Button from "../button/Button";
import styles from "./about.module.css";
import Status from "../status/Status";

const About = () => {
  const SkillData = [
    { skillName: "UI/UX", percentage: 89 },
    { skillName: "Website Design", percentage: 79 },
    { skillName: "App Design", percentage: 95 },
    { skillName: "Graphic Design", percentage: 90 },
  ];
  return (
    <section id="about" className={styles.main}>
      <div className={styles.imageContent}>
        <div className={styles.imageContent2}>
          <div className={styles.imageContainer}>
            <Image
              src="/boy2.png"
              alt="Picture of the author"
              className={styles.image}
              width={800}
              height={800}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div className={styles.data}>
            {SkillData.map((data, index)=>( <Status key={index} skillName={data.skillName} percentage={data.percentage} />))}
         
        </div>
      </div>
    </section>
  );
};

export default About;
