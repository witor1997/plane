"use client";

import { useRef } from "react";

import styles from "./page.module.css";

type MexicoCarouselProps = {
  images: string[];
  title: string;
};

export default function MexicoCarousel({ images, title }: MexicoCarouselProps) {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const scrollGallery = (direction: number) => {
    const gallery = galleryRef.current;

    if (!gallery) {
      return;
    }

    gallery.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <div className={styles.carousel}>
      <button type="button" className={`${styles.arrowButton} ${styles.arrowLeft}`} onClick={() => scrollGallery(-1)} aria-label="Imagem anterior">
        ←
      </button>

      <div ref={galleryRef} className={styles.gallery}>
        {images.map((imageUrl, index) => (
          <img key={`${imageUrl}-${index}`} src={imageUrl} alt={`${title} ${index + 1}`} className={styles.hero} />
        ))}
      </div>

      <button type="button" className={`${styles.arrowButton} ${styles.arrowRight}`} onClick={() => scrollGallery(1)} aria-label="Próxima imagem">
        →
      </button>
    </div>
  );
}