
import { herobg } from "../assets" 
import { Link } from "react-router-dom";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
  return (
   <div className="
     mx-auto 
     flex 
     h-screen
     
    ">
    <video src={herobg} autoPlay loop muted/>

   </div>
    
   
   
  );
};

export default Hero;