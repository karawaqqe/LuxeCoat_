import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import style from "./header.module.css";
import logo from "../../img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className={`${style.header} ${scrolled ? style.scrolled : ""}`}>
      <div className={style.header__inner}>
        <div className={style.header__left}>
          <img
            className={style.header__logo}
            src={logo}
            alt="Logo"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <nav
          ref={navRef}
          className={`${style.header__nav} ${menuOpen ? style.active : ""}`}
        >
          <ul className={style.header__list}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Strona główna
              </Link>
            </li>
            <li>
              <Link to="/review" onClick={() => setMenuOpen(false)}>
                Opinie
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                Galeria
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="/uslugi" onClick={() => setMenuOpen(false)}>
                Usługi
              </Link>
            </li>
          </ul>
        </nav>

        <div className={style.header__right}>
          <span className={style.header__phone}>+48 507 455 558</span>
        </div>

        <div
          ref={burgerRef}
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
