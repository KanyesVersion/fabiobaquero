import { Link } from "react-router-dom"

const ReflectLandingArt = ({ children, to }) => {
  return (
    <Link to={to} className="w-full p-3 lg:p-4 text-lg lg:text-2xl bg-black bg-opacity-40 lg:hover:bg-gray-600">
        {children}
    </Link>
  )
}

export default ReflectLandingArt