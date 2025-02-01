import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const ClickToCopy = ({ text }) => {
    const { t } = useTranslation('common');
    const [icon, setIcon] = useState('fa fa-clone');
    const handleClick = () => {
        navigator.clipboard.writeText(text);
        setIcon('fa fa-check');
    }
    const ref = useRef();
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        setIsMounted(true);

        const handleClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIcon('fa fa-clone')
            }
        }
        
        if (isMounted) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [isMounted]);

    return (
    <span
        className="
            inline-flex bg-redbrown1 px-2 py-1 text-sm lg:text-xl
            text-beige1 lg:hover:text-white
            gap-2 items-center rounded-lg cursor-pointer -translate-y-1 select-none"
        onClick={handleClick}
        ref={ref}
    >
        {t('copy')}<i className={icon} aria-hidden="true"></i>
    </span>
    )
}

export default ClickToCopy