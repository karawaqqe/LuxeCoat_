import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import style from "./gallery.module.css";

import y from "../../img/gallery/y.jpg";
import yy from "../../img/gallery/yy.jpg";
import yyy from "../../img/gallery/yyy.jpg";
import yyyy from "../../img/gallery/yyyy.jpg";
import yyyyy from "../../img/gallery/yyyyy.jpg";
import yyyyyy from "../../img/gallery/yyyyyy.jpg";
import yyyyyyy from "../../img/gallery/yyyyyyy.jpg";
import yyyyyyyy from "../../img/gallery/yyyyyyyy.jpg";

const images = [y, yy, yyy, yyyy, yyyyy, yyyyyy, yyyyyyy, yyyyyyyy];

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const endX = useRef(0);
  const endY = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIndex = (i) => (i + images.length) % images.length;

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    endX.current = e.touches[0].clientX;
    endY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
    endY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const diffX = startX.current - endX.current;
    const diffY = startY.current - endY.current;

    if (Math.abs(diffX) < 50 || Math.abs(diffX) <= Math.abs(diffY)) {
      return;
    }

    if (diffX > 0) {
      setIndex((prev) => (prev + 1) % images.length);
    } else {
      setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`${style.gallery} ${isVisible ? style.visible : ""}`}
    >
      <div className={style.gallery__line}></div>
      <div className={style.gallery__container}>
        <div className={style.gallery__head}>
          <span className={style.gallery__kicker}>Realizacje</span>
          <h2 className={style.gallery__title}>Nasza praca</h2>
          <p className={style.gallery__intro}>
            Wybrane realizacje pokazujące detale wykończenia, głębię lakieru i
            efekt końcowy, który widać od pierwszego spojrzenia.
          </p>
        </div>

        <div
          className={style.gallery__slider}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((img, i) => {
            let className = style.gallery__slide;

            if (i === index) {
              className += ` ${style.active}`;
            } else if (i === getIndex(index - 1)) {
              className += ` ${style.prev}`;
            } else if (i === getIndex(index + 1)) {
              className += ` ${style.next}`;
            } else if (i === getIndex(index - 2)) {
              className += ` ${style.farPrev}`;
            } else if (i === getIndex(index + 2)) {
              className += ` ${style.farNext}`;
            } else {
              className += ` ${style.hidden}`;
            }

            return (
              <div
                className={className}
                key={i}
                onClick={() => setFullscreen(img)}
              >
                <img
                  src={img}
                  alt={`galeria ${i + 1}`}
                  loading={i === index ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            );
          })}
        </div>

        <div className={style.gallery__footer}>
          <div className={style.gallery__progress}>
            {images.map((_, i) => (
              <span
                key={i}
                className={`${style.gallery__dot} ${
                  i === index ? style.gallery__dotActive : ""
                }`}
              />
            ))}
          </div>

          <Link to="/gallery" className={style.gallery__button}>
            Pokaż więcej
          </Link>
        </div>
      </div>

      {fullscreen && (
        <div
          className={style.gallery__fullscreen}
          onClick={() => setFullscreen(null)}
        >
          <span className={style.gallery__close}>+</span>
          <img src={fullscreen} alt="podgląd galerii" decoding="async" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
