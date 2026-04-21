import { Link } from "react-router-dom";
import styles from "./corektaService.module.css";

import backgroundVideo from "../../../img/hero/corekataback.mp4";

const oneStepResults = [
  "Wyraźnie lepszy wygląd lakieru",
  "Usunięcie lekkich defektów na poziomie ok. 50-70%",
  "Poprawa połysku i głębi koloru",
  "Realizacja w 1 dzień",
];

const oneStepProcess = [
  "Lekka redukcja drobnych rys i zmatowień",
  "Jednoczesne wykończenie powierzchni na połysk",
  "Jeden etap pracy bez rozdzielania na cięcie i finishing",
];

const multiSteps = [
  {
    title: "Cięcie",
    text: "Używa się mocniejszych past i padów, aby usunąć większość rys, zmatowień i defektów. To najbardziej intensywny etap korekty.",
  },
  {
    title: "Polerowanie wykańczające",
    text: "Usuwa mikrorysy po pierwszym etapie, poprawia głębię koloru i wydobywa czysty połysk lakieru.",
  },
  {
    title: "Wykończenie",
    text: "Maksymalny gloss, efekt lustra, brak hologramów i idealne przygotowanie pod ceramikę lub PPF.",
  },
];

const multiBenefits = [
  "Maksymalny efekt wizualny",
  "Usunięcie jak największej liczby defektów",
  "Dokumentacja foto",
  "Realizacja 2-3 dni",
];

export default function CorektaService() {
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
          <span className={styles.kicker}>Paint correction</span>
          <h1 className={styles.title}>Korekta lakieru</h1>
          <p className={styles.lead}>
            Korekta lakieru to maszynowy proces polerowania, który eliminuje
            wirowe rysy, hologramy oraz pozwala usunąć lub znacząco zredukować
            wiele defektów na lakierze.
          </p>
          <p className={styles.description}>
            Przywraca lakierowi fabryczną głębię i lustrzany połysk. To
            fundament każdego profesjonalnego zabezpieczenia.
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
            <span className={styles.sectionKicker}>Zakres prac</span>
            <h2>Dobieramy poziom korekty do stanu lakieru</h2>
          </div>
          <p>
            Nie każde auto potrzebuje tak samo agresywnego polerowania. Dlatego
            zakres dobieramy po oględzinach, tak aby uzyskać mocny efekt bez
            niepotrzebnego obciążania lakieru.
          </p>
        </div>

        <div className={styles.processList}>
          <article className={styles.serviceBlock}>
            <div className={styles.sidePanel}>
              <span className={styles.serviceLabel}>Szybkie odświeżenie</span>
              <h3>Jednoetapowe polerowanie</h3>
              <p>
                Jednoetapowe polerowanie to szybkie odświeżenie lakieru,
                wykonywane w jednym etapie pracy.
              </p>
            </div>

            <div className={styles.contentPanel}>
              <h4>Na czym polega?</h4>
              <p>
                W trakcie jednego etapu używa się pasty i pada, które
                jednocześnie lekko redukują defekty oraz wykańczają powierzchnię
                na połysk. Nie rozdziela się procesu na cięcie i finishing,
                wszystko dzieje się w jednym kroku.
              </p>

              <div className={styles.dualGrid}>
                <div>
                  <span>Proces</span>
                  <ul>
                    {oneStepProcess.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span>Efekt</span>
                  <ul>
                    {oneStepResults.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className={`${styles.serviceBlock} ${styles.serviceBlockPremium}`}>
            <div className={styles.sidePanel}>
              <span className={styles.serviceLabel}>Standard premium</span>
              <h3>Wieloetapowa korekta</h3>
              <p>
                Wieloetapowa korekta lakieru to proces polerowania wykonywany w
                kilku oddzielnych krokach, aby uzyskać maksymalny efekt
                wizualny i usunąć jak najwięcej defektów z lakieru.
              </p>
            </div>

            <div className={styles.contentPanel}>
              <h4>Jak to wygląda w praktyce?</h4>
              <div className={styles.steps}>
                {multiSteps.map((step) => (
                  <div key={step.title} className={styles.stepCard}>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                ))}
              </div>

              <div className={styles.resultStrip}>
                {multiBenefits.map((item) => (
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
