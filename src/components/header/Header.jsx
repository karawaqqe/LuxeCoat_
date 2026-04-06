import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./header.module.css";
import logo from "../../img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${style.header} ${scrolled ? style.scrolled : ""}`}>
      <div className={style.header__inner}>
        <div className={style.header__left}>
          <img className={style.header__logo} src={logo} alt="Logo" onContextMenu={(e) => e.preventDefault()} / >
        </div>

        <nav className={`${style.header__nav} ${menuOpen ? style.active : ""}`}>
          <ul className={style.header__list}>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/review">Opinie</Link>
            </li>
          
            <li>
              <Link to="/gallery">Galeria</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>

        <div className={style.header__right}>
          <span className={style.header__phone}>+48 609 770 890</span>
        </div>
        <div
          className={`${style.burger} ${menuOpen ? style.burgerActive : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
