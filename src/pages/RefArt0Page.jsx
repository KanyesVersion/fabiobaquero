import { useTranslation } from "react-i18next"
import AudioControls from "../components/Shared/AudioControls"
import Main from "../components/Shared/Main"
import Section from "../components/Shared/Section"
import ReflectCaption from "../components/Reflections/ReflectCaption"

const RefArt0Page = () => {
  const { t } = useTranslation('reflections');

  return (
    <>
      <Main>
          <Section>
            <h2 className="text-3xl lg:text-6xl font-bold text-center lg:text-left">{t('art0Title')}</h2>
            <div className="w-full lg:w-1/2 bg-black h-[300px] lg:h-[500px] lg:min-w-[520px] flex items-end rounded-md overflow-hidden mx-auto">
              <AudioControls src='/visita-audio.m4a' />
            </div>
            <ReflectCaption>Con esta reflexión, podemos ver que Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ex iste dignissimos mollitia modi dolor? Maiores officia pariatur dolorem labore aperiam dolor corporis alias, laborum numquam, temporibus fugiat possimus delectus. Incidunt nihil nam labore, non quasi iure mollitia dolore maiores molestias iste eaque ipsam id quam excepturi nesciunt inventore rem?</ReflectCaption>
          </Section>
        </Main>
    </>
  )
}

export default RefArt0Page