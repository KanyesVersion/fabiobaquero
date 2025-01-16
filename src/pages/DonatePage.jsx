import Hero from "../components/Home/Hero"
import Main from "../components/shared/Main"
import Section from "../components/shared/Section"

const DonatePage = () => {
  return (
    <>
      <main className="full-section bg-white lg:p-8 flex justify-center lg:min-h-[600px]">
        <div className="h-full w-full lg:w-1/2 lg:min-w-[700px] p-4 lg:p-8 bg-[#FBF6ED]
          lg:border-2 border-black rounded-xl lg:shadow-[2px_2px_1px_4px_rgba(0,0,0,0.2)]
          flex flex-col items-center justify-between
        ">
          <h1 className="text-4xl lg:text-5xl font-bold text-center">Tu ayuda me permite continuar con mi ministerio.</h1>
          <p className="text-2xl lg:text-3xl text-center">Solo da click en el botón de aquí abajo:</p>
          <a href="#">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me a Coffee"
              className="w-[320px]"
            />
          </a>
          <p className="text-2xl lg:text-3xl">Muchas gracias!</p>
          <div className="h-8 lg:hidden"></div>
        </div>
      </main>
    </>
  )
}

export default DonatePage