import { Link } from "react-router-dom";
import HeaderLangs from "./HeaderLangs";
import Navbar from "./Navbar";
import Burger from "./Burger";

const Header = () => {
  return (
    <header className="h-header-height bg-beige1 flex items-center text-2xl text-[#3009] font-bold sticky top-0 z-10">
        {/* to add a logo or name */}
        <div className="absolute left-1/2 translate-x-[-50%] lg:left-8 lg:translate-x-0"><Link to="/">Fabio Baquero</Link></div>
        <Burger />
        <div className="hidden lg:flex absolute right-4 items-center gap-6">
            <Navbar />
            <HeaderLangs />
        </div>
    </header>
  )
}

export default Header