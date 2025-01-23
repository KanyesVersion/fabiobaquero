import { useTranslation } from "react-i18next";

const ContentLandingArt = ({ onClick, title, date, views }) => {
  const { t } = useTranslation('common');

  return (
    <div onClick={onClick} className="
      w-full py-1 pl-2 pr-1 lg:p-3 lg:hover:pl-4 lg:hover:pr-2
    bg-[#e9dbcf] lg:hover:bg-[#f2e6dc]
    text-white flex justify-between cursor-pointer relative
      duration-100 border-b border-[#3004] last:border-none"
    >
        {/* Title */}
        {/* CHECK fix overflow */}
        <span className="text-lg lg:text-2xl text-black flex items-center">{title}</span>

        {/* Date and views */}
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-end lg:items-stretch">
          <div className="flex-1 lg:flex-auto px-2 py-1 flex justify-center items-center text-sm lg:text-lg bg-[#AD7E51] rounded-md">
            {/* <span className="hidden lg:block">{t('written')}:</span> */}
            <span>{date}</span>
          </div>
          {views !== null && <span className="flex-1 lg;flex-auto text-sm lg:text-xl bg-slate- py-1 lg:py-2 px-2 
            bg-[#AD7E51] rounded-md flex items-center gap-2
          ">
            <i className="fa fa-eye" aria-hidden="true"></i><span>{views}</span>
          </span>}
        </div>
    </div>
  )
}

export default ContentLandingArt