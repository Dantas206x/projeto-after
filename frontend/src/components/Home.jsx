import react from "react";
import Contact from "./Contact";
import Galeria from "./Galeria";
import News from "./News";
import Sobre from "./Sobre";
import Hero from "./Hero";


const Home = () => {
    return (  

        <>
         <Hero />
         <News />
         <Galeria />
         <Sobre />
         <Contact />

        </>
    );
}
 
export default Home;