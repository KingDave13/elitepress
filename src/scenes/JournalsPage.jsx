import { 
  NavbarAlt2,
  Hero3,
  JournalsMain,
  Newsletter,
  Footer } from "../components";

import { useEffect } from "react";

import { hero2 } from "../assets";
  
  const JournalsPage = () => {

  useEffect(() => {
    document.title = 'Journals | Elite Press Journals';
  }, []); 

    return (
      <div className="font-instrument-sans">
        <div>
          <NavbarAlt2 />
          <div className='relative flex items-center justify-center w-full 
          md:max-h-[450px] ss:max-h-[300px] max-h-[200px] md:top-[6rem] 
          ss:top-[6rem] top-[4.8rem]'>
            <img src={hero2} alt='hero3'
            className='w-[120rem] md:h-[300px] ss:h-[250px]
            h-[150px]' />
            <div className='absolute w-full md:pb-8 ss:pb-8 pb-5'>
              <Hero3 />
            </div>
          </div>

          <div className='aboutMain'>
            <JournalsMain />
          </div>
  
          <div className='bg-primaryalt'>
            <Newsletter />
          </div>
          
          <div className='footer'>
            <Footer />
          </div>
        </div>
      </div>
    );
  };
  
  export default JournalsPage;