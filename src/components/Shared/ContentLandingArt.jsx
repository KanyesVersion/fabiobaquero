import { useTranslation } from "react-i18next";

const ContentLandingArt = ({ onClick, title, date, views }) => {
  const { t } = useTranslation('common');

  return (
    <div onClick={onClick} className="
      w-full py-1 pl-2 pr-1 lg:p-3 lg:hover:pl-4 lg:hover:pr-2
    bg-slate-100 lg:hover:bg-slate-200
    text-white flex justify-between cursor-pointer relative
      duration-100 border-b border-[#3004] last:border-none group"
    >
        {/* Title */}
        {/* CHECK fix overflow */}
        <span className="text-lg lg:text-2xl text-black flex items-center">{title}</span>

        {/* Date and views */}
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-end lg:items-stretch">
          <div className="
            px-2 py-1 flex-1 lg:flex-auto bg-[#375DC6] lg:group-hover:bg-[#264BB2]
            flex justify-center items-center
            text-sm lg:text-lg rounded-md"
          >
            <span>{date}</span>
          </div>
          {views !== null && <span className="flex-1 lg;flex-auto text-sm lg:text-xl bg-slate- py-1 lg:py-2 px-2 
            bg-[#375DC6] lg:group-hover:bg-[#264BB2] rounded-md flex items-center gap-2
          ">
            <i className="fa fa-eye" aria-hidden="true"></i><span>{views}</span>
          </span>}
        </div>
    </div>
  )
}

export default ContentLandingArt