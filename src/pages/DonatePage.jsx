import { useTranslation } from "react-i18next";
import Hero from "../components/Home/Hero";
import Main from "../components/shared/Main";
import AudioControls from "../components/shared/AudioControls";
import ClickToCopy from "../components/shared/ClickToCopy";

const DonatePage = () => {
  const { t } = useTranslation('donate');

  return (
    <>
      <main>
        <section className="full-section bg-white lg:p-8 flex justify-center lg:min-h-[600px]">
          <div className="h-full w-full lg:w-1/2 lg:min-w-[700px] p-6 lg:px-8 lg:py-16 bg-[#FBF6ED]
            lg:border-2 border-black rounded-xl lg:shadow-[2px_2px_1px_4px_rgba(0,0,0,0.2)]
            flex flex-col items-center justify-between
          ">
            <h1 className="text-3xl lg:text-5xl font-bold text-center">{t('greeting')}</h1>
            <div className="w-full flex flex-col gap-4 bg-[#ede3d1] p-4 rounded-xl">
              <p className="text-xl lg:text-3xl font-bold">{t('ifInEcuador')}:</p>
              <p className="text-xl lg:text-3xl">{t('nameOfBeneficiary')}: Fabio Baquero</p>
              <p className="text-xl lg:text-3xl">{t('accountNumber')}: 4177745500 <ClickToCopy text='4177745500' /></p>
              <p className="text-sm lg:text-xl">BANCO DEL PICHINCHA C.A.</p>
              <p className="text-sm lg:text-xl">{t('savingsAccount').toUpperCase()}.</p>
            </div>
            <p className="text-2xl lg:text-3xl">{t('thankYou')}</p>
            <p className="text-2xl lg:text-3xl text-green-700">{t('notInEcuador')} <i className="fa fa-arrow-down" aria-hidden="true"></i></p>
            <div className="h-6 lg:hidden"></div>
          </div>
        </section>
        <section className="lg:full-section bg-[#f2f2f2] lg:p-8 flex justify-center lg:min-h-[600px]">
          <div className="h-full w-full lg:w-1/2 lg:min-w-[700px] p-6 lg:px-8 lg:py-12 bg-white lg:bg-[#FBF6ED]
            lg:border-2 border-black rounded-xl lg:shadow-[2px_2px_1px_4px_rgba(0,0,0,0.2)]
            flex flex-col gap-8 lg:gap-0 items-center justify-between
          ">
            <h1 className="text-3xl lg:text-5xl font-bold text-center">{t('ifOutsideEcuador')}:</h1>
            <div className="w-full flex flex-col gap-2 bg-[#ede3d1] p-4 rounded-xl">
              <p className="text-xl lg:text-3xl font-bold">{t('info')}:</p>
              <p className="text-xl lg:text-3xl">{t('swiftCode')}: PICHECEQ <ClickToCopy text='PICHECEQ'/></p>
              <p className="text-xl lg:text-3xl">{t('zipCode')}: 17012 (Pichincha-Ecuador) <ClickToCopy text='17012'/></p>
              <p className="text-xl lg:text-3xl">{t('fullAddress')}: Rayocucho, Calacalí (SN)</p>
              <p className="text-xl lg:text-3xl">{t('ecuadorPhone')}: +593 96 381 1030 <ClickToCopy text='+593 96 381 1030'/></p>
              <p className="text-sm lg:text-xl font-bold">{t('beforeYouDonate')}</p>
            </div>
            <p className="text-2xl lg:text-3xl text-green-700">{t('otherOptions')} <i className="fa fa-arrow-down" aria-hidden="true"></i></p>
          </div>
        </section>
        <section className="lg:full-section bg-white lg:p-8 flex justify-center lg:min-h-[600px]">
          <div className="h-full w-full lg:w-3/4 lg:min-w-[700px] p-4 lg:px-8 lg:py-8 bg-[#FBF6ED]
            lg:border-2 border-black rounded-xl lg:shadow-[2px_2px_1px_4px_rgba(0,0,0,0.2)]
            flex flex-col items-center gap-8 lg:gap-0 justify-between
          ">
            <h1 className="text-3xl lg:text-5xl font-bold text-center">{t('wuOrMg')}</h1>
            <div className="w-full flex flex-col gap-1 lg:gap-2 bg-[#ede3d1] p-2 rounded-xl">
              <p className="text-sm lg:text-xl font-bold">{t('theseServicesExist')}</p>
              <p className="text-lg lg:text-xl lg:pl-4">{t('nameOfBeneficiary')}: Fabio Baquero</p>
              <p className="text-lg lg:text-xl lg:pl-4">{t('fullAddress')}: Rayocucho, Calacalí (SN)</p>
              <p className="text-lg lg:text-xl lg:pl-4">{t('ecuadorPhone')}: +593 96 381 1030 <ClickToCopy text='+593 96 381 1030'/></p>
              <p className="text-sm lg:text-xl font-bold mt-2">{t('onceTransferred')}</p>
              <p className="text-lg lg:text-xl lg:pl-4">{t('donationAmount')}</p>
              <p className="text-lg lg:text-xl lg:pl-4">{t('keyNumber')}</p>
              <p className="text-lg lg:text-xl lg:pl-4">{t('nameOfDonor')}</p>
              <p className="text-lg lg:text-xl lg:pl-4">{t('cityAndCountry')}</p>
              <p className="text-sm lg:text-xl font-bold mt-2">{t('onceReceived')}</p>
            </div>
            <p className="text-2xl lg:text-3xl">{t('thanksForSupporting')}</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default DonatePage