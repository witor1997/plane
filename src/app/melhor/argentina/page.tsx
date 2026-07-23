import { readdir } from "fs/promises";
import path from "path";

import tourist from "@/lib/tourist";
import ArgentinaCarousel from "./argentinaCarousel";
import styles from "./page.module.css";

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

async function getArgentinaImages() {
  const folderPath = path.join(process.cwd(), "public", "argentina");
  const files = await readdir(folderPath);

  return files
    .filter((fileName) => imageExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((first, second) => first.localeCompare(second, "pt-BR", { numeric: true }))
    .map((fileName) => `/argentina/${fileName}`);
}

export default async function Page() {
  const item = tourist.find((t) => t.name.toLowerCase().includes("argentina"));

  if (!item) return <p>Destino não encontrado</p>;

  const images = await getArgentinaImages();
  
  return(
<main className={styles.container}>
      <h1>{item.name}</h1>
      <ArgentinaCarousel images={images} title={item.name} />
      <h4>{item.location}</h4>
      <p>{item.description}</p>
    </main>
  );
}
