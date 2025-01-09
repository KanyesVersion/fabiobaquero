import { Link } from "react-router-dom"

const ReflectLandingArt = ({ to, title, date, views }) => {
  return (
    <Link to={to} className="w-full p-2 lg:p-3 bg-[#E9DACC] text-white flex gap-4 lg:hover:pl-4 lg:hover:pr-2 duration-100 border-b border-[#3004]">
        <span className="lg:text-2xl text-black p-2 rounded-md flex items-center">{title}</span>
        <div className="flex flex-col text-xs lg:text-lg bg-[#C08D5C] p-2 rounded-md">
          <span>Escrito:</span>
          <span>{date}</span>
        </div>
        <span className="text-sm lg:text-2xl bg-slate- py-2 px-3 bg-[#C08D5C] rounded-md flex items-center gap-2"><i className="fa fa-eye" aria-hidden="true"></i><span>{views}</span></span>
    </Link>
  )
}

export default ReflectLandingArt