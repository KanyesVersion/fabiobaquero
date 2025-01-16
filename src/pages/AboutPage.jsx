const AboutPage = () => {
  return (
    <main className="p-4 lg:p-8 bg-white lg:full-section lg:min-w-[1200px] grid place-content-center">
        <div className="w-full lg:w-2/3 text-lg lg:text-2xl lg:text-justify mx-auto">
          <div className="float-left mr-8 w-[45%] md:w-[30%] bg-beige1
            aspect-square rounded-[50%] overflow-hidden grid place-content-center
          ">
            <img src="/assets/profilepic.webp" className="w-full scale-[.6]"/>
          </div>
          <p>¡Hola! Soy Fabio Baquero. Tengo el privilegio de compartirles un poco sobre mí: estudié teología en el Instituto Bíblico Palabra de Vida (Argentina). Fui Director Nacional de BSF (Bible Study Fellowship) en Ecuador. Fui profesor en el Instituto Bíblico Misionero Ecuatoriano. Estoy aquí porque quiero seguir haciendo lo que me apasiona, compartir la Palabra De Dios y el Evangelio de la Gracia.</p>
        </div>
    </main>
  )
}

export default AboutPage