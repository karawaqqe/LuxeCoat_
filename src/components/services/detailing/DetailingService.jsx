import { Link } from "react-router-dom";
import styles from "./detailingService.module.css";

import backgroundVideo from "../../../img/hero/detaling.mp4";

const reasons = [
  "Większy komfort codziennej jazdy",
  "Zdrowsze i higieniczne środowisko",
  "Usunięcie bakterii i alergenów",
  "Odświeżenie zapachu samochodu",
  "Ochrona materiałów przed szybkim zużyciem",
  "Podniesienie wartości pojazdu przy sprzedaży",
];

const premiumFeatures = [
  "Dokładne odkurzanie całego wnętrza",
  "Czyszczenie plastików i elementów dekoracyjnych",
  "Mycie szyb od wewnątrz",
  "Pranie dywaników oraz wykładzin",
  "Pranie tapicerki materiałowej lub czyszczenie foteli",
  "Czyszczenie schowków, progów i bagażnika",
  "Dressing i zabezpieczenie plastików",
  "Odświeżenie wnętrza neutralizatorem zapachów",
];

const ultimateFeatures = [
  "Wszystko z pakietu Premium",
  "Wieloetapowe pranie całej tapicerki / pełne czyszczenie skóry",
  "Detailing każdego elementu pędzelkami",
  "Czyszczenie pasów bezpieczeństwa i podsufitki",
  "Czyszczenie nawiewów i trudno dostępnych szczelin",
  "Profesjonalne ozonowanie i dezynfekcja",
  "Impregnacja tapicerki lub zabezpieczenie skóry",
  "Hydrofobowe zabezpieczenie szyb",
  "Perfumowanie wnętrza premium scent",
];

const workValues = [
  "Bezpieczne środki klasy premium",
  "Delikatne szczotki, parownice i ekstrakcja",
  "Dobór metody do materiałów i stopnia zabrudzenia",
  "Efekt czystości, świeżości i realnego zabezpieczenia",
];

export default function DetailingService() {
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
          <div className={styles.heroMain}>
            <span className={styles.kicker}>Interior detailing</span>
            <h1 className={styles.title}>Luxecoat Interior Detailing</h1>
            <p className={styles.lead}>
              Pakiety detailingu wnętrza stworzyliśmy tak, aby dopasować poziom
              pielęgnacji do stanu samochodu i oczekiwanego efektu końcowego.
            </p>
            <p className={styles.description}>
              Zadbane wnętrze sprawia, że auto wygląda i pachnie jak nowe, a
              codzienna jazda staje się po prostu przyjemniejsza. To nie tylko
              estetyka, ale też higiena, komfort i realna ochrona materiałów.
            </p>

            <div className={styles.actions}>
              <Link to="/contact" className={styles.primaryButton}>
                Umów termin
              </Link>
              <Link to="/uslugi" className={styles.secondaryButton}>
                Wróć do usług
              </Link>
            </div>
          </div>

          <div className={styles.heroAside}>
            <div className={styles.heroNote}>
              <span className={styles.heroNoteLabel}>Najczęściej wybierany model pracy</span>
              <strong>Odświeżenie, renowacja i zabezpieczenie wnętrza w jednym spójnym procesie.</strong>
            </div>

            <div className={styles.heroFacts}>
              <div>
                <strong>Premium</strong>
                <span>5-7 godzin</span>
              </div>
              <div>
                <strong>Ultimate</strong>
                <span>1 dzień roboczy</span>
              </div>
              <div>
                <strong>Wrocław</strong>
                <span>Interior detailing premium</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionHead}>
          <div>
            <span className={styles.sectionKicker}>Dlaczego warto</span>
            <h2>Detailing wnętrza to więcej niż czyste auto</h2>
          </div>
          <p>
            Profesjonalny detailing kabiny poprawia komfort, porządkuje
            przestrzeń kierowcy i pasażerów oraz pozwala przywrócić wnętrzu
            poziom świeżości, który trudno osiągnąć zwykłym czyszczeniem.
          </p>
        </div>

        <div className={styles.editorialGrid}>
          <article className={styles.storyPanel}>
            <span className={styles.serviceLabel}>Pakiety detailingu wnętrza</span>
            <h3>Wybierz poziom pielęgnacji dopasowany do auta</h3>
            <p>
              Każdy samochód traktujemy indywidualnie. Dobieramy odpowiednią
              metodę czyszczenia do rodzaju materiałów, ich kondycji oraz stopnia
              zabrudzenia, aby uzyskać maksymalny efekt bez ryzyka uszkodzeń.
            </p>
            <p>
              Po naszej usłudze wnętrze ma być nie tylko czyste, ale też
              świeże, zabezpieczone i przyjemne w codziennym użytkowaniu.
            </p>
          </article>

          <div className={styles.reasonsGrid}>
            {reasons.map((item) => (
              <article key={item} className={styles.reasonCard}>
                <strong>{item}</strong>
              </article>
            ))}
          </div>
        </div>

        <article className={styles.processSection}>
          <div className={styles.sidePanel}>
            <span className={styles.serviceLabel}>Jak pracujemy</span>
            <h3>Premium środki, delikatne narzędzia i precyzja wykonania</h3>
            <p>
              Korzystamy z bezpiecznych środków klasy premium, delikatnych
              szczotek, parownic oraz urządzeń ekstrakcyjnych, dzięki czemu
              skutecznie usuwamy zabrudzenia bez ryzyka uszkodzeń.
            </p>
          </div>

          <div className={styles.contentPanel}>
            <div className={styles.processHead}>
              <h4>Na czym opieramy pracę</h4>
              <p>
                Zamiast przypadkowego czyszczenia pracujemy według konkretnego
                procesu, który pozwala osiągnąć efekt premium bez ryzyka dla
                materiałów i wykończeń.
              </p>
            </div>

            <div className={styles.stepsGrid}>
              {workValues.map((item) => (
                <div key={item} className={styles.stepCard}>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className={styles.packageStack}>
          <article className={styles.packageBlock}>
            <div className={styles.sidePanel}>
              <span className={styles.serviceLabel}>Najczęściej wybierany</span>
              <h3>Pakiet Premium</h3>
              <p>
                Kompleksowe odświeżenie i dogłębne czyszczenie wnętrza dla
                właścicieli, którzy chcą uzyskać efekt salonowego wnętrza bez
                wchodzenia w pełną renowację.
              </p>

              <div className={styles.metaStrip}>
                <span>⏱ 5-7 godzin</span>
                <span>★ od 699 zł</span>
              </div>
            </div>

            <div className={styles.contentPanel}>
              <div className={styles.packageHead}>
                <h4>Zakres pakietu</h4>
                <span className={styles.packageTag}>Efekt salonowego wnętrza</span>
              </div>
              <div className={styles.featureList}>
                {premiumFeatures.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className={styles.packageFooter}>
                <strong>Kompleksowe odświeżenie i dogłębne czyszczenie</strong>
              </div>
            </div>
          </article>

          <article className={`${styles.packageBlock} ${styles.packageBlockPremium}`}>
            <div className={styles.sidePanel}>
              <span className={styles.serviceLabel}>Pełna renowacja</span>
              <h3>Pakiet Ultimate</h3>
              <p>
                Pełna renowacja, dezynfekcja i zabezpieczenie wnętrza klasy
                premium dla samochodów wymagających maksymalnego poziomu
                dopracowania.
              </p>

              <div className={styles.metaStrip}>
                <span>⏱ 1 dzień roboczy</span>
                <span>★ od 1199 zł</span>
              </div>
            </div>

            <div className={styles.contentPanel}>
              <div className={styles.packageHead}>
                <h4>Zakres pakietu Ultimate</h4>
                <span className={styles.packageTag}>Pełna renowacja premium</span>
              </div>
              <div className={styles.featureList}>
                {ultimateFeatures.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className={styles.packageFooter}>
                <strong>Pełna renowacja, dezynfekcja i zabezpieczenie</strong>
              </div>
            </div>
          </article>
        </div>

        <article className={styles.aboutSection}>
          <div className={styles.aboutIntro}>
            <span className={styles.sectionKicker}>O Luxecoat</span>
            <h2>Detailing premium zaczyna się tam, gdzie kończy się zwykła usługa</h2>
          </div>

          <div className={styles.aboutCopy}>
            <p>
              Luxecoat to miejsce stworzone z pasji do perfekcji, estetyki i
              nowoczesnej pielęgnacji samochodów. Specjalizujemy się w
              detailingu premium, korekcie lakieru, zabezpieczeniach
              ceramicznych, ochronie folią PPF oraz kompleksowej renowacji
              wnętrz.
            </p>
            <p>
              Naszym celem nie jest zwykłe czyszczenie auta. Tworzymy efekt
              samochodu, który wygląda lepiej niż w dniu odbioru z salonu.
              Każdy pojazd traktujemy indywidualnie, zwracając uwagę na detale,
              jakość materiałów i trwałość finalnego rezultatu.
            </p>
            <p>
              Łączymy doświadczenie, precyzję ręcznej pracy i profesjonalne
              technologie, aby samochód odzyskał charakter, elegancję i poczucie
              świeżości, które właściciel odczuwa przy każdym wejściu do środka.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
