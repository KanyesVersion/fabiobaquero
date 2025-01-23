const ContentLandingMain = ({ children }) => {
  return (
    <main className="
        py-6 px-0 lg:px-0 lg:py-8 min-h-[600px] lg:full-section
        bg-[url('/assets/hero-img.webp')] bg-black bg-opacity-45 bg-blend-darken bg-cover bg-bottom 
        flex flex-col gap-[1.5rem] lg:gap-[2rem]
    ">
        {children}
    </main>
  )
}

export default ContentLandingMain