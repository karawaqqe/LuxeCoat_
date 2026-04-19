import styles from "./social.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instagram from "../../img/social/instagram.jpg";
import tiktok from "../../img/social/tiktok.jpg";
import facebook from "../../img/social/facebook.jpg";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/luxecoat_premium_auto_studio?igsh=MW15M252NG9iYm83aQ%3D%3D&utm_source=qr",
    image: instagram,
    stat: "Backstage / reels / realizacje",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@matsafei_vlad",
    image: tiktok,
    stat: "Short form / efekt / transformacje",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1L1hX1ppcp/?mibextid=wwXIfr",
    image: facebook,
    stat: "Kontakt / aktualnosci / community",
  },
];

export default function SocialSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 180);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`${styles.social} ${visible ? styles.active : ""}`}>
      <div className={styles.container}>
        <div className={styles.head}>
          <span className={styles.kicker}>Online Presence</span>
          <h2 className={styles.social__title}>Sledz nas</h2>
          <p className={styles.social__text}>
            Zamiast zwyklych ikon masz bardziej dopracowana strefe sociali,
            ktora wyglada jak premium dashboard marki i lepiej pasuje do reszty
            serwisu.
          </p>
        </div>

        <div className={styles.social__grid}>
          {socials.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.social__item} ${styles[`variant${index + 1}`]}`}
            >
              <div className={styles.social__imageWrap}>
                <img src={item.image} alt={item.label} />
              </div>
              <div className={styles.social__content}>
                <span className={styles.social__label}>{item.label}</span>
                <p>{item.stat}</p>
                <span className={styles.social__arrow}>Otworz profil</span>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.ctaWrap}>
          <Link to="/contact" className={styles.social__btn}>
            Skontaktuj sie z nami
          </Link>
        </div>
      </div>
    </section>
  );
}
