import { BrowserRouter } from "react-router-dom";
import { Sobre, Contact, Hero, Navbar, Footer, News, Galeria, } from "./components";
import { herobg } from "./assets";
function App() {

  return (

    <BrowserRouter>
      <div className="relative z-0 gradientecoral">
        <div className="">
          <a href="https://chat.whatsapp.com/CtcJgzlA4SbE75zje3wWPl" target="_blank" className="fixed right-5 bottom-5 rounded-full transition-all delay-100  hover:scale-110 position ">
            <img src="https://cdn-icons-png.flaticon.com/512/220/220236.png" width={50} />

          </a>
          <Navbar />
          <Hero />
        </div>
        <News />
        <Galeria />
        <Sobre />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>

      </div>


    </BrowserRouter>
  )
}

export default App
