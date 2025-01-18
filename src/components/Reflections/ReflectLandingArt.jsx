import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const ReflectLandingArt = ({ to, title, date, views }) => {
  const { t } = useTranslation('reflections');

  return (
    <Link to={to} className="w-full p-2 lg:p-3 bg-[#E9DACC] 
      text-white flex gap-4 lg:hover:pl-4 lg:hover:pr-2
      lg:hover:bg-[#D0BDB2] duration-100 border-b border-[#3004] last:border-none
    ">
        <span className="text-md lg:text-2xl text-black flex items-center">{title}</span>
        <div className="flex flex-col text-xs lg:text-[1rem] bg-[#AD7E51] px-2 py-2 rounded-md gap-1">
          <span className="hidden lg:block">{t('written')}:</span>
          <span>{date}</span>
        </div>
        <span className="text-sm lg:text-xl bg-slate- py-1 px-3 
          bg-[#AD7E51] rounded-md flex items-center gap-2
        ">
          <i className="fa fa-eye" aria-hidden="true"></i><span>{views}</span>
        </span>
    </Link>
  )
}

export default ReflectLandingArt