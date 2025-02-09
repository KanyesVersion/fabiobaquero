import { useTranslation } from "react-i18next";
import Hero from "../components/Home/Hero";
import Main from "../components/shared/Main";
import AudioControls from "../components/shared/AudioControls";
import ClickToCopy from "../components/shared/ClickToCopy";
import DonateSection from "../components/Donate/DonateSection";

const DonatePage = () => {
  const { t } = useTranslation('donate');

  return (
    <>
      <main>
        {/* In Ecuador */}
        <DonateSection
          title={t('greeting')}
          cardLgW='lg:w-1/2'
          cardPY={{ mob: 'py-8', lg: 'lg:py-16' }}
          cardDark={false}
          innerDarkGap={{ mob: '2', lg: '6' }}
          thankYouMsg={t('thankYou')}
          otherOptions={t('notInEcuador')}
          separator={false}
        >
          <p className="text-xl lg:text-3xl font-bold">{t('ifInEcuador')}:</p>
          <p className="text-xl lg:text-3xl">{t('nameOfBeneficiary')}: José Fabio Baquero <ClickToCopy text='José Fabio Baquero' /></p>
          <p className="text-xl lg:text-3xl">{t('accountNumber')}: 4177745500 <ClickToCopy text='4177745500' /></p>
          <p className="text-sm lg:text-xl">BANCO DEL PICHINCHA C.A.</p>
          <p className="text-sm lg:text-xl">{t('savingsAccount').toUpperCase()}.</p>
        </DonateSection>
        {/* Not in Ecuador */}
        <DonateSection
          title={t('ifOutsideEcuador') + ':'}
          cardLgW='lg:w-1/2'
          cardPY={{ mob: 'py-8', lg: 'lg:py-16' }}
          cardDark={true}
          innerDarkGap={{ mob: '2', lg: '4' }}
          thankYouMsg={null}
          otherOptions={t('otherOptions')}
          separator={false}
        >
          <p className="text-xl lg:text-3xl font-bold">{t('info')}:</p>
          <p className="text-xl lg:text-3xl">{t('swiftCode')}: PICHECEQ <ClickToCopy text='PICHECEQ'/></p>
          <p className="text-xl lg:text-3xl">{t('zipCode')}: 17012 (Pichincha-Ecuador) <ClickToCopy text='17012'/></p>
          <p className="text-xl lg:text-3xl">{t('fullAddress')}: Rayocucho, Calacalí (SN) <ClickToCopy text='Rayocucho, Calacalí (SN)'/></p>
          <p className="text-xl lg:text-3xl">{t('ecuadorPhone')}: +593 96 381 1030 <ClickToCopy text='+593 96 381 1030'/></p>
          <p className="text-sm lg:text-xl font-bold">{t('beforeYouDonate')}</p>
        </DonateSection>
        {/* WU and MoneyGram */}
        <DonateSection
          title={t('wuOrMg')}
          cardLgW='lg:w-2/3'
          cardPY={{ mob: 'py-8', lg: 'lg:py-8' }}
          cardDark={false}
          innerDarkGap={{ mob: '2', lg: '2' }}
          thankYouMsg={null}
          otherOptions={t('otherOptions')}
          separator={false}
        >
          <p className="text-sm lg:text-lg font-bold">{t('theseServicesExist')}</p>
          <p className="text-lg lg:text-xl">{t('nameOfBeneficiary')}: José Fabio Baquero <ClickToCopy text='José Fabio Baquero' /></p>
          <p className="text-lg lg:text-xl">{t('fullAddress')}: Rayocucho, Calacalí (SN) <ClickToCopy text='Rayocucho, Calacalí (SN)'/></p>
          <p className="text-lg lg:text-xl mb-2">{t('ecuadorPhone')}: +593 96 381 1030 <ClickToCopy text='+593 96 381 1030'/></p>
          <p className="text-sm lg:text-lg font-bold">{t('onceTransferred')}</p>
          <p className="text-lg lg:text-xl">{t('donationAmount')}</p>
          <p className="text-lg lg:text-xl">{t('keyNumber')}</p>
          <p className="text-lg lg:text-xl">{t('nameOfDonor')}</p>
          <p className="text-lg lg:text-xl mb-2">{t('cityAndCountry')}</p>
          <p className="text-sm lg:text-lg font-bold">{t('onceReceived')}</p>
        </DonateSection>
        {/* Global transfer */}
        <DonateSection
          title={t('globalTransfer')}
          cardLgW='lg:w-1/2'
          cardPY={{ mob: 'py-8', lg: 'lg:py-8' }}
          cardDark={true}
          innerDarkGap={{ mob: '2', lg: '4' }}
          thankYouMsg={t('thanksForSupporting')}
          otherOptions={null}
          separator={false}
        >
          <p className="text-xl lg:text-3xl font-bold">Many banks offer Global Transfer:</p>
        </DonateSection>
      </main>
    </>
  )
}

export default DonatePage