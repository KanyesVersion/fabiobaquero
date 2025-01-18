import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Hero = () => {
  const { t } = useTranslation('home');

  return (
    <section className="lg:full-section min-h-[680px] lg:min-w-[1364px] p-8 flex gap-8 flex-col lg:flex-row relative
      bg-[url('/assets/hero-img.webp')] bg-cover bg-bottom 
      before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-[#000b] before:to-transparent
    ">
      <div className="lg:h-full w-full lg:w-[55%] py-8 lg:py-0 lg:pb-24
        relative flex flex-col gap-12 justify-center items-center
      ">
        <h1 className="
          animate-slideDownSlow text-white text-4xl lg:text-7xl 
          text-center lg:text-center lg:leading-snug font-bold
        ">
          {t('welcome')}<br /> {t('greeting')}
        </h1>
        <Link to='/about' className="text-white text-2xl lg:text-4xl 
          bg-[#1099D4] rounded-[1.5rem] shadow-lg
          py-5 lg:py-8 px-7 lg:px-10 lg:hover:pl-12 lg:hover:pr-8 duration-100
          relative lg:absolute bottom-[7.5%] animate-fadeIn
          flex gap-4 items-center
        ">
          {t('who')}<i className="fa fa-chevron-right" aria-hidden="true"></i>
        </Link>
      </div>
      <div className="lg:h-full flex-1 flex flex-col gap-8">
        <div className="flex-1 w-full p-4 lg:p-6 bg-white rounded-lg shadow-md bg-opacity-60 overflow-hidden relative">
          <h2 className="text-2xl lg:text-4xl text-black font-bold animate-slideRight">{t('studiesTitle')}</h2>
        </div>
        <div className="flex-1 w-full p-4 lg:p-6 bg-white rounded-lg shadow-md bg-opacity-60 overflow-hidden relative">
          <h2 className="text-2xl lg:text-4xl text-black font-bold animate-slideRight">{t('reflectionsTitle')}</h2>
        </div>
      </div>
    </section>
  )
}

export default Hero