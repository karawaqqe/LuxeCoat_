import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./cookieBanner.module.css";

const COOKIE_CONSENT_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    setVisible(!savedConsent);
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setVisible(false);

    if (location.pathname !== "/polityka-prywatnosci") {
      navigate("/polityka-prywatnosci");
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <span className={styles.kicker}>Cookies</span>
        <h3 className={styles.title}>Szanujemy Twoją prywatność</h3>
        <p className={styles.text}>
          Strona korzysta z niezbędnych plików cookies, aby zapamiętać Twoją
          decyzję dotyczącą zgody. Szczegóły znajdziesz w{" "}
          <Link to="/polityka-prywatnosci">polityce prywatności</Link>.
        </p>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={styles.acceptButton}
          onClick={handleAccept}
        >
          Akceptuję
        </button>
        <button
          type="button"
          className={styles.declineButton}
          onClick={handleDecline}
        >
          Odrzuć
        </button>
      </div>
    </div>
  );
}
