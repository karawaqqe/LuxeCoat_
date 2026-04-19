import style from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={style.footer}>
      <div className={style.footer__line}></div>
      <div className={style.footer__inner}>
        <div className={style.footer__brand}>
          <span className={style.footer__kicker}>LuxeCoat Studio</span>
          <h2 className={style.footer__logo}>LuxeCoat</h2>
          <p className={style.footer__desc}>
            Premium detailing studio. Ochrona, estetyka i efekt, ktory widac od
            pierwszego spojrzenia.
          </p>
        </div>

        <div className={style.footer__columns}>
          <div className={style.footer__group}>
            <span className={style.footer__label}>Nawigacja</span>
            <div className={style.footer__links}>
              <Link to="/">Strona glowna</Link>
              <Link to="/gallery">Galeria</Link>
              <Link to="/review">Opinie</Link>
              <Link to="/uslugi">Uslugi</Link>
              <Link to="/contact">Kontakt</Link>
            </div>
          </div>

          <div className={style.footer__group}>
            <span className={style.footer__label}>Kontakt</span>
            <div className={style.footer__meta}>
              <a href="tel:+48609770890">+48 609 770 890</a>
              <a href="mailto:kontakt@luxecoat.pl">kontakt@luxecoat.pl</a>
            </div>
          </div>
        </div>

        <div className={style.footer__bottom}>
          <span>(c) {new Date().getFullYear()} LuxeCoat</span>
        </div>
      </div>

      <button className={style.scrollTop} onClick={scrollToTop}>
        ^
      </button>
    </footer>
  );
};

export default Footer;
