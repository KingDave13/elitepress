import { 
  NavbarAlt,
  HeroEJH,
  Newsletter,
  Footer, 
  HaematologyHero,
  Sidebar} from "../components";

import styles from "../styles";
  
import { hero2 } from "../assets";
  
const EJH = () => {
  return (
    <div className="font-instrument-sans">
      <NavbarAlt />
      <div className='relative flex items-center justify-center w-full 
      md:max-h-[450px] ss:max-h-[300px] max-h-[200px] top-[6rem]'>
        <img src={hero2} alt='hero2'
        className='w-[120rem] md:h-[300px] ss:h-[250px]
        h-[150px]' />
        <div className='absolute w-full md:pb-8 ss:pb-8 pb-6'>
          <HeroEJH />
        </div>
      </div>

      <div className='journal'>
        <div className={`${styles.padding} max-w-[82rem] mx-auto flex 
        justify-center`}>
          <div className="mr-20">
            <Sidebar />
          </div>

          <div className=''>
            <HaematologyHero />
          </div>
        </div>
      </div>

      <div className='bg-primaryalt'>
        <Newsletter />
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default EJH;