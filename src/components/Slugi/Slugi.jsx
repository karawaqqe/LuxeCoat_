import { Link } from "react-router-dom";
import styles from "./uslugi.module.css";

import l from "../../img/slugi/ppf/ppflogo.jpg";
import ll from "../../img/slugi/corekta/corektalogo.jpg";
import lll from "../../img/uslugi/lll.jpg";

import detnew from "../../img/slugi/det/detnew.jpg";

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
    image: detnew,
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
          <h1 className={styles.title}>Usługi</h1>
        </div>

        <div className={styles.servicesHeader}>
          <h2 className={styles.sectionTitle}>Nasze usługi</h2>
          <p className={styles.sectionText}>
            Każda karta prowadzi do osobnej strony z informacjami o usłudze.
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
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <span className={styles.serviceArrow}>Zobacz więcej</span>
            </Link>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <div className={styles.ctaEdge}></div>
          <div className={styles.ctaCard}>
            <span className={styles.ctaLabel}>Szybki kontakt</span>
            <h3 className={styles.formTitle}>Skontaktuj się z nami</h3>
            <p className={styles.infoText}>
              Zróbmy dla Twojego auta coś, co będzie widać od pierwszego
              spojrzenia. Napisz do nas i ustalmy najlepszy wariant usługi.
            </p>
            <div className={styles.ctaActions}>
              <Link className={styles.ctaButton} to="/contact">
                Przejdź do kontaktu
              </Link>
              <a className={styles.ctaGhost} href="tel:+48507455558">
                +48 507 455 558
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uslugi;
