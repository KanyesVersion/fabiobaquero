import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import PhoneLink from "./PhoneLink";

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="
      py-16 px-8 lg:px-12 lg:py-32
      bg-[#001324] text-sky-300
      flex flex-col lg:flex-row justify-between lg:justify-around lg:items-center gap-12 lg:gap-0"
    >
        <p className="text-sm lg:text-xl self-center" style={{ fontFamily: 'Nova Square, serif' }}>FABIO BAQUERO</p>
        <div className="flex flex-col gap-2 lg:gap-8 text-md lg:text-xl">
          <p className="text-[#def9]">{t('phone')}:</p>
          <PhoneLink phoneNumber={'+593 96 381 1030'} />
        </div>
        <div className="flex flex-col gap-2 lg:gap-8 text-md lg:text-xl">
          <p className="text-[#def9]">E-mail:</p>
          <p>fabiojosba@gmail.com</p>
        </div>
        {/* Social media */}
        <div className="flex flex-col gap-4 lg:gap-8 text-md lg:text-xl">
          <p className="text-[#def9]">{t('socialMedia')}:</p>
          <Link
            to={'https://www.instagram.com/fabio_baquero1/'} target="_blank"
            className="flex gap-2 items-center lg:hover:text-sky-500"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>Instagram
          </Link>
          <Link
            to={'https://www.facebook.com/baquero8442?mibextid=ZbWKwL'} target="_blank"
            className="flex gap-2 items-center lg:hover:text-sky-500"
          >
              <i className="fa fa-facebook-official" aria-hidden="true"></i>Facebook
          </Link>
          <Link
            to={'https://www.youtube.com/@fabiobaquero63'} target="_blank"
            className="flex gap-2 items-center lg:hover:text-sky-500"
          >
            <i className="fa fa-youtube-play" aria-hidden="true"></i>Youtube
          </Link>
        </div>
    </footer>
  )
}

export default Footer