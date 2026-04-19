import { Link } from "react-router-dom";
import styles from "./ceramikaService.module.css";

import heroImage from "../../../img/gallery/3.jpg";
import detailImageOne from "../../../img/gallery/6.jpg";
import detailImageTwo from "../../../img/gallery/2.jpg";

const specs = [
  "Hydrofobowosc i latwiejsza pielegnacja",
  "Mocniejszy polysk i szklisty efekt",
  "Dodatkowa ochrona na co dzien",
];

export default function CeramikaService() {
  return (
    <section className={styles.page}>
      <div className={styles.gloss}></div>
      <div className={styles.container}>
        <div className={styles.hero}>
          <span className={styles.kicker}>Gloss Layer</span>
          <h1 className={styles.title}>Ceramika</h1>
          <p className={styles.description}>
            Ceramika to propozycja dla klientow, ktorzy oczekuja czystego,
            szklistego efektu i latwiejszej pielegnacji auta po wykonanej
            usludze.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.leftColumn}>
            <div className={styles.heroMedia}>
              <img src={heroImage} alt="Ceramika" />
            </div>

            <div className={styles.actionBox}>
              <Link to="/contact" className={styles.primaryButton}>
                Umow konsultacje
              </Link>
              <Link to="/uslugi" className={styles.secondaryButton}>
                Wroc do uslug
              </Link>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.specGrid}>
              {specs.map((item) => (
                <div key={item} className={styles.specCard}>
                  <span className={styles.dot}></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className={styles.textPanel}>
              <h2>Kiedy warto wybrac ceramike</h2>
              <p>
                To usluga dla osob, ktore chca zachowac efekt wizualny na
                dluzej i jednoczesnie ulatwic sobie codzienne utrzymanie auta w
                dobrej kondycji.
              </p>
              <p>
                Ceramika bardzo dobrze sprawdza sie jako finalny etap po
                korekcie lakieru, ale moze rowniez stanowic samodzielne
                zabezpieczenie auta.
              </p>
            </div>

            <div className={styles.galleryRow}>
              <img src={detailImageOne} alt="Ceramika detail 1" />
              <img src={detailImageTwo} alt="Ceramika detail 2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
