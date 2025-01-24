import { Link } from "react-router-dom"

const AllListArt = ({ title, date }) => {
  return (
    <Link
        to='/about'
        className="
            w-full p-2 flex justify-between items-center group
            bg-white lg:hover:bg-gray-300 duration-150
            text-black text-xl
            border-b border-gray-300 last:border-none"
    >
        <span className="ml-2 lg:group-hover:ml-3 duration-150">{title}</span>
        <div className="
            p-2 bg-slate-100 lg:group-hover:bg-slate-400
            lg:group-hover:text-white duration-150 text-lg
            rounded-md"
        >
            {date}
        </div>
    </Link>
  )
}

export default AllListArt