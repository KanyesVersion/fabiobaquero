import { useTranslation } from "react-i18next"

const WatchYTBtn = ({ videoId }) => {
    const { t } = useTranslation('articles');

    return (
    <a
        className="w-full p-6 bg-red-600 text-2xl font-bold text-white rounded-xl text-center md:hidden select-none"
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
    >
        {t('watchOnYT')}
    </a>
    )
}

export default WatchYTBtn