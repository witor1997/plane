import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Link href="/" className={styles.link}>
          <Image className={styles.imagem}
            src="/cabeca.png"
            alt="tourist BH"
            width={50}
            height={50}
          />
          <span>tourist BH</span>
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;