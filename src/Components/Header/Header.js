import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../data/store";
import { auth } from "../../config/firebase";

export default function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png"
          className="header__logo"
          alt="Amazon logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionFirstLine">
              Hello, {user?.email || "Sign in"}
            </span>
            <span className="header__optionSecondLine">
              Accounts &amp; Lists
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionFirstLine">Returns</span>
          <span className="header__optionSecondLine"> &amp; Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionFirstLine">Try</span>
          <span className="header__optionSecondLine">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionSecondLine header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
