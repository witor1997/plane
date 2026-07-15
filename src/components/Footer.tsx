import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>&copy; {new Date().getFullYear()} tourist BH.direito reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;