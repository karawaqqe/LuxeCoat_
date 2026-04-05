import styles from "./social.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instagram from "../../img/social/instagram.jpg";
import tiktok from "../../img/social/tiktok.jpg";
import facebook from "../../img/social/facebook.jpg";

export default function SocialSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`${styles.social} ${visible ? styles.active : ""}`}>
      <div className={styles.container}>
        <h2 className={styles.social__title}>Śledź nas</h2>

        <p className={styles.social__text}>
          Bądź na bieżąco z naszymi najnowszymi projektami, wskazówkami i
          ekskluzywnymi ofertami.
        </p>

        <div className={styles.social__icons}>
          <a
            href="https://www.instagram.com/luxecoat_premium_auto_studio?igsh=MW15M252NG9iYm83aQ%3D%3D&utm_source=qr "
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social__item}
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.tiktok.com/@matsafei_vlad"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social__item}
          >
            <img src={tiktok} alt="tiktok" />
          </a>
          <a
            href="https://www.facebook.com/share/1L1hX1ppcp/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social__item}
          >
            <img src={facebook} alt="facebook" />
          </a>
        </div>

        {/* Ссылка-«кнопка» */}
        <Link to="/contact" className={styles.social__btn}>
          Skontaktuj Się Z Nami
        </Link>
      </div>
    </section>
  );
}
