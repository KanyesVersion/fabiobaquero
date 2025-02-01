import { Link } from "react-router-dom";
import HeaderLangs from "./HeaderLangs";
import Navbar from "./Navbar";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";
import { useState, useRef } from "react";
import { changeLanguage } from "i18next";
import MobileLangs from "./MobileLangs";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  }
  const hideMenu = () => {
    setMenuVisible(false);
  }

  return (
    <header className="
      h-header-height w-screen lg:min-w-[1192px] bg-beige1 flex items-center text-2xl
      text-[#3009] font-bold sticky top-0 z-50 shadow-sm"
    >
        <Link
          to="/"
          className="absolute flex items-center gap-4 left-1/2 lg:left-8 translate-x-[-50%] lg:translate-x-0 text-sky-900"
          style={{ fontFamily: 'Nova Square, serif' }}
        >
          <div className="w-14 h-14 overflow-hidden rounded-[50%]">
            <img src="/assets/profilepic.webp" className="w-full -translate-y-8" />
          </div>
          <span className="text-sm lg:text-xl">FABIO BAQUERO</span>
        </Link>
        <Burger  onClick={toggleMenuVisibility}/>
        <div className="hidden lg:flex absolute right-4 items-center gap-8">
            <Navbar />
            <HeaderLangs />
        </div>
        {menuVisible && <BurgerMenu toggleMenuVisibility={toggleMenuVisibility} onClickOutside={hideMenu}/>}
    </header>
  )
}

export default Header