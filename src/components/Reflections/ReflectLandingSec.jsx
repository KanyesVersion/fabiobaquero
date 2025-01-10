import { useTranslation } from "react-i18next"
import ReflectLandingArt from "./ReflectLandingArt"
import { Link } from "react-router-dom";
import LandingMenu from "../shared/LandingMenu";

const ReflectLandingSec = () => {
    const { t } = useTranslation('reflections', 'common');

    return (
    <section className="
        py-8 px-0 lg:px-8 lg:py-8 min-h-[600px] lg:full-section
        bg-[url('/assets/hero-img.webp')] bg-black bg-opacity-45 bg-blend-darken bg-cover bg-bottom 
        flex flex-col gap-[2rem]
    ">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl text-center font-bold">{t('landingTitle')}</h1>
        <div className="flex w-full flex-1 flex-col lg:flex-row gap-12 lg:gap-0 lg:min-w-[1068px]">
            <div className="grid place-content-center lg:flex-1">
                <LandingMenu title={t('landingMostRead')}>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                </LandingMenu>
            </div>
            <div className="grid place-content-center flex-1 lg:border-l-[2px] border-gray-400 border-opacity-50">
                <LandingMenu title={t('landingLast')}>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ReflectLandingArt>
                </LandingMenu>
            </div>
        </div>
    </section>
    )
}

export default ReflectLandingSec