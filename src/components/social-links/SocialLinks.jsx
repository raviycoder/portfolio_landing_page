"use client"
import Link from "next/link";
import styles from "./social.module.css";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const SocialLinks = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  console.log("hello bro", theme, systemTheme);

  // To prevent hydration errors, we only render the component once it's mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) return null;
  return (
    <div className={styles.main}>
      <Link className={styles.link} href="#">
        <Image src={currentTheme === 'dark' ? "/FacebookWhite.svg":"/Facebook.svg"} alt="Facebook" width={30} height={30} />
      </Link>
      <Link className={styles.link} href="#">
        <Image src={currentTheme === 'dark' ? "/TwitterWhite.svg":"/Twitter.svg"} alt="Twitter" width={30} height={30} />
      </Link>
      <Link className={styles.link} href="#">
        <Image src={currentTheme === 'dark' ? "/InstagramWhite.svg":"/Instagram.svg"} alt="Instagram" width={30} height={30} />
      </Link>
      <Link className={styles.link} href="#">
        <Image src={currentTheme === 'dark' ? "/LinkedInWhite.svg":"/LinkedIn.svg"} alt="Linkedin" width={30} height={30} />
      </Link>
    </div>
  );
};

export default SocialLinks;
