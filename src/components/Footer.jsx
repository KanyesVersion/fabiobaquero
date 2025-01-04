import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="py-16 px-20 text-lg bg-gray-900 text-white flex justify-between items-center">
        <p><i className="fa fa-copyright" aria-hidden="true"></i> Fabio Baquero 2025</p>
        {/* Social media */}
        <div className="flex flex-col gap-4">
            <Link to={'https://www.instagram.com/fabio_baquero1/'} target="_blank" className="flex gap-2 items-center hover:text-sky-300"><i class="fa fa-instagram" aria-hidden="true"></i>Instagram</Link>
            <Link className="flex gap-2 items-center hover:text-sky-300"><i class="fa fa-facebook-official" aria-hidden="true"></i>Facebook</Link>
            <Link className="flex gap-2 items-center hover:text-sky-300"><i class="fa fa-youtube-play" aria-hidden="true"></i>Youtube</Link>
        </div>
    </footer>
  )
}

export default Footer