import { Link } from "react-router-dom";
import HeaderLangs from "./HeaderLangs";
import Navbar from "./Navbar";
import Burger from "./Burger";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
    console.log(menuVisible);
  }
  const hideMenu = () => {
    setMenuVisible(false);
  }

  return (
    <header className="h-header-height bg-beige1 flex items-center text-2xl text-[#3009] font-bold sticky top-0 z-50">
        {/* to add a logo or name */}
        <Link to="/" onClick={hideMenu} className="absolute left-1/2 translate-x-[-50%] lg:left-8 lg:translate-x-0">Fabio Baquero</Link>
        <Burger  onClick={toggleMenuVisibility}/>
        <div className="hidden lg:flex absolute right-4 items-center gap-8">
            <Navbar />
            <HeaderLangs />
        </div>
        {menuVisible && <BurgerMenu toggleMenuVisibility={toggleMenuVisibility}/>}
    </header>
  )
}

export default Header