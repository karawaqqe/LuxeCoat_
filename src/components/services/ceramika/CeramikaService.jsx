import { Link } from "react-router-dom";
import styles from "./ceramikaService.module.css";

import backgroundVideo from "../../../img/hero/backgrherooo.mp4";

const benefits = [
  {
    title: "Silna hydrofobowość",
    text: "Brud, woda i osady nie przywierają do powierzchni tak łatwo.",
  },
  {
    title: "Ochrona przed UV i utlenianiem",
    text: "Lakier nie matowieje i nie traci głębi koloru.",
  },
  {
    title: "Odporność chemiczna",
    text: "Sól drogowa, kwaśne deszcze, detergenty i ptasie odchody nie niszczą lakieru.",
  },
  {
    title: "Mikrozarysowania pod kontrolą",
    text: "Codzienna eksploatacja staje się mniej inwazyjna dla powierzchni.",
  },
  {
    title: "Showroom finish",
    text: "Lakier staje się szklisty, głęboki i bardziej nasycony.",
  },
  {
    title: "Łatwiejsze mycie auta",
    text: "Samochód zdecydowanie dłużej pozostaje czysty.",
  },
];

const premiumCoatings = [
  {
    name: "GYEON MOHS / SYNCRO",
    text: "Zaawansowana twardość i niezwykła śliskość powierzchni.",
  },
  {
    name: "GTECHNIQ CRYSTAL SERUM",
    text: "Jedna z najbardziej cenionych powłok ceramicznych na rynku detailingowym.",
  },
  {
    name: "AQUA E-COATING PRO",
    text: "Świetna hydrofobowość, szklistość i wysoka odporność chemiczna.",
  },
];

const processSteps = [
  "Detailingowe mycie wieloetapowe",
  "Dekontaminacja lakieru",
  "Odtłuszczanie powierzchni",
  "Jedno lub wieloetapowa korekta lakieru",
  "Precyzyjna aplikacja wybranej powłoki",
  "Utwardzenie i kontrola końcowa",
];

const standardProtection = [
  "Promieniowanie UV",
  "Sól drogową",
  "Chemię i zabrudzenia",
  "Ptasie odchody i osady mineralne",
  "Lekkie mikrozarysowania eksploatacyjne",
];

const standardEffects = [
  "Mocny efekt hydrofobowy",
  "Wyraźne przyciemnienie i pogłębienie lakieru",
  "Łatwiejsze mycie pojazdu",
  "Długotrwały połysk",
  "Trwałość ochrony do 36 miesięcy",
];

const standardPackage = [
  "Detailingowe mycie wieloetapowe",
  "Dekontaminacja chemiczna i mechaniczna",
  "Przygotowanie powierzchni",
  "Jednoetapowa korekta / odświeżenie lakieru",
  "Aplikacja powłoki ceramicznej",
  "Utwardzenie i kontrola końcowa",
];

const premiumProtection = [
  "Utlenianie lakieru",
  "Agresywną chemię",
  "Osady drogowe",
  "Promieniowanie UV",
  "Trwałe zabrudzenia",
  "Codzienne zużycie eksploatacyjne",
];

const premiumEffects = [
  "Szklistość lakieru",
  "Ekstremalna hydrofobowość",
  "Głębia koloru",
  "Lustrzany połysk",
  "Trwałość ochrony do 60 miesięcy",
];

const premiumPackage = [
  "Bezpieczne mycie detailingowe",
  "Pełna dekontaminacja",
  "Wieloetapowa korekta lakieru",
  "Odtłuszczenie laboratoryjne",
  "Precyzyjna aplikacja powłoki premium",
  "Utwardzanie kontrolowane",
  "Inspekcja LED finish",
  "Instrukcja pielęgnacji + serwis pozabiegowy",
];

export default function CeramikaService() {
  return (
    <section className={styles.page}>
      <video
        className={styles.bgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className={styles.videoShade}></div>
      <div className={styles.gridBg}></div>
      <div className={styles.bgLine}></div>
      <div className={styles.bgShape}></div>

      <div className={styles.container}>
        <div className={styles.hero}>
          <span className={styles.kicker}>Ceramic coating</span>
          <h1 className={styles.title}>Ceramika</h1>
          <p className={styles.lead}>
            Powłoka ceramiczna to zaawansowana warstwa ochronna oparta na
            nanotechnologii, która wiąże się z lakierem pojazdu i tworzy trwałą,
            odporną barierę ochronną.
          </p>
          <p className={styles.description}>
            W przeciwieństwie do zwykłych wosków utrzymuje się nawet do 5 lat,
            zwiększa odporność lakieru na mikro zarysowania, chroni przed
            promieniowaniem UV i chemią drogową, a przy tym nadaje lakierowi
            efekt szklistości i głębokiego koloru.
          </p>
          <p className={styles.description}>
            To rozwiązanie dla właścicieli, którzy chcą, aby samochód wyglądał
            perfekcyjnie każdego dnia i zachował wyższą wartość na lata.
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

        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionKicker}>Dlaczego warto</span>
            <h2>Co zyskujesz dzięki powłoce ceramicznej?</h2>
          </div>
          <p>
            Ceramika nie daje wyłącznie połysku. To realna ochrona lakieru,
            łatwiejsza pielęgnacja i efekt premium, który zostaje z autem na
            dłużej.
          </p>
        </div>

        <div className={styles.editorialGrid}>
          <article className={styles.storyPanel}>
            <span className={styles.serviceLabel}>Czym jest powłoka ceramiczna</span>
            <h3>Trwała warstwa ochronna związana z lakierem</h3>
            <p>
              Powłoka ceramiczna tworzy twardą, śliską i odporną warstwę, która
              wspiera lakier w codziennym użytkowaniu i utrzymuje głębszy,
              bardziej nasycony wygląd auta.
            </p>
            <p>
              Dzięki temu samochód dłużej wygląda świeżo, jest prostszy w
              pielęgnacji i lepiej znosi kontakt z wodą, chemią, zabrudzeniami
              oraz typowymi warunkami drogowymi.
            </p>
          </article>

          <div className={styles.benefitsGrid}>
            {benefits.map((item) => (
              <article key={item.title} className={styles.benefitCard}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <article className={styles.brandSection}>
          <div className={styles.brandIntro}>
            <span className={styles.sectionKicker}>Premium systems</span>
            <h2>Pracujemy wyłącznie na powłokach premium</h2>
            <p>
              W naszej pracowni stosujemy wyłącznie sprawdzone, światowej klasy
              systemy zabezpieczeń. Każda aplikacja dobierana jest indywidualnie
              do rodzaju lakieru, sposobu użytkowania auta oraz oczekiwanego
              efektu końcowego.
            </p>
          </div>

          <div className={styles.brandGrid}>
            {premiumCoatings.map((item) => (
              <article key={item.name} className={styles.brandCard}>
                <span>Powłoka premium</span>
                <strong>{item.name}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </article>

        <article className={styles.processSection}>
          <div className={styles.sidePanel}>
            <span className={styles.serviceLabel}>Jak wygląda proces</span>
            <h3>Kompleksowa aplikacja, nie szybki zabieg</h3>
            <p>
              Poprawne przygotowanie powierzchni ma kluczowe znaczenie. Dzięki
              temu powłoka wiąże się z lakierem prawidłowo i osiąga maksymalną
              trwałość.
            </p>
          </div>

          <div className={styles.contentPanel}>
            <h4>Każda realizacja obejmuje</h4>
            <div className={styles.steps}>
              {processSteps.map((step) => (
                <div key={step} className={styles.stepCard}>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className={styles.packageStack}>
          <article className={styles.packageBlock}>
            <div className={styles.sidePanel}>
              <span className={styles.serviceLabel}>Ochrona do 3 lat</span>
              <h3>Pakiet ceramiczny standard</h3>
              <p>
                Idealne rozwiązanie dla osób, które chcą skutecznie
                zabezpieczyć lakier, poprawić wygląd samochodu i znacząco
                ułatwić codzienną pielęgnację.
              </p>
            </div>

            <div className={styles.contentPanel}>
              <h4>Przed czym chroni?</h4>
              <div className={styles.dualGrid}>
                <div>
                  <span>Ochrona</span>
                  <ul>
                    {standardProtection.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span>Efekt</span>
                  <ul>
                    {standardEffects.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.packageStrip}>
                {standardPackage.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>

          <article className={`${styles.packageBlock} ${styles.packageBlockPremium}`}>
            <div className={styles.sidePanel}>
              <span className={styles.serviceLabel}>Ochrona do 5 lat</span>
              <h3>Pakiet ceramiczny premium</h3>
              <p>
                Najbardziej zaawansowany poziom zabezpieczenia lakieru dla
                wymagających właścicieli samochodów premium, nowych aut oraz
                pojazdów po pełnej korekcie lakieru.
              </p>
            </div>

            <div className={styles.contentPanel}>
              <h4>Premium showroom finish</h4>
              <div className={styles.dualGrid}>
                <div>
                  <span>Maksymalna ochrona</span>
                  <ul>
                    {premiumProtection.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span>Efekt końcowy</span>
                  <ul>
                    {premiumEffects.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.brandMiniStrip}>
                <span>GYEON Q² MOHS EVO</span>
                <span>GTECHNIQ Crystal Serum</span>
                <span>AQUA E-Coating PRO</span>
              </div>

              <div className={styles.packageStrip}>
                {premiumPackage.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
