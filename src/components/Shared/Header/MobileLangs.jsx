import { useTranslation } from "react-i18next"

const MobileLangs = ({ cycleLangs }) => {
    const { t } = useTranslation('header');

    return (
        <img src={t('flagUrl')} className="w-10 rounded-[50%] absolute left-4 lg:hidden" onClick={cycleLangs}/>
    )
}

export default MobileLangs