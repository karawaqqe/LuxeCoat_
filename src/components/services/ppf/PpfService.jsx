import { Link } from "react-router-dom";
import styles from "./ppfService.module.css";

import fullFrontImage from "../../../img/slugi/ppf/fullfrontppf.jpg";
import fullBodyImage from "../../../img/slugi/ppf/fullbodyppf.jpg";

const fullFrontItems = [
  "Zderzak przedni",
  "Maska cała lub częściowo",
  "Błotniki przednie",
  "Lusterka",
  "Reflektory",
  "Słupki A i początek dachu",
];

const fullFrontBenefits = [
  "80% uszkodzeń powstaje z przodu auta",
  "Auto dłużej wygląda jak nowe",
  "Tańsze niż lakierowanie lub pełne oklejenie",
  "Idealny balans ceny i ochrony",
];

const fullBodyItems = [
  "Wszystkie elementy lakierowane nadwozia",
  "Zderzaki przód i tył",
  "Maska, dach i klapa bagażnika",
  "Drzwi, błotniki i progi",
  "Lusterka oraz słupki",
  "Opcjonalnie elementy piano black i wnęki klamek",
];

const focusedZones = [
  "Progi wewnętrzne",
  "Wnęki klamek",
  "Próg załadunkowy",
  "Słupki piano black",
  "Ekrany i elementy piano black we wnętrzu",
];

const lifetimeItems = [
  "Samoregeneracja drobnych zarysowań pod wpływem ciepła",
  "Odporność na żółknięcie i promieniowanie UV",
  "Utrzymanie wysokiej przejrzystości przez wiele lat",
];

export default function PpfService() {
  return (
    <section className={styles.page}>
      <div className={styles.gridBg}></div>
      <div className={styles.bgLine}></div>
      <div className={styles.bgAccent}></div>

      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>Ochrona lakieru</span>
            <h1 className={styles.title}>Folia PPF</h1>
            <p className={styles.leadText}>
              Folia PPF to najbardziej zaawansowana metoda ochrony lakieru
              samochodowego. Niewidoczna, samoregenerująca się bariera o
              grubości ok. 200 mikronów.
            </p>
            <p className={styles.description}>
              Pochłania uderzenia kamieni, chroni przed rysami, ptasimi
              odchodami, żywicą i promieniowaniem UV, a przy tym pozostaje
              praktycznie niewidoczna na lakierze.
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
        </div>

        <div className={styles.scopeIntro}>
          <div>
            <span className={styles.sectionKicker}>Zakres PPF</span>
            <h2>Dobieramy ochronę do sposobu użytkowania auta</h2>
          </div>
          <p>
            Możemy zabezpieczyć tylko najbardziej narażone miejsca albo całe
            auto. Każdy wariant dobieramy pod budżet, oczekiwania i realne
            ryzyko uszkodzeń.
          </p>
        </div>

        <div className={styles.packageList}>
          <article className={styles.packageCard}>
            <div className={styles.packageMedia}>
              <img
                src={fullFrontImage}
                alt="Full Front PPF"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className={styles.packageContent}>
              <span className={styles.packageLabel}>Najczęściej wybierane</span>
              <h3>Full Front</h3>
              <p>
                Przód auta przyjmuje najwięcej uszkodzeń podczas jazdy,
                szczególnie na trasie i w mieście. Full Front zabezpiecza
                elementy, które najbardziej dostają od kamieni, owadów, chemii
                drogowej i drobnych otarć parkingowych.
              </p>

              <div className={styles.columns}>
                <div>
                  <h4>Co dokładnie chronimy</h4>
                  <ul>
                    {fullFrontItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Dlaczego klienci wybierają Full Front</h4>
                  <ul>
                    {fullFrontBenefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className={`${styles.packageCard} ${styles.packageCardAlt}`}>
            <div className={styles.packageMedia}>
              <img
                src={fullBodyImage}
                alt="Full Body PPF"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className={styles.packageContent}>
              <span className={styles.packageLabel}>Full Protect</span>
              <h3>Full Body</h3>
              <p>
                Full Body to kompleksowe zabezpieczenie całej powierzchni
                pojazdu przy użyciu bezbarwnej folii ochronnej PPF klasy
                premium. To najwyższy poziom ochrony dla osób, które oczekują
                pełnego zabezpieczenia i bezkompromisowej estetyki.
              </p>

              <div className={styles.columns}>
                <div>
                  <h4>Zakres ochrony</h4>
                  <ul>
                    {fullBodyItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Efekt</h4>
                  <p>
                    Całe auto pozostaje w stanie możliwie najbliższym
                    fabrycznemu, niezależnie od warunków użytkowania i
                    codziennego kontaktu z drogą.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className={styles.supportGrid}>
          <div className={styles.supportCard}>
            <h3>Miejsca newralgiczne</h3>
            <p>
              Dla klientów, którzy chcą zabezpieczyć konkretne punkty
              codziennego kontaktu, przygotowujemy ochronę elementów najbardziej
              narażonych na rysy.
            </p>
            <ul>
              {focusedZones.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.supportCard}>
            <h3>Interior PPF</h3>
            <p>
              Folia PPF sprawdza się również we wnętrzu samochodu, szczególnie
              na delikatnych powierzchniach typu piano black oraz ekranach.
            </p>
            <ul>
              {focusedZones.slice(4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.lifetimeCard}>
            <span className={styles.sectionKicker}>Trwałość</span>
            <h2>Jak długo służy folia PPF?</h2>
            <p>
              Profesjonalnie aplikowana folia PPF służy zazwyczaj od 7 do 10
              lat, zachowując swoje właściwości ochronne oraz estetyczny wygląd.
            </p>
            <ul>
              {lifetimeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.brandsCard}>
            <span className={styles.sectionKicker}>Folie premium</span>
            <h2>STEK oraz XPEL</h2>
            <p>
              Nasze studio pracuje na najwyższej jakości foliach ochronnych STEK
              oraz XPEL, czyli światowych liderach w branży PPF. Oferujemy
              również alternatywne rozwiązania innych producentów, aby dopasować
              ochronę do budżetu i oczekiwań klienta bez kompromisu w kwestii
              estetyki i zabezpieczenia lakieru.
            </p>
            <div className={styles.brandNames}>
              <strong>STEK</strong>
              <strong>XPEL</strong>
              <span>Premium PPF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
