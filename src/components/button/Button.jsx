import styles from "./button.module.css";
const Button = ({ children, customPadding }) => {
  return (
    <button className={styles.button} style={{ padding: customPadding }}>
      {children}
    </button>
  );
};

export default Button;
