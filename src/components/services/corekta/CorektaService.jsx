import { Link } from "react-router-dom";
import styles from "./corektaService.module.css";

import heroImage from "../../../img/gallery/yy.jpg";
import detailImageOne from "../../../img/gallery/yyyyy.jpg";
import detailImageTwo from "../../../img/gallery/yyyyyyyy.jpg";

const points = [
  "Usunięcie swirl marks i drobnych rys",
  "Wydobycie głębi i odbicia lakieru",
  "Przygotowanie powierzchni pod dalszą ochronę",
];

export default function CorektaService() {
  return (
    <section className={styles.page}>
      <div className={styles.gridBg}></div>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroMedia}>
            <img src={heroImage} alt="Korekta lakieru" decoding="async" />
          </div>

          <div className={styles.heroContent}>
            <span className={styles.kicker}>Reset lakieru</span>
            <h1 className={styles.title}>Korekta lakieru</h1>
            <p className={styles.description}>
              To jedna z najbardziej efektownych usług w detailingu. Korekta
              lakieru przywraca czystość odbicia, mocniejszy połysk i wygląd,
              który od razu robi różnicę.
            </p>
            <div className={styles.actions}>
              <Link to="/contact" className={styles.primaryButton}>
                Zapytaj o wycenę
              </Link>
              <Link to="/uslugi" className={styles.secondaryButton}>
                Wróć do usług
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.comparison}>
          <div className={styles.comparisonCard}>
            <span className={styles.label}>Przed</span>
            <p>
              Matowa powierzchnia, ślady po myciu, mniejsza głębia koloru i
              brak czystego odbicia światła.
            </p>
          </div>

          <div className={styles.comparisonCard}>
            <span className={styles.label}>Po</span>
            <p>
              Wyraźniejszy połysk, gładsza powierzchnia i lakier, który wygląda
              świeżo, czysto i premium.
            </p>
          </div>
        </div>

        <div className={styles.bottomGrid}>
          <div className={styles.panel}>
            <h2>Co zyskujesz</h2>
            <ul>
              {points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.gallery}>
            <img src={detailImageOne} alt="Korekta lakieru detail 1" loading="lazy" decoding="async" />
            <img src={detailImageTwo} alt="Korekta lakieru detail 2" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
