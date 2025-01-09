import { useTranslation } from "react-i18next"
import BurgerMenuItem from "./BurgerMenuItem"

const BurgerMenu = ({ toggleMenuVisibility }) => {
    const { t } = useTranslation('header');

    return (
    <div className="w-screen absolute top-[100%] left-0 flex flex-col animate-slideDown">
        <BurgerMenuItem to='/studies' toggleMenuVisibility={toggleMenuVisibility}>{t('studies')}</BurgerMenuItem>
        <BurgerMenuItem to='/reflections' toggleMenuVisibility={toggleMenuVisibility}>{t('reflect')}</BurgerMenuItem>
        <BurgerMenuItem to='/discipleship' toggleMenuVisibility={toggleMenuVisibility}>{t('discip')}</BurgerMenuItem>
        <BurgerMenuItem to='/more' toggleMenuVisibility={toggleMenuVisibility}>{t('donate')}</BurgerMenuItem>
    </div>
    )
}

export default BurgerMenu