import styles from "./Title.module.css";

const Title = ({ title }: { title: string }) => (
  <h1 className={styles.title}>{title}</h1>
);

export default Title;
