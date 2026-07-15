import Link from "next/link";
import styles from "./Grid.module.css";

export default function Grid({ tourist }: { tourist: Array<{ id: number; name: string; slug: string; imageUrl: string; location: string }> }) {
  return (
    <div className={styles.grid}>
      {tourist.map((item) => {
        const isThirdItem = item.id === 3;

        return (
          <div key={item.id}>
            <Link
              href={`/melhor/${item.slug}`}
              className={`${styles.itemLink} ${isThirdItem ? styles.featured : ""}`}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                width={100}
                height={100}
                className={styles.image}
              />
              <div className={styles.content}>
                <h3 className={styles.title}>{item.name}</h3>
                <p className={styles.location}>{item.location}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
