
import { herobg } from "../assets" 



import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = ({index}) => {
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