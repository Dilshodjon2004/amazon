import { React } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo-white.png";
import usFlag from "../../assets/images/us.aad6efeb.svg";
import { GoLocation } from "react-icons/go";
import { BiCaretDown } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
const Header = () => {
  const { pathname } = useLocation();
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };
  if (pathname.includes("login") || pathname.includes("signup")) {
    return;
  }
  return (
    <div className="header">
      <div className="header-items__wrapper">
        <div className="header-logo__wrapper">
          <Link to="/">
            <img className="header-logo" src={logo} alt="amazon logo" />
          </Link>
        </div>
        <div className="header-delivery">
          <GoLocation />
          <div className="header-delivery__info">
            <span>Delivery to</span>
            <h4>Uzbekistan</h4>
          </div>
        </div>
        <div className="general-nav">
          <SearchBar />
        </div>
        <div className="header-account">
          <div
            className="language"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <img src={usFlag} alt="logo" />
            <BiCaretDown />
            <div
              className="language_bar"
              style={hover ? { display: "block" } : { display: "none" }}
            >
              <p>
                Change language
                <span>learn more</span>
              </p>
              <div className="language-option first">
                <input
                  type="radio"
                  name="languages"
                  id="eng_lang"
                  value="English"
                />
                <label htmlFor="eng_lang">English - EN</label>
              </div>
              <hr className="line" />
              <div className="language-option">
                <input
                  type="radio"
                  name="languages"
                  id="espanol_lang"
                  value="Espanol"
                />
                <label htmlFor="espanol">Espanol - ES</label>
              </div>
              <br />
              <div className="language-option">
                <input
                  type="radio"
                  name="languages"
                  id="chinese_lang"
                  value="Chinese"
                />
                <label htmlFor="chinese">Chinese - CH</label>
              </div>
              <br />
              <div className="language-option">
                <input
                  type="radio"
                  name="languages"
                  id="korean_lang"
                  value="Korean"
                />
                <label htmlFor="korean">Korean - KR</label>
              </div>
              <br />
              <div className="language-option">
                <input
                  type="radio"
                  name="languages"
                  id="uzbek_lang"
                  value="Uzbek"
                />
                <label htmlFor="uzbek">Uzbek - UZ</label>
              </div>
              <br />
              <div className="language-option">
                <input
                  type="radio"
                  name="languages"
                  id="russian_lang"
                  value="Russian"
                />
                <label htmlFor="russian">Russian - RU</label>
              </div>
              <br />
              <div className="language-option">
                <input
                  type="radio"
                  name="languages"
                  id="deutsch_lang"
                  value="Deutsch"
                />
                <label htmlFor="deutsch">Deutsch - DE</label>
              </div>
            </div>
          </div>
          <Link className="headerSignLink" to="/login">
            <div className="sign-in-out">
              <div className="sign">
                <span>Hello, Sign in</span>
                <h4>Account&Lists</h4>
              </div>
              <BiCaretDown />
            </div>
          </Link>
          <div className="orders">
            <div className="sign">
              <span>Returns</span>
              <h4>&Orders</h4>
            </div>
          </div>
          <Link to="#" className="cartLink">
            <div className="cart">
              <div className="counter">0</div>
              <AiOutlineShoppingCart />
              <h4>Cart</h4>
            </div>
          </Link>
        </div>
      </div>
      <div className="additonal-nav">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
