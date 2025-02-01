import { changeLanguage } from "i18next";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next"

const HeaderLangs = ({ changeLang }) => {
  const { t } = useTranslation('header');

  return (
    <div className="flex">
      {/* Spanish */}
      <div 
        className="
        bg-redbrown1 text-beige1 flex justify-center items-center flex-1
          gap-2 py-4 px-4 hover:text-white lg:hover:bg-black cursor-pointer group rounded-l-lg"
        onClick={() => changeLanguage('es')}
      >
          <span className="text-lg">Español</span>
          <div className="w-6 rounded-[50%] overflow-hidden grid place-content-center relative">
            <img src='/assets/es.webp' className="w-full h-full"/>
          </div>
      </div>
      {/* English */}
      <div 
        className="
        bg-redbrown1 text-beige1 flex justify-center items-center flex-1
          gap-2 py-4 px-4 hover:text-white lg:hover:bg-black cursor-pointer group"
        onClick={() => changeLanguage('en')}
      >
          <span className="text-lg">English</span>
          <div className="w-6 rounded-[50%] overflow-hidden grid place-content-center relative">
            <img src='/assets/gb.webp' className="w-full h-full"/>
          </div>
      </div>
      {/* Ukrainian */}
      <div 
        className="
        bg-redbrown1 text-beige1 flex justify-center items-center flex-1
          gap-2 py-4 px-4 hover:text-white lg:hover:bg-black cursor-pointer group rounded-r-lg"
        onClick={() => changeLanguage('uk')}
      >
          <span className="text-lg">Українська</span>
          <div className="w-6 rounded-[50%] overflow-hidden grid place-content-center relative">
            <img src='/assets/uk.webp' className="w-full h-full"/>
          </div>
      </div>
    </div>
  )
}

export default HeaderLangs