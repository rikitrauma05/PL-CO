"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/img/slide1.jpg", alt: "Ambiente PL&CO" },
  { src: "/img/slide2.jpg", alt: "Attività PL&CO" },
  { src: "/img/slide3.jpg", alt: "Spazi PL&CO" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  function goTo(i: number) {
    const safeIndex = (i + slides.length) % slides.length;
    setIndex(safeIndex);
  }

  function next() {
    goTo(index + 1);
  }

  function prev() {
    goTo(index - 1);
  }

  useEffect(() => {
    const id = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="hero-carousel">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`hero-slide ${i === index ? "active" : ""}`}
        >
          <Image src={slide.src} alt={slide.alt} fill priority />
        </div>
      ))}

      <button
        type="button"
        className="hero-control prev"
        aria-label="Immagine precedente"
        onClick={prev}
      >
        &#10094;
      </button>
      <button
        type="button"
        className="hero-control next"
        aria-label="Immagine successiva"
        onClick={next}
      >
        &#10095;
      </button>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`hero-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
