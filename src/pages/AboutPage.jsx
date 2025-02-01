import { useTranslation } from "react-i18next"

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <main className="p-4 lg:p-8 bg-white lg:full-section lg:min-w-[1200px] grid place-content-center">
        <div className="w-full lg:w-2/3 text-lg lg:text-2xl lg:text-justify mx-auto">
          <div className="float-left mr-8 w-[45%] md:w-[30%] bg-beige1
            aspect-square rounded-[50%] overflow-hidden grid place-content-center
          ">
            <img src="/assets/profilepic.webp" className="w-full scale-[.6]"/>
          </div>
          <p>{t('longAboutMe')}</p>
        </div>
    </main>
  )
}

export default AboutPage