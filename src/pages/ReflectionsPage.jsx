import { useTranslation } from "react-i18next"
import AudioControls from "../components/Shared/AudioControls"
import Main from "../components/Shared/Main"
import Section from "../components/Shared/Section"
import ReflectCaption from "../components/Reflections/ReflectCaption"
import ReflectLandingSec from "../components/Reflections/ReflectLandingSec"

const ReflectionsPage = () => {
  const { t } = useTranslation('reflections');

  return (
    <>
      <Main>
        <ReflectLandingSec />
      </Main>
    </>
  )
}

export default ReflectionsPage