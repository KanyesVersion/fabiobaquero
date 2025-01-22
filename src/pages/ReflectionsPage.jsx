import { useTranslation } from "react-i18next";
import ContentLandingMain from "../components/shared/ContentLandingMain";
import ContentLandingMenu from "../components/shared/ContentLandingMenu";
import ContentLandingArt from "../components/shared/ContentLandingArt";

const ReflectionsPage = () => {
  const { t } = useTranslation('reflections');

  return (
    <>
      <ContentLandingMain>
        <h1 className="content-land-title">{t('landingTitle')}</h1>
        <div className="flex w-full flex-1 flex-col lg:flex-row gap-12 lg:gap-0 lg:min-w-[1068px]">
            <div className="grid place-content-center lg:flex-1">
                <ContentLandingMenu title={t('landingMostRead')}>
                    <ContentLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ContentLandingArt>
                    <ContentLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ContentLandingArt>
                    <ContentLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ContentLandingArt>
                    <ContentLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ContentLandingArt>
                    <ContentLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ContentLandingArt>
                </ContentLandingMenu>
            </div>
            <div className="grid place-content-center flex-1 lg:border-l-[2px] border-gray-400 border-opacity-50">
                <ContentLandingMenu title={t('landingLast')}>
                    <ContentLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ContentLandingArt>
                    <ContentLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ContentLandingArt>
                    <ContentLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ContentLandingArt>
                    <ContentLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ContentLandingArt>
                    <ContentLandingArt to="/reflections/art-0" title={t('art0Title')} date={t('art0Date')} views={0}></ContentLandingArt>
                </ContentLandingMenu>
            </div>
        </div>
      </ContentLandingMain>
    </>
  )
}

export default ReflectionsPage