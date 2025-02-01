import { changeLanguage } from "i18next"
import { useTranslation } from "react-i18next"

const BurgerMenuLangs = () => {
    const { t } = useTranslation('header')

    return (
        <div className="w-full bg-redbrown1 text-beige1 
            text-right text-sm flex items-stretch
        ">
            <div
                className="flex-1 p-4 flex items-center justify-around gap-2 border-r border-[#0003]"
                onClick={() => changeLanguage('es')}
            >
                <img src='/assets/es.webp' className="w-6 rounded-[50%]" /><span>Español</span>
            </div>
            <div
                className="flex-1 p-4 flex items-center justify-around gap-2 border-r border-[#0003]"
                onClick={() => changeLanguage('en')}
            >
                <img src='/assets/gb.webp' className="w-6 rounded-[50%]" /><span>English</span>
            </div>
            <div
                className="flex-1 p-2 flex items-center justify-around gap-2"
                onClick={() => changeLanguage('uk')}
            >
                <img src='/assets/uk.webp' className="w-6 rounded-[50%]" /><span>Українська</span>
            </div>
        </div>

    )
}

export default BurgerMenuLangs