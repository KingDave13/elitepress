import { 
  NavbarAlt,
  Hero2,
  AboutMain,
  Commitment,
  Newsletter,
  Footer } from "../components";

import { hero2 } from "../assets";
import { useEffect } from "react";

const AboutPage = () => {

useEffect(() => {
  document.title = 'About Us | Elite Press Journals';
}, []); 

  return (
    <div className="font-instrument-sans">
      <NavbarAlt />
      <div className='relative flex items-center justify-center w-full 
      md:max-h-[450px] ss:max-h-[300px] max-h-[200px] md:top-[6rem] 
      ss:top-[6rem] top-[4.8rem]'>
        <img src={hero2} alt='hero2'
        className='w-[120rem] md:h-[300px] ss:h-[250px]
        h-[150px]' />
        <div className='absolute w-full md:pb-8 ss:pb-8 pb-5'>
          <Hero2 />
        </div>
      </div>

      <div className='aboutMain'>
        <AboutMain />
      </div>

      <Commitment />

      <div className='bg-primaryalt'>
        <Newsletter />
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;