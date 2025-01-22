const ContentLandingMain = ({ children }) => {
  return (
    <main className="
        py-8 px-0 lg:px-8 lg:py-8 min-h-[600px] lg:full-section
        bg-[url('/assets/hero-img.webp')] bg-black bg-opacity-45 bg-blend-darken bg-cover bg-bottom 
        flex flex-col gap-[2rem]
    ">
        {children}
    </main>
  )
}

export default ContentLandingMain