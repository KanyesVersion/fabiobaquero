import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next"

 const HeaderLangs = () => {
  const { t, i18n } = useTranslation('header');

  return (
    <div className="bg-redbrown1 text-beige1 flex items-center gap-8 rounded-md py-1 px-4">
        <div className="flex flex-col text-[16px]">
            <span className="hover:text-white cursor-pointer" onClick={() => i18n.changeLanguage('en')}>{t('enName')}</span>
            <span className="hover:text-white cursor-pointer"  onClick={() => i18n.changeLanguage('es')}>{t('esName')}</span>
        </div>
        <i className="fa fa-language" aria-hidden="true"></i>
    </div>
  )
}

export default HeaderLangs