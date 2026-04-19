import { Link } from "react-router-dom";
import styles from "./ppfService.module.css";

import heroImage from "../../../img/gallery/1.jpg";
import detailImageOne from "../../../img/gallery/4.jpg";
import detailImageTwo from "../../../img/gallery/7.jpg";

const stats = [
  { value: "PPF", label: "Ochrona frontu i newralgicznych stref" },
  { value: "PREMIUM", label: "Precyzyjna aplikacja i dopasowanie folii" },
  { value: "LONG TERM", label: "Zabezpieczenie na codzienne uzytkowanie" },
];

const zones = [
  "Maska, zderzak i lampy",
  "Progi, slupki i okolice klamek",
  "Wybrane elementy lub caly front auta",
];

export default function PpfService() {
  return (
    <section className={styles.page}>
      <div className={styles.bgLine}></div>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.kicker}>Impact Shield</span>
            <h1 className={styles.title}>PPF</h1>
            <p className={styles.description}>
              Folia PPF to usluga dla klientow, ktorzy chca chronic lakier przed
              odpryskami, rysami i sladem codziennego uzytkowania bez
              rezygnowania z estetyki auta.
            </p>
            <div className={styles.actions}>
              <Link to="/contact" className={styles.primaryButton}>
                Skontaktuj sie
              </Link>
              <Link to="/uslugi" className={styles.secondaryButton}>
                Wroc do uslug
              </Link>
            </div>
          </div>

          <div className={styles.heroMedia}>
            <img src={heroImage} alt="PPF" />
            <div className={styles.mediaBadge}>Stone-chip defense</div>
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
            <h2>Najczesciej zabezpieczamy</h2>
            <ul>
              {zones.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.galleryStack}>
            <img src={detailImageOne} alt="PPF detail 1" />
            <img src={detailImageTwo} alt="PPF detail 2" />
          </div>
        </div>
      </div>
    </section>
  );
}
