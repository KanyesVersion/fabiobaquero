import { useTranslation } from "react-i18next";
import Hero from "../components/Home/Hero";
import Main from "../components/shared/Main";
import AudioControls from "../components/shared/AudioControls";

const DonatePage = () => {
  const { t } = useTranslation('donate');

  return (
    <>
      <main className="full-section bg-white lg:p-8 flex justify-center lg:min-h-[600px]">
        <div className="h-full w-full lg:w-1/2 lg:min-w-[700px] p-4 lg:px-8 lg:py-16 bg-[#FBF6ED]
          lg:border-2 border-black rounded-xl lg:shadow-[2px_2px_1px_4px_rgba(0,0,0,0.2)]
          flex flex-col items-center justify-between
        ">
          <h1 className="text-4xl lg:text-5xl font-bold text-center">{t('greeting')}</h1>
          <div className="flex flex-col items-center gap-8">
            <p className="text-2xl lg:text-3xl text-center">{t('donateBtnLabel')}</p>
            <a href="#" className="lg:hover:-translate-y-1 lg:active:translate-y-0">
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me a Coffee"
                className="w-[320px]"
              />
            </a>
          </div>
          <p className="text-2xl lg:text-3xl">{t('thankYou')}</p>
          <div className="h-8 lg:hidden"></div>
        </div>
      </main>
    </>
  )
}

export default DonatePage