import tourist from "@/lib/tourist";
import styles from "./page.module.css";

export default function Page() {
  const item = tourist.find((t) => t.name.toLowerCase().includes("brasil"));
  if (!item) return <p>Destino não encontrado</p>;

  return (
    <main className={styles.container}>
      <h1>{item.name}</h1>
      <img src={item.imageUrl} alt={item.name} className={styles.hero} />
      <h4>{item.location}</h4>
      <p>{item.description}</p>
    </main>
  );
}
