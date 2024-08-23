import { useTheme } from 'next-themes';
import { useState } from 'react';
import styles from './theme.module.css';

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme === 'dark');

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
    setIsDark(!isDark);
  };

  return (
    <button className={styles.button} onClick={toggleTheme}>
      <svg
        width="30"
        height="30"
        id="lightIcon"
        className={isDark ? styles.lightIcon: ''}
      >
        <circle cx="15" cy="15" r="6" fill="currentColor" />
        <line
          id="ray"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          x1="15"
          y1="1"
          x2="15"
          y2="4"
        ></line>
        <use href="#ray" transform="rotate(45 15 15)" />
        <use href="#ray" transform="rotate(90 15 15)" />
        <use href="#ray" transform="rotate(135 15 15)" />
        <use href="#ray" transform="rotate(180 15 15)" />
        <use href="#ray" transform="rotate(225 15 15)" />
        <use href="#ray" transform="rotate(270 15 15)" />
        <use href="#ray" transform="rotate(315 15 15)" />
      </svg>
      <svg
        width="30"
        height="30"
        id="darkIcon"
        className={isDark ? '' : styles.darkIcon}
      >
        <path
          fill="currentColor"
          d="
          M 23, 5
          A 12 12 0 1 0 23, 25
          A 12 12 0 0 1 23, 5"
        />
      </svg>
    </button>
  );
};

export default ThemeToggleButton;
