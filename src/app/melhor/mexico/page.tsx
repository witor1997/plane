import { readdir } from "fs/promises";
import path from "path";

import tourist from "@/lib/tourist";
import MexicoCarousel from "./MexicoCarousel";
import styles from "./page.module.css";

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

async function getMexicoImages() {
  const folderPath = path.join(process.cwd(), "public", "mexico");
  const files = await readdir(folderPath);

  return files
    .filter((fileName) => imageExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((first, second) => first.localeCompare(second, "pt-BR", { numeric: true }))
    .map((fileName) => `/mexico/${fileName}`);
}

export default async function Page() {
  const item = tourist.find((t) => t.name.toLowerCase().includes("mexico"));

  if (!item) {
    return (
      <main className={styles.container}>
        <h1>Destino não encontrado</h1>
      </main>
    );
  }

  const images = await getMexicoImages();

  return (
    <main className={styles.container}>
      <h1>{item.name}</h1>
      <MexicoCarousel images={images} title={item.name} />
      <h4>{item.location}</h4>
      <p>{item.description}</p>
    </main>
  );
}

