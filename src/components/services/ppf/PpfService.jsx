import { Link } from "react-router-dom";
import styles from "./ppfService.module.css";

import heroImage from "../../../img/gallery/y.jpg";
import detailImageOne from "../../../img/gallery/yyyy.jpg";
import detailImageTwo from "../../../img/gallery/yyyyyyy.jpg";

const stats = [
  { value: "PPF", label: "Ochrona frontu i newralgicznych stref" },
  { value: "PREMIUM", label: "Precyzyjna aplikacja i dopasowanie folii" },
  { value: "NA DŁUGO", label: "Zabezpieczenie na codzienne użytkowanie" },
];

const zones = [
  "Maska, zderzak i lampy",
  "Progi, słupki i okolice klamek",
  "Wybrane elementy lub cały front auta",
];

export default function PpfService() {
  return (
    <section className={styles.page}>
      <div className={styles.bgLine}></div>
      <div className={styles.gridBg}></div>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.kicker}>Ochrona lakieru</span>
            <h1 className={styles.title}>PPF</h1>
            <p className={styles.description}>
              Folia PPF to usługa dla klientów, którzy chcą chronić lakier przed
              odpryskami, rysami i śladem codziennego użytkowania bez
              rezygnowania z estetyki auta.
            </p>
            <div className={styles.actions}>
              <Link to="/contact" className={styles.primaryButton}>
                Skontaktuj się
              </Link>
              <Link to="/uslugi" className={styles.secondaryButton}>
                Wróć do usług
              </Link>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <img src={heroImage} alt="PPF" decoding="async" />
            <div className={styles.mediaBadge}>Ochrona przed odpryskami</div>
          </div>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((item) => (
            <div key={item.value} className={styles.statCard}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.detailSection}>
          <div className={styles.detailPanel}>
            <h2>Najczęściej zabezpieczamy</h2>
            <ul>
              {zones.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.galleryStack}>
            <img src={detailImageOne} alt="PPF detail 1" loading="lazy" decoding="async" />
            <img src={detailImageTwo} alt="PPF detail 2" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
