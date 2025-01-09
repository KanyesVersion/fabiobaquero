const Section = ({ children }) => {
  return (
    <section className="even:bg-gray-200 min-h-[500px] odd:bg-gray-100 w-full flex flex-col gap-6 lg:gap-10 p-6">
        {children}
    </section>
  )
}

export default Section