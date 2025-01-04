import { useTranslation } from "react-i18next"
import AudioControls from "../components/AudioControls"
import Main from "../components/Main"
import Section from "../components/Section"
import ReflectCaption from "../components/ReflectCaption"

const Reflections = () => {
  const { t } = useTranslation('reflections');

  return (
    <>
      <Main>
          <Section>
            <h2 className="text-6xl font-bold">{t('art0Title')}</h2>
            <div className="w-2/3 bg-black h-[600px] flex items-end rounded-md overflow-hidden mx-auto">
              <AudioControls src='visita-audio.m4a' />
            </div>
            <ReflectCaption>Con esta reflexión, podemos ver que Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ex iste dignissimos mollitia modi dolor? Maiores officia pariatur dolorem labore aperiam dolor corporis alias, laborum numquam, temporibus fugiat possimus delectus. Incidunt nihil nam labore, non quasi iure mollitia dolore maiores molestias iste eaque ipsam id quam excepturi nesciunt inventore rem?</ReflectCaption>
          </Section>
        </Main>
    </>
  )
}

export default Reflections