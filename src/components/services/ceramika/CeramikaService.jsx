import { Link } from "react-router-dom";
import styles from "./ceramikaService.module.css";

import heroImage from "../../../img/gall/ooooo.jpg";
import detailImageOne from "../../../img/gallery/yyyyy.jpg";
import detailImageTwo from "../../../img/gallery/yyyyyy.jpg";

const specs = [
  "Hydrofobowość i łatwiejsza pielęgnacja",
  "Mocniejszy połysk i szklisty efekt",
  "Dodatkowa ochrona na co dzień",
];

export default function CeramikaService() {
  return (
    <section className={styles.page}>
      <div className={styles.gloss}></div>
      <div className={styles.gridBg}></div>
      <div className={styles.container}>
        <div className={styles.hero}>
          <span className={styles.kicker}>Warstwa połysku</span>
          <h1 className={styles.title}>Ceramika</h1>
          <p className={styles.description}>
            Ceramika to propozycja dla klientów, którzy oczekują czystego,
            szklistego efektu i łatwiejszej pielęgnacji auta po wykonanej
            usłudze.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.leftColumn}>
            <div className={styles.heroMedia}>
              <img src={heroImage} alt="Ceramika" decoding="async" />
            </div>

            <div className={styles.actionBox}>
              <Link to="/contact" className={styles.primaryButton}>
                Umów konsultację
              </Link>
              <Link to="/uslugi" className={styles.secondaryButton}>
                Wróć do usług
              </Link>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.specGrid}>
              {specs.map((item) => (
                <div key={item} className={styles.specCard}>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className={styles.textPanel}>
              <h2>Kiedy warto wybrać ceramikę</h2>
              <p>
                To usługa dla osób, które chcą zachować efekt wizualny na
                dłużej i jednocześnie ułatwić sobie codzienne utrzymanie auta w
                dobrej kondycji.
              </p>
              <p>
                Ceramika bardzo dobrze sprawdza się jako finalny etap po
                korekcie lakieru, ale może również stanowić samodzielne
                zabezpieczenie auta.
              </p>
            </div>

            <div className={styles.galleryRow}>
              <img src={detailImageOne} alt="Ceramika detail 1" loading="lazy" decoding="async" />
              <img src={detailImageTwo} alt="Ceramika detail 2" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
