import { Link } from "react-router-dom";
import styles from "./uslugi.module.css";

import l from "../../img/uslugi/l.jpg";
import ll from "../../img/uslugi/ll.jpg";
import lll from "../../img/uslugi/lll.jpg";

const featureCards = [
  {
    title: "Jak pracujemy",
    text: "Laczymy precyzje wykonania, bezpieczne procesy i premium kosmetyki, aby kazdy etap byl dopracowany.",
    image: l,
  },
  {
    title: "Dlaczego my",
    text: "Dbamy o efekt koncowy, detale i spojnosc wykonania, dzieki czemu auto wyglada swiezo i premium.",
    image: ll,
  },
  {
    title: "Szybki kontakt",
    text: "Skonsultuj zakres prac i termin realizacji. Odpowiemy szybko i pomozemy dobrac najlepsza usluge.",
    image: lll,
  },
];

const services = [
  {
    title: "PPF",
    image: l,
    to: "/uslugi/ppf",
  },
  {
    title: "Corekta Lakieru",
    image: ll,
    to: "/uslugi/corekta-lakieru",
  },
  {
    title: "Ceramika",
    image: lll,
    to: "/uslugi/ceramika",
  },
  {
    title: "Detailing",
    image: ll,
    to: "/uslugi/detailing",
  },
];

const Uslugi = () => {
  return (
    <section className={styles.uslugi}>
      <div className={styles.bgGlowOne}></div>
      <div className={styles.bgGlowTwo}></div>
      <div className={styles.bgLine}></div>

      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Uslugi</h1>
          <p className={styles.description}>
            Strona zaprojektowana tak, zeby od razu pokazac charakter marki:
            ciemno, ostro i premium. Kliknij wybrana usluge, aby przejsc na jej
            osobna strone.
          </p>
        </div>

        <div className={styles.infoGrid}>
          {featureCards.map((card, index) => (
            <div
              key={card.title}
              className={styles.infoBlock}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className={styles.infoImageWrap}>
                <img className={styles.infoImage} src={card.image} alt={card.title} />
              </div>
              <div className={styles.infoContent}>
                <h2 className={styles.infoTitle}>{card.title}</h2>
                <p className={styles.infoText}>{card.text}</p>
                {card.title === "Szybki kontakt" ? (
                  <Link className={styles.inlineLink} to="/contact">
                    Przejdz do kontaktu
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.servicesHeader}>
          <h2 className={styles.sectionTitle}>Nasze uslugi</h2>
          <p className={styles.sectionText}>
            Kazda karta prowadzi do osobnej strony z informacjami o usludze.
          </p>
        </div>

        <div className={styles.servicesSection}>
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.to}
              className={styles.serviceCard}
              style={{ animationDelay: `${0.8 + index * 0.12}s` }}
            >
              <div className={styles.serviceImageWrap}>
                <img
                  className={styles.serviceImage}
                  src={service.image}
                  alt={service.title}
                />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <span className={styles.serviceArrow}>Zobacz wiecej</span>
            </Link>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <div className={styles.ctaEdge}></div>
          <div className={styles.ctaCard}>
            <span className={styles.ctaLabel}>Direct Line</span>
            <h3 className={styles.formTitle}>Skontaktuj sie z nami</h3>
            <p className={styles.infoText}>
              Zrobmy dla Twojego auta cos, co bedzie widac od pierwszego
              spojrzenia. Napisz do nas i ustalmy najlepszy wariant uslugi.
            </p>
            <div className={styles.ctaActions}>
              <Link className={styles.ctaButton} to="/contact">
                Przejdz do kontaktu
              </Link>
              <a className={styles.ctaGhost} href="tel:+48609770890">
                +48 609 770 890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uslugi;
