import { Link } from "react-router-dom";

const BurgerMenuItem = ({ children, to, toggleMenuVisibility }) => {
    const borderStyle = {
        borderTop: '1px solid',
        borderImage: 'linear-gradient(to right, transparent, #4105) 1',
    };

    return (
        <Link to={to} onClick={toggleMenuVisibility} className="p-4 w-full bg-beige1 text-right text-xl" style={borderStyle}>
            {children}
        </Link>

    )
}

export default BurgerMenuItem