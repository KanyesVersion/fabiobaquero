import { useTranslation } from "react-i18next"
import BurgerMenuItem from "./BurgerMenuItem"
import { useEffect, useRef, useState } from "react";
import BurgerMenuLang from "./BurgerMenuLang";

const BurgerMenu = ({ toggleMenuVisibility, onClickOutside, cycleLangs }) => {
    const { t } = useTranslation('header');
    const ref = useRef();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const handleClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                onClickOutside();
            }
        }
        
        if (isMounted) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [isMounted, onClickOutside]);

    return (
    <div ref={ref} className="w-screen absolute top-[100%] left-0 flex flex-col shadow-lg animate-slideDown">
        <BurgerMenuItem to='/studies' toggleMenuVisibility={toggleMenuVisibility}>{t('studies')}</BurgerMenuItem>
        <BurgerMenuItem to='/reflections' toggleMenuVisibility={toggleMenuVisibility}>{t('reflections')}</BurgerMenuItem>
        <BurgerMenuItem to='/donate' toggleMenuVisibility={toggleMenuVisibility}>{t('donate')}</BurgerMenuItem>
        <BurgerMenuLang cycleLangs={cycleLangs}/>
    </div>
    )
}

export default BurgerMenu