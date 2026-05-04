import styles from "./privacyPolicy.module.css";

const cookieRows = [
  {
    name: "cookie-consent",
    purpose: "zapis zgody użytkownika",
    time: "do usunięcia",
  },
];

const sections = [
  {
    title: "1. Administrator danych",
    body: (
      <>
        <p>
          Administratorem serwisu LuxeCoat jest właściciel strony LuxeCoat z
          siedzibą we Wrocławiu, Polska.
        </p>
        <p>
          Kontakt z administratorem:
          <br />
          E-mail: <a href="mailto:kontakt@luxecoat.pl">kontakt@luxecoat.pl</a>
        </p>
      </>
    ),
  },
  {
    title: "2. Zakres zbieranych danych",
    body: (
      <>
        <p>
          Serwis może zbierać dane osobowe podawane dobrowolnie przez
          użytkownika za pomocą formularzy dostępnych na stronie, takich jak:
        </p>
        <ul>
          <li>formularz kontaktowy</li>
          <li>formularz opinii (recenzji)</li>
        </ul>
        <p>Zakres danych może obejmować:</p>
        <ul>
          <li>imię</li>
          <li>treść wiadomości</li>
          <li>ocenę (rating)</li>
        </ul>
        <p>
          Dane te są wykorzystywane wyłącznie w celu kontaktu z użytkownikiem
          lub publikacji opinii (po akceptacji).
        </p>
      </>
    ),
  },
  {
    title: "3. Sposób przetwarzania danych",
    body: (
      <p>
        Dane z formularzy są przesyłane za pomocą usługi EmailJS i trafiają
        bezpośrednio na skrzynkę e-mail administratora. Nie przechowujemy
        danych w bazie danych strony.
      </p>
    ),
  },
  {
    title: "4. Pliki cookies",
    body: (
      <>
        <p>Strona korzysta z plików cookies (tzw. „ciasteczek”).</p>
        <p>Rodzaje cookies:</p>
        <ul>
          <li>
            Niezbędne cookies — zapamiętują decyzję użytkownika dotyczącą zgody
            na cookies
          </li>
        </ul>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nazwa</th>
                <th>Cel</th>
                <th>Czas</th>
              </tr>
            </thead>
            <tbody>
              {cookieRows.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>{row.purpose}</td>
                  <td>{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: "5. Zarządzanie cookies",
    body: (
      <>
        <p>
          Podczas pierwszej wizyty wyświetlany jest baner cookies, który
          pozwala:
        </p>
        <ul>
          <li>zaakceptować cookies</li>
          <li>odrzucić cookies</li>
        </ul>
        <p>
          Użytkownik może również usunąć cookies ręcznie w ustawieniach
          przeglądarki.
        </p>
      </>
    ),
  },
  {
    title: "6. Podstawa prawna",
    body: (
      <>
        <p>Dane przetwarzane są na podstawie:</p>
        <ul>
          <li>
            zgody użytkownika (art. 6 ust. 1 lit. a RODO) — formularze i
            cookies
          </li>
          <li>
            uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO)
            — działanie strony
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Twoje prawa",
    body: (
      <>
        <p>Użytkownik ma prawo do:</p>
        <ul>
          <li>dostępu do swoich danych</li>
          <li>usunięcia danych</li>
          <li>cofnięcia zgody w dowolnym momencie</li>
          <li>wniesienia skargi do organu nadzorczego (UODO)</li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Usługi zewnętrzne",
    body: (
      <>
        <p>Strona może korzystać z usług:</p>
        <ul>
          <li>Google Maps — wyświetlanie lokalizacji</li>
          <li>Google Fonts — ładowanie czcionek</li>
        </ul>
        <p>Usługi te mogą przetwarzać anonimowe dane techniczne.</p>
      </>
    ),
  },
  {
    title: "9. Zmiany w polityce prywatności",
    body: (
      <p>
        Administrator zastrzega sobie prawo do wprowadzania zmian. Aktualna
        wersja zawsze będzie dostępna na tej stronie.
      </p>
    ),
  },
  {
    title: "10. Kontakt",
    body: (
      <p>
        W sprawach związanych z danymi osobowymi:
        <br />
        LuxeCoat
        <br />
        Wrocław, Polska
        <br />
        E-mail: <a href="mailto:kontakt@luxecoat.pl">kontakt@luxecoat.pl</a>
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <section className={styles.page}>
      <div className={styles.bgLine}></div>
      <div className={styles.bgShape}></div>

      <div className={styles.container}>
        <div className={styles.hero}>
          <span className={styles.kicker}>Polityka prywatności</span>
          <h1 className={styles.title}>POLITYKA PRYWATNOŚCI</h1>
          <p className={styles.update}>Ostatnia aktualizacja: 4 maja 2026</p>
        </div>

        <div className={styles.content}>
          {sections.map((section) => (
            <article key={section.title} className={styles.section}>
              <h2>{section.title}</h2>
              <div className={styles.sectionBody}>{section.body}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
