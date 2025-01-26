const ReflectCaption = ({ children }) => {
  return (
    <div className="w-full flex items-center gap-8">
        <div className="flex-1 h-3 bg-slate-300 hidden lg:block"></div>
        <p className="text-xl w-full lg:w-2/3 text-center m-auto">
            {children}
        </p>
        <div className="flex-1 h-3 bg-slate-300 hidden lg:block"></div>
    </div>
  )
}

export default ReflectCaption