import { Link } from "react-router-dom"

const ReflectLandingArt = ({ children, to }) => {
  return (
    <Link to={to} className="w-full p-4 text-lg lg:text-2xl bg-white bg-opacity-0 hover:bg-opacity-20">
        {children}
    </Link>
  )
}

export default ReflectLandingArt