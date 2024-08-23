"use client"
import styles from "./testimonials.module.css";
import Image from "next/image";
import Head from "next/head";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function Testimonials() {
  const itemsData = [
    {
      image: "/profile3.jpg",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      name: "Carvil",
      role: "CEO",
    },
    {
      image: "/profile2.jpg",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      name: "Gentlman",
      role: "CEO",
    },
    {
      image: "/profile1.jpg",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      name: "Hero",
      role: "CEO",
    },
    {
      image: "/profile1.jpg",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      name: "Hero",
      role: "CEO",
    },
  ]
  return (
    <>
      <section id="testimonials" className={styles.main}>
        <div className={styles.headingData}>
          <h1>Testimonials</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium
          </p>
        </div>
        <div className={styles.testimonialContent}>
          <Splide
            options={{
              type: "loop",
              gap: "4rem",
              focus: "center",
              perPage: 2,
            }}
            aria-label="My Favorite Images"
          >
            {itemsData.map((item, index)=>(<SplideSlide key={index}>
              <div className={styles.testimonialCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item.image}
                    alt="testimonial1"
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                </div>
                <div className={styles.textContent}>
                  <p>
                    <span>&quot;</span>{item.details}<span>&quot;</span>
                  </p>
                  <h2>{item.name}</h2>
                  <p>{item.role}</p>
                </div>
              </div>
            </SplideSlide>))}
          </Splide>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
