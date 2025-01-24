import { changeLanguage } from "i18next"
import { useTranslation } from "react-i18next"

const BurgerMenuLang = ({ cycleLangs }) => {
    const { t } = useTranslation('header')

    return (
        <div className="p-4 w-full bg-redbrown1 text-beige1 
            text-right text-xl flex items-center justify-end gap-4
        " onClick={cycleLangs}>
            <img src={t('flagUrl')} className="w-8 rounded-[50%]" />{t('headLangName')}
        </div>

    )
}

export default BurgerMenuLang