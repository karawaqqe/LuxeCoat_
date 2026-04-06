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
      <div className={style.footer__inner}>
        <div className={style.footer__top}>
          <h2 className={style.footer__logo}>LuxeCoat</h2>
          <p className={style.footer__desc}>
            Premium detailing studio. Ochrona i perfekcja w każdym detalu.
          </p>
        </div>

        <div className={style.footer__links}>
          <Link to="/">Strona główna</Link>
          <Link to="/gallery">Galeria</Link>
          <Link to="/review">Blog</Link>
          <Link to="/contact">Kontakt</Link>
        </div>

        <div className={style.footer__legal}>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/regulations">Regulations</Link>
        </div>

        <div className={style.footer__bottom}>
          <span>© {new Date().getFullYear()} LuxeCoat</span>
        </div>
      </div>

      <button className={style.scrollTop} onClick={scrollToTop}>
        ↑
      </button>
    </footer>
  );
};

export default Footer;