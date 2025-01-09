import BurgerMenuItem from "./BurgerMenuItem"

const BurgerMenu = ({ toggleMenuVisibility }) => {

    return (
    <div className="w-screen absolute top-[100%] left-0 flex flex-col animate-slideDown">
        <BurgerMenuItem to='/studies' toggleMenuVisibility={toggleMenuVisibility}>Studies</BurgerMenuItem>
        <BurgerMenuItem to='/reflections' toggleMenuVisibility={toggleMenuVisibility}>Reflections</BurgerMenuItem>
        <BurgerMenuItem to='/discipleship' toggleMenuVisibility={toggleMenuVisibility}>Discipleship</BurgerMenuItem>
        <BurgerMenuItem to='/more' toggleMenuVisibility={toggleMenuVisibility}>More</BurgerMenuItem>
    </div>
    )
}

export default BurgerMenu