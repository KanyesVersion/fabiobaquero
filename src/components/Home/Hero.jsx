import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import LatestCard from "./LatestCard";

const Hero = () => {
  const { t } = useTranslation(['home', 'articles']);

  return (
    <section className="
      lg:full-section min-h-[680px] lg:min-w-[1364px] p-4 lg:p-8
      flex gap-14 lg:gap-8 flex-col lg:flex-row relative
      bg-[url('/assets/hero-img.webp')] bg-cover bg-bottom 
      before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-[#000b] before:to-transparent
    ">
      <div className="lg:h-full w-full lg:w-[55%] py-12 lg:py-0 lg:pb-24
        relative flex flex-col gap-10 lg:gap-12 justify-center items-center
      ">
        <h1 className="
          p-4 animate-slideDownSlow text-white text-4xl lg:text-7xl 
          text-center lg:text-center lg:leading-snug font-thin
        ">
          {t('welcome')}<br /> {t('greeting')}
        </h1>
        <Link
          to='/about'
          className="
            py-3 px-4 lg:py-6 lg:px-8 lg:hover:pl-10 lg:hover:pr-6 duration-200
            text-white text-2xl lg:text-3xl 
            bg-[#1099D4] rounded-2xl shadow-lg
            relative lg:absolute bottom-[7.5%] animate-fadeIn
            flex gap-4 items-center"
        >
          {t('who')}<i className="fa fa-chevron-right" aria-hidden="true"></i>
        </Link>
      </div>
      <div className="lg:h-full flex-1 flex flex-col gap-8">
        <LatestCard
          bgColor='#20202aa8'
          title={t('latestStudies')}
          titleColor='white'
          big={{
            title: t('articles:widow-of-nain'),
            url: '/studies/widow-of-nain',
            img: '/assets/widow-of-nain.webp'
          }}
          small={{
            title: t('articles:widow-of-nain'),
            url: '/studies/widow-of-nain',
            img: '/assets/widow-of-nain.webp'
          }}
        />
        <LatestCard
          bgColor='#ffffff85'
          title={t('latestReflections')}
          titleColor='black'
          big={{
            title: t('articles:visit-of-king'),
            url: '/reflections/visit-of-king',
            img: '/assets/visit-of-king-alt.webp'
          }}
          small={{
            title: t('articles:visit-of-king'),
            url: '/reflections/visit-of-king',
            img: '/assets/visit-of-king-alt.webp'
          }}
        />
      </div>
    </section>
  )
}

export default Hero