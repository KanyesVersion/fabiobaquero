import { changeLanguage } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next"

 const HeaderLangs = () => {
  const { t, i18n } = useTranslation('header');
  const [lang, setLang] = useState('es');
  function toggleLang() {
    if (lang === 'es') {setLang('en');} else {setLang('es');}
    i18n.changeLanguage(lang);
  }

  return (
    <div className="bg-redbrown1 text-beige1 flex items-center gap-8 rounded-md py-4 px-4">
        <div className="flex flex-col text-[1.25rem]">
            <span className="hover:text-white cursor-pointer" onClick={toggleLang}>{t('headLangName')}</span>
        </div>
        <i className="fa fa-language" aria-hidden="true"></i>
    </div>
  )
}

export default HeaderLangs