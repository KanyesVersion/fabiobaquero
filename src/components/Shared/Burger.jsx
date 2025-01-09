const Burger = ({ onClick }) => {
  return (
    <div className="
      absolute right-4 lg:hidden 
      text-5xl 
      border-[#3004] rounded-md 
      grid place-content-center h-[75%] aspect-square
      cursor-pointer
    "
    onClick={onClick}
    >
        <i className="fa fa-bars" aria-hidden="true"></i>
    </div>
  )
}

export default Burger