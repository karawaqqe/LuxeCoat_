import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./hero.module.css";

import heroVideo from "../../img/hero/backgrherooo.mp4";

const Hero = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const fullText = `LuxeCoat to studio detailingu premium we Wroclawiu. Specjalizujemy sie w korekcie lakieru, powlokach ceramicznych, detailingu oraz aplikacji folii ochronnych PPF. Pracujemy z mysla o efekcie koncowym, trwalosci i estetyce, ktora od razu robi wrazenie.`;

  const shortText = `${fullText.slice(0, 170)}...`;

  return (
    <section className={style.hero}>
      {/* VIDEO BACKGROUND */}
      <video
        className={style.hero__video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className={style.hero__overlay}></div>
      <div className={style.hero__grid}></div>

      <div className={style.hero__container}>
        <div className={style.hero__left}>
          <span className={style.hero__kicker}>Premium Auto Studio</span>
          <h1 className={style.hero__title}>LuxeCoat</h1>

          <p className={style.hero__text}>
            {isMobile ? (expanded ? fullText : shortText) : fullText}
          </p>

          {isMobile && (
            <button
              type="button"
              className={style.readMore}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Zwin" : "Czytaj dalej"}
            </button>
          )}

          <div className={style.hero__actions}>
            <Link to="/uslugi" className={style.hero__buttonPrimary}>
              Zobacz uslugi
            </Link>

            <a href="tel:+48609770890" className={style.hero__buttonGhost}>
              +48 609 770 890
            </a>
          </div>
        </div>

        <div className={style.hero__right}>
          <div className={style.hero__card}>
            <span className={style.hero__cardLabel}>Signature Finish</span>
            <p>
              Ostre formy, ciemny klimat i premium detailing.
              Tak ma wygladac pierwsze wrazenie.
            </p>
          </div>

          <div className={style.hero__stats}>
            <div>
              <strong>PPF</strong>
              <span>Ochrona lakieru</span>
            </div>

            <div>
              <strong>Ceramika</strong>
              <span>Polysk i ochrona</span>
            </div>

            <div>
              <strong>Detailing</strong>
              <span>Efekt premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;