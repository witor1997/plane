
"use client";

import { useRef } from "react";

import styles from "./page.module.css";

type ArgentinaCarouselProps = {
  images: string[];
  title: string;
};

export default function ArgentinaCarousel({ images, title }: ArgentinaCarouselProps) {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const scrollGallery = (direction: number) => {
    const gallery = galleryRef.current;

    if (!gallery) {
      return;
    }

    gallery.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <div className={styles.carouselContainer}>

  <button onClick={() => scrollGallery(-1)} aria-label="Imagem anterior">←</button>
  

  <div className={styles.gallery} ref={galleryRef}>


    {images.map((imageUrl, index) => (
      <img
        key={index}
        src={imageUrl}
        alt={`Imagem ${index + 1} de ${title}`}
        className={styles.carouselImage}
        loading="lazy"
      />
    ))}
  </div>
  <button onClick={() => scrollGallery(1)} aria-label="Próxima imagem">→</button>
</div>
  );
}