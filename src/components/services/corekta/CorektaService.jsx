import { Link } from "react-router-dom";
import styles from "./corektaService.module.css";

import heroImage from "../../../img/gallery/2.jpg";
import detailImageOne from "../../../img/gallery/5.jpg";
import detailImageTwo from "../../../img/gallery/8.jpg";

const points = [
  "Usuniecie swirl marks i drobnych rys",
  "Wydobycie glebi i odbicia lakieru",
  "Przygotowanie powierzchni pod dalsza ochrone",
];

export default function CorektaService() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroMedia}>
            <img src={heroImage} alt="Corekta lakieru" />
          </div>

          <div className={styles.heroContent}>
            <span className={styles.kicker}>Paint Reset</span>
            <h1 className={styles.title}>Corekta Lakieru</h1>
            <p className={styles.description}>
              To jedna z najbardziej efektownych uslug w detailingu. Corekta
              lakieru przywraca czystosc odbicia, mocniejszy polysk i wyglad,
              ktory od razu robi roznice.
            </p>
            <div className={styles.actions}>
              <Link to="/contact" className={styles.primaryButton}>
                Zapytaj o wycene
              </Link>
              <Link to="/uslugi" className={styles.secondaryButton}>
                Wroc do uslug
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.comparison}>
          <div className={styles.comparisonCard}>
            <span className={styles.label}>Przed</span>
            <p>
              Matowa powierzchnia, slady po myciu, mniejsza glebia koloru i
              brak czystego odbicia swiatla.
            </p>
          </div>

          <div className={styles.comparisonCard}>
            <span className={styles.label}>Po</span>
            <p>
              Wyrazniejszy polysk, gladsza powierzchnia i lakier, ktory wyglada
              swiezo, czysto i premium.
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
            <img src={detailImageOne} alt="Corekta detail 1" />
            <img src={detailImageTwo} alt="Corekta detail 2" />
          </div>
        </div>
      </div>
    </section>
  );
}
