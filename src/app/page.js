import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import ServiceCard from "@/components/service_card/ServiceCard";
import Footer from "@/components/footer/Footer";
import ProjectCard from "@/components/projects_card/ProjectCard";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <main className={styles.mainChild}>
        <Navbar />
        <Hero />
        <About />
        <ServiceCard />
        <ProjectCard />
      </main>
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
