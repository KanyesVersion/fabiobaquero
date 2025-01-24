import { changeLanguage } from "i18next";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next"

const HeaderLangs = ({ cycleLangs }) => {
  const { t } = useTranslation('header');

  return (
    <div className="
    bg-redbrown1 text-beige1 flex items-center
      gap-4 rounded-md py-4 px-4 hover:text-white cursor-pointer group"
      onClick={cycleLangs}
    >
        <div className="flex flex-col text-[1.25rem]">
            <span>{t('headLangName')}</span>
        </div>
        <div className="w-8 rounded-[50%] overflow-hidden grid place-content-center relative">
          <div className="absolute inset-0 bg-black bg-opacity-50 lg:group-hover:bg-opacity-0 z-10"></div>
          <img src={t('flagUrl')} className="w-full h-full"/>
        </div>
    </div>
  )
}

export default HeaderLangs