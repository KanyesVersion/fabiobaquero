import { useTranslation } from "react-i18next"
import ReflectLandingArt from "./ReflectLandingArt"

const ReflectLandingSec = () => {
    const { t } = useTranslation('reflections');

    return (
    <section className="p-8 min-h-[600px] lg:full-section bg-[url('./assets/hero-img.jpg')] bg-black bg-opacity-45 bg-blend-darken bg-cover bg-bottom flex flex-col gap-[2rem]">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl text-center font-bold">{t('landingTitle')}</h1>
        <div className="flex w-full text-black flex-1 flex-col lg:flex-row gap-12 lg:gap-0">
            <div className="grid place-content-center flex-1">
                <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-[0_0_1rem_.5rem_rgba(0,0,0,0.3)]">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-4">{t('landingMostRead')}</h2>
                    {/* <div className="w-full h-[1px] bg-black bg-opacity-40"></div> */}
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                </div>
            </div>
            <div className="grid place-content-center flex-1 lg:border-l-[2px] border-gray-400 border-opacity-50">
                <div className="flex flex-col items-center bg-white p-4 rounded-md shadow-[0_0_1rem_.5rem_rgba(0,0,0,0.3)]">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-4">{t('landingLast')}</h2>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ReflectLandingSec