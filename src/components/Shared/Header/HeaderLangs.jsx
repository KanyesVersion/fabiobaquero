import { changeLanguage } from "i18next";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next"

const HeaderLangs = ({ toggleLang }) => {
  const { t } = useTranslation('header');

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