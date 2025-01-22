import { useTranslation } from "react-i18next";

const ContentLandingArt = ({ onClick, title, date, views }) => {
  const { t } = useTranslation('common');

  return (
    <div onClick={onClick} className="
      w-full p-2 lg:p-3 lg:hover:pl-4 lg:hover:pr-2 bg-[#E9DACC] lg:hover:bg-[#e3c7a1]
    text-white flex justify-between cursor-pointer relative
      duration-100 border-b border-[#3004] last:border-none"
    >
        {/* Title */}
        {/* CHECK fix overflow */}
        <span className="text-md lg:text-2xl text-black flex items-center">{title}</span>

        {/* Date and views */}
        <div className="flex gap-2">
          <div className="flex justify-center items-center text-xs lg:text-lg bg-[#AD7E51] px-2 py-2 rounded-md gap-1">
            {/* <span className="hidden lg:block">{t('written')}:</span> */}
            <span>{date}</span>
          </div>
          {views !== null && <span className="text-sm lg:text-xl bg-slate- py-1 px-3 
            bg-[#AD7E51] rounded-md flex items-center gap-2
          ">
            <i className="fa fa-eye" aria-hidden="true"></i><span>{views}</span>
          </span>}
        </div>
    </div>
  )
}

export default ContentLandingArt