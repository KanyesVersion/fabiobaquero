import { changeLanguage } from "i18next";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next"

const HeaderLangs = ({ toggleLang }) => {
  const { t } = useTranslation('header');

  return (
    <div className="
    bg-redbrown1 text-beige1 flex items-center
      gap-4 rounded-md py-4 px-4 hover:text-white cursor-pointer
    " onClick={toggleLang}>
        <div className="flex flex-col text-[1.25rem]">
            <span>{t('headLangName')}</span>
        </div>
        <img src={t('flagUrl')} className="w-8 rounded-[50%]"/>
    </div>
  )
}

export default HeaderLangs