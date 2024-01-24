import { 
NavbarAlt,
Hero2,
AboutMain,
Commitment,
Newsletter,
Footer } from "../components";

import { hero2 } from "../assets";

const AboutPage = () => {
  return (
    <div className="font-instrument-sans">
      <NavbarAlt />
      <div className='relative flex items-center justify-center w-full 
      md:max-h-[400px] ss:max-h-[300px] max-h-[200px] top-20'>
        <img src={hero2} alt='hero2'
        className='object-cover w-[120rem] md:h-[450px] ss:h-[300px]
        h-[200px]' />
        <div className='absolute w-full'>
          <Hero2 />
        </div>
      </div>

      <div className='journal'>
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