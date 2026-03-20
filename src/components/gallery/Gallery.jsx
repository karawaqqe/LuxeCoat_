import { useState, useEffect, useRef } from "react";
import style from "./gallery.module.css";

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

  const startX = useRef(0);
  const endX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getIndex = (i) => (i + images.length) % images.length;

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startX.current - endX.current;

    if (diff > 50) {
      setIndex((prev) => (prev + 1) % images.length);
    } else if (diff < -50) {
      setIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className={style.gallery}>
      <div className={style.gallery__container}>
        <h2 className={style.gallery__title}>Gallery</h2>

        <div
          className={style.gallery__slider}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((img, i) => {
            let className = style.gallery__slide;

            if (i === index) className += ` ${style.active}`;
            else if (i === getIndex(index - 1))
              className += ` ${style.prev}`;
            else if (i === getIndex(index + 1))
              className += ` ${style.next}`;
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
                <img src={img} alt="gallery" />
              </div>
            );
          })}
        </div>
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