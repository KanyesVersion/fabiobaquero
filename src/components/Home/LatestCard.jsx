import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom";

const LatestCard = ({ bgColor, title, titleColor, big, small }) => {
    const { t } = useTranslation('home');

    return (
        <div 
            style={{ backgroundColor: bgColor }}
            className="
                w-full min-h-[200px] flex-1 p-4 lg:p-6 flex flex-col gap-4
                rounded-lg shadow-md backdrop-blur-md
                overflow-hidden relative"
        >
            <h2
                style={{ color: titleColor }}
                className="
                    text-2xl lg:text-4xl font-bold animate-slideRight"
            >{title}</h2>
            {/* Articles area */}
            <div className="flex-1 flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-around items-center">
                {/* Big article */}
                <Link
                    to={big.url} 
                    className="
                    w-full lg:w-[264px] h-[204px] lg:h-[180px] flex flex-col
                    rounded-lg overflow-hidden shadow-[4px_0_8px_4px_rgba(0,0,0,0.2)]
                    lg:hover:shadow-none lg:hover:scale-105 duration-200"
                >
                    <div className="h-[75%] w-full overflow-hidden">
                    <img className="w-full -translate-y-[10%]" src={big.img} alt="The Widow of Nain" />
                    </div>
                    <div className="flex-1 grid place-content-center bg-slate-300 text-lg lg:text-xl text-center">{big.title}</div>
                </Link>
                {/* Small article */}
                <Link
                    to={small.url}
                    className="
                    w-[204px] h-[140px] flex flex-col
                    rounded-lg overflow-hidden shadow-[4px_0_8px_2px_rgba(0,0,0,0.2)]
                    lg:hover:shadow-none lg:hover:scale-105 duration-200"
                >
                    <div className="h-[75%] w-full overflow-hidden">
                    <img className="w-full -translate-y-[10%]" src={small.img} alt="The Widow of Nain" />
                    </div>
                    <div className="flex-1 grid place-content-center bg-slate-300 text-sm lg:text-lg text-center">{small.title}</div>
                </Link>
            </div>
        </div>
    )
}

export default LatestCard