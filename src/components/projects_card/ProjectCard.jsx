"use client";
import Image from "next/image";
import styles from "./project.module.css";
import { useState } from "react";
function ProjectCard() {
  const [activeTab, setActiveTab] = useState(4); // Default to the first tab

  const tabs = [
    {
      name: "ALL",
      content: [
        { image: "/card1.png", heading:"All", content: "Content for Tab 1" },
        { image: "/card2.png", heading:"ALL", content: "Content for Tab 1" },
        { image: "/card3.png", heading:"ALL", content: "Content for Tab 1" },
      ],
    },
    {
      name: "UI/UX",
      content: [
        { image: "/card1.png", heading:"UI Design", content: "Content for Tab 1" },
        { image: "/card2.png", heading:"UI Design", content: "Content for Tab 1" },
        { image: "/card3.png", heading:"UI Design", content: "Content for Tab 1" },
      ],
    },
    {
      name: "App Design",
      content: [
        { image: "/card2.png", heading:"App Design", content: "Content for Tab 1" },
        { image: "/card3.png", heading:"App Design", content: "Content for Tab 1" },
        { image: "/card1.png", heading:"App Design", content: "Content for Tab 1" },
      ],
    },
    {
      name: "Graphic Design",
      content: [
        { image: "/card2.png", heading:"Graphic Design", content: "Content for Tab 1" },
        { image: "/card3.png", heading:"Graphic Design", content: "Content for Tab 1" },
        { image: "/card1.png", heading:"Graphic Design", content: "Content for Tab 1" },
      ],
    },
    {
      name: "Web Design",
      content: [
        { image: "/card2.png", heading:"Web Design", content: "Ecom Web Page Design" },
        { image: "/card3.png", heading:"Web Design", content: "Business Landing Page Design" },
        { image: "/card1.png", heading:"Web Design", content: "AirCalling Landing Page Design" },
      ],
    },
  ];
  return (
    <section id="projects" className={styles.main}>
      <div className={styles.headingData}>
        <h1>My Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className={styles.cards}>
        <div className={styles.tabContainer}>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`${styles.tabButton} ${
                activeTab === index ? styles.active : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className={styles.tabContent}>
            {tabs[activeTab].content.map((item,index)=>{
                return(
                    <div key={index} className={styles.card}>
                        <div className={styles.imageContainer}>
                        <Image className={styles.image} src={item.image} width={300} height={400} alt="project image" /></div>
                        <h3>{item.heading}</h3>
                        <p>{item.content}</p>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
}

export default ProjectCard;
