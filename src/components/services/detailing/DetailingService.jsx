import { Link } from "react-router-dom";
import styles from "./detailingService.module.css";

import heroImage from "../../../img/gallery/yyyy.jpg";
import detailImageOne from "../../../img/gallery/y.jpg";
import detailImageTwo from "../../../img/gallery/yyy.jpg";

const pillars = [
  "Wnetrze",
  "Nadwozie",
  "Detale",
];

const checklist = [
  "Indywidualne dopasowanie zakresu prac",
  "Dokladne odswiezenie powierzchni",
  "Finalny efekt premium i czystosc w szczegolach",
];

export default function DetailingService() {
  return (
    <section className={styles.page}>
      <div className={styles.gridBg}></div>
      <div className={styles.bgLine}></div>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>Full Experience</span>
            <h1 className={styles.title}>Detailing</h1>
            <p className={styles.description}>
              Detailing to pelne dopracowanie auta. Skupiamy sie nie tylko na
              czystosci, ale na odbiorze calego samochodu: od powierzchni,
              przez wnetrze, po finalny efekt wizualny.
            </p>
            <div className={styles.pillars}>
              {pillars.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className={styles.heroImage}>
            <img src={heroImage} alt="Detailing" />
          </div>
        </div>

        <div className={styles.contentRow}>
          <div className={styles.checklistCard}>
            <h2>Na czym polega detailing</h2>
            <ul>
              {checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.actions}>
              <Link to="/contact" className={styles.primaryButton}>
                Skontaktuj sie
              </Link>
              <Link to="/uslugi" className={styles.secondaryButton}>
                Wroc do uslug
              </Link>
            </div>
          </div>

          <div className={styles.galleryColumn}>
            <img src={detailImageOne} alt="Detailing detail 1" />
            <img src={detailImageTwo} alt="Detailing detail 2" />
          </div>
        </div>
      </div>
    </section>
  );
}
