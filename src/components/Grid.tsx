import Link from "next/link";
import styles from "./Grid.module.css";

type TouristItem = {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  location: string;
  city?: string;
  country?: string;
  days?: string;
  price?: string;
};

export default function Grid({ tourist }: { tourist: TouristItem[] }) {
  return (
    <div className={styles.grid}>
      {tourist.map((item) => {
        const isThirdItem = item.id === 3;

        return (
          <div key={item.id}>
            <Link
              href={`/artigos/${item.slug}`}
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
                <div className={styles.infoCard}>
                  <div>
                    <span className={styles.label}>Cidade</span>
                    <strong>{item.city}</strong>
                  </div>
                  <div>
                    <span className={styles.label}>País</span>
                    <strong>{item.country}</strong>
                  </div>
                  <div>
                    <span className={styles.label}>Dias</span>
                    <strong>{item.days}</strong>
                  </div>
                  <div>
                    <span className={styles.label}>Preço</span>
                    <strong>{item.price}</strong>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
