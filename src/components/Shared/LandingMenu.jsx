import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const LandingMenu = ({ children, title }) => {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col gap-4 items-center bg-white p-4 rounded-md shadow-[0_0_1rem_.5rem_rgba(0,0,0,0.3)]">
        <h2 className="text-2xl font-bold lg:text-4xl text-center">{title}</h2>
        {/* <div className="w-full h-[1px] bg-black bg-opacity-40"></div> */}
        <div className="flex flex-col rounded-md overflow-hidden">
            {children}
        </div>
        <Link className="text md lg:text-xl lg:hover:pl-2 duration-150 text-blue-800"><i className="fa fa-chevron-right" aria-hidden="true"></i> {t('seeAllArt')}</Link>
    </div>
  )
}

export default LandingMenu