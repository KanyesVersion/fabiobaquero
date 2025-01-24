import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const ContentLandingMenu = ({ children, title, category }) => {
  const { t } = useTranslation('articles-meta');

  return (
    <div className="
      w-full p-4 lg:p-4 flex flex-col gap-4 lg:gap-6 justify-between
      bg-white bg-opacity-70 backdrop-blur-sm lg:backdrop-blur-md lg:rounded-md shadow-[0_0_.5rem_.25rem_rgba(0,0,0,0.2)]"
    >
        <h2 className="text-2xl font-bold lg:text-4xl text-center">{title}</h2>
        {/* <div className="w-full h-[1px] bg-black bg-opacity-40"></div> */}
        <div className="flex flex-col rounded-md overflow-hidden">
            {children}
        </div>
        <Link
          to={`/${category}/all`}
          className="flex items-center self-center text-xl lg:text-xl lg:hover:pl-2 duration-150 text-blue-600"
        >
          {t('seeAllArt')} <i className="fa fa-chevron-right ml-2" aria-hidden="true"></i>
        </Link>
    </div>
  )
}

export default ContentLandingMenu