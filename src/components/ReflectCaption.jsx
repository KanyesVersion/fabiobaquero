const ReflectCaption = ({ children }) => {
  return (
    <div className="w-[90%] m-auto flex items-center gap-8">
        <div className="flex-1 h-4 bg-slate-300"></div>
        <p className="text-2xl w-2/3 text-center">
            {children}
        </p>
        <div className="flex-1 h-4 bg-slate-300"></div>
    </div>
  )
}

export default ReflectCaption