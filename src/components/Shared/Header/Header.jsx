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

  const lang = useRef('es');
  const toggleLang = () => {
    lang.current = lang.current === 'es' ? 'en' : 'es';
    changeLanguage(lang.current);
  }

  return (
    <header className="h-header-height bg-beige1 flex items-center text-2xl text-[#3009] font-bold sticky top-0 z-50">
        <MobileLangs toggleLang={toggleLang}/>
        <Link to="/" className="absolute left-1/2 translate-x-[-50%] lg:left-8 lg:translate-x-0">Fabio Baquero</Link>
        <Burger  onClick={toggleMenuVisibility}/>
        <div className="hidden lg:flex absolute right-4 items-center gap-8">
            <Navbar />
            <HeaderLangs toggleLang={toggleLang} />
        </div>
        {menuVisible && <BurgerMenu toggleMenuVisibility={toggleMenuVisibility} onClickOutside={hideMenu} toggleLang={toggleLang}/>}
    </header>
  )
}

export default Header