import { React } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-white.png";
import usFlag from "../../assets/images/us.aad6efeb.svg";
import { GoLocation } from "react-icons/go";
import { BiSearchAlt2, BiCaretDown } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
const Header = () => {
  const [selectedOption, setSelectedOption] = useState("all");
  const [hover, setHover] = useState(false);
  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };
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
        <div className="search-bar__wrapper">
          <select
            id="category"
            className="category"
            style={
              selectedOption.length <= 7
                ? { width: `${selectedOption.length * 14}px` }
                : { width: `${selectedOption.length * 10}px` }
            }
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="clothes">Clothes</option>
            <option value="smartphones">Smartphones</option>
            <option value="watches">Watches</option>
            <option value="laptops">Laptops</option>
            <option value="personal care">Personal Care</option>
          </select>
          <input
            type="search"
            id="search"
            className="search"
            placeholder="Search"
          />
          <div className="search-icon">
            <BiSearchAlt2 />
          </div>
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
                <label for="eng_lang">English - EN</label>
              </div>
              <hr className="line" />
              <div className="language-option">
                <input
                  type="radio"
                  name="languages"
                  id="espanol_lang"
                  value="Espanol"
                />
                <label for="espanol">Espanol - ES</label>
              </div>
              <br />
              <div className="language-option">
                <input
                  type="radio"
                  name="languages"
                  id="chinese_lang"
                  value="Chinese"
                />
                <label for="chinese">Chinese - CH</label>
              </div>
              <br />
              <div className="language-option">
                <input
                  type="radio"
                  name="languages"
                  id="korean_lang"
                  value="Korean"
                />
                <label for="korean">Korean - KR</label>
              </div>
              <br />
              <div className="language-option">
                <input
                  type="radio"
                  name="languages"
                  id="uzbek_lang"
                  value="Uzbek"
                />
                <label for="uxbek">Uzbek - UZ</label>
              </div>
              <br />
              <div className="language-option">
                <input
                  type="radio"
                  name="languages"
                  id="russian_lang"
                  value="Russian"
                />
                <label for="russian">Russian - RU</label>
              </div>
              <br />
              <div className="language-option">
                <input
                  type="radio"
                  name="languages"
                  id="deutsch_lang"
                  value="Deutsch"
                />
                <label for="deutsch">Deutsch - DE</label>
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
          <Link className="cartLink">
            <div className="cart">
              <div className="counter">0</div>
              <AiOutlineShoppingCart />
              <h4>Cart</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
