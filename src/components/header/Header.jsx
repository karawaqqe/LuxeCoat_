import { useState } from "react";
import style from "./header.module.css";
import logo from "../../img/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={style.header}>
      <div className={style.header__inner}>
        <div className={style.header__left}>
          <img className={style.header__logo} src={logo} alt="Logo" />
        </div>

        <nav className={`${style.header__nav} ${menuOpen ? style.active : ""}`}>
          <ul className={style.header__list}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        <div className={style.header__right}>
          <span className={style.header__phone}>+48 609 770 890</span>

          <div className={style.burger} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
