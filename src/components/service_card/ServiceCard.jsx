import Image from "next/image";
import styles from "./card.module.css";
const ServiceCard = () => {
  return (
    <section id="services" className={styles.main}>
      <div className={styles.headingData}>
        <h1>Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.mainCard}>
          <div className={styles.imageContainer}>
            <Image src="/image1.svg" alt="" width={70} height={70} />
          </div>
          <div className={styles.content}>
            <h3>Web Design</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </p>
          </div>
        </div>
        <div className={styles.mainCard}>
          <div className={styles.imageContainer}>
            <Image src="/image2.svg" alt="" width={70} height={70} />
          </div>
          <div className={styles.content}>
            <h3>Web Design</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </p>
          </div>
        </div>
        <div className={styles.mainCard}>
          <div className={styles.imageContainer}>
            <Image src="/image3.svg" alt="" width={70} height={70} />
          </div>
          <div className={styles.content}>
            <h3>Web Design</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </p>
          </div>
        </div>
        <div className={styles.mainCard}>
          <div className={styles.imageContainer}>
            <Image src="/image4.svg" alt="" width={70} height={70} />
          </div>
          <div className={styles.content}>
            <h3>Web Design</h3>
            <p>
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
