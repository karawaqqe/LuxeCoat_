import { useState, useEffect, useRef } from "react";
import style from "./gallery.module.css";
import { Link } from "react-router-dom";

import img1 from "../../img/gallery/1.jpg";
import img2 from "../../img/gallery/2.jpg";
import img3 from "../../img/gallery/3.jpg";
import img4 from "../../img/gallery/4.jpg";
import img5 from "../../img/gallery/5.jpg";
import img6 from "../../img/gallery/6.jpg";
import img7 from "../../img/gallery/7.jpg";
import img8 from "../../img/gallery/8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const startY = useRef(0);
  const endY = useRef(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getIndex = (i) => (i + images.length) % images.length;

  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
  };
  const handleTouchMove = (e) => {
    endY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = () => {
    const diff = startY.current - endY.current;
    if (diff > 50) setIndex((prev) => (prev + 1) % images.length);
    else if (diff < -50)
      setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section
      ref={sectionRef}
      className={`${style.gallery} ${isVisible ? style.visible : ""}`}
    >
      <div className={style.gallery__container}>
        <h2 className={style.gallery__title}>Nasza Praca</h2>

        <div
          className={style.gallery__slider}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((img, i) => {
            let className = style.gallery__slide;

            if (i === index) className += ` ${style.active}`;
            else if (i === getIndex(index - 1)) className += ` ${style.prev}`;
            else if (i === getIndex(index + 1)) className += ` ${style.next}`;
            else if (i === getIndex(index - 2))
              className += ` ${style.farPrev}`;
            else if (i === getIndex(index + 2))
              className += ` ${style.farNext}`;
            else className += ` ${style.hidden}`;

            return (
              <div
                className={className}
                key={i}
                onClick={() => setFullscreen(img)}
              >
                <img src={img} alt={`gallery ${i}`} />
              </div>
            );
          })}
        </div>

        <Link to="/gallery" className={style.gallery__button}>
          Pokaż więcej
        </Link>
      </div>

      {fullscreen && (
        <div
          className={style.gallery__fullscreen}
          onClick={() => setFullscreen(null)}
        >
          <span className={style.gallery__close}>×</span>
          <img src={fullscreen} alt="fullscreen" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
