const AllListArt = ({ title, date, onClick, category, views }) => {
  return (
    <div
      className="
        w-full p-2 flex justify-between items-center group
        bg-white lg:hover:bg-gray-300 duration-150 text-black
        border-b border-gray-300 last:border-none cursor-pointer"
      onClick={onClick}
    
    >
        <span className="lg:ml-2 lg:group-hover:ml-3 text-md lg:text-xl duration-150">{title}</span>
        <div className="flex gap-2">
          <div className="
              p-2 bg-slate-100 lg:group-hover:bg-slate-400
              lg:group-hover:text-white duration-150 text-sm lg:text-lg
              rounded-md"
          >
              {date}
          </div>
          {category === 'reflections' && <div className="
              p-2 bg-slate-100 lg:group-hover:bg-slate-400
              lg:group-hover:text-white duration-150 text-sm lg:text-lg
              rounded-md"
          >
              <i className="fa fa-eye" aria-hidden="true"></i>{'  ' + views}
          </div>}
        </div>
    </div>
  )
}

export default AllListArt