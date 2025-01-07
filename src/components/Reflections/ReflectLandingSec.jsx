import { useTranslation } from "react-i18next"
import ReflectLandingArt from "./ReflectLandingArt"

const ReflectLandingSec = () => {
    const { t } = useTranslation('reflections');

    return (
    <section className="p-8 min-h-[600px] lg:full-section bg-[url('./assets/hero-img.jpg')] bg-black bg-opacity-65 bg-blend-darken bg-cover bg-bottom flex flex-col gap-[4rem]">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl text-center">{t('landingTitle')}</h1>
        <div className="flex w-full text-white flex-1 flex-col lg:flex-row gap-12 lg:gap-0">
            <div className="grid place-content-center flex-1">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl lg:text-4xl mb-4">{t('landingMostRead')}</h2>
                    <ReflectLandingArt to="/reflections/art-0">{t('art0Title')} | {t('art0Date')}</ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0">{t('art0Title')} | {t('art0Date')}</ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0">{t('art0Title')} | {t('art0Date')}</ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0">{t('art0Title')} | {t('art0Date')}</ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0">{t('art0Title')} | {t('art0Date')}</ReflectLandingArt>
                </div>
            </div>
            <div className="grid place-content-center flex-1 lg:border-l-[2px] border-gray-400 border-opacity-50">
            <   div className="flex flex-col items-center">
                    <h2 className="text-2xl lg:text-4xl mb-4">{t('landingLast')}</h2>
                    <ReflectLandingArt to="/reflections/art-0">{t('art0Title')} | {t('art0Date')}</ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0">{t('art0Title')} | {t('art0Date')}</ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0">{t('art0Title')} | {t('art0Date')}</ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0">{t('art0Title')} | {t('art0Date')}</ReflectLandingArt>
                    <ReflectLandingArt to="/reflections/art-0">{t('art0Title')} | {t('art0Date')}</ReflectLandingArt>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ReflectLandingSec