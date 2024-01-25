import { 
  NavbarAlt3,
  Hero4,
  Contact,
  Newsletter,
  Footer } from "../components";
  
import { hero2 } from "../assets";
  
  const ContactPage = () => {
    return (
      <div className="font-instrument-sans">
        <div>
          <NavbarAlt3 />
          <div className='relative flex items-center justify-center w-full 
          md:max-h-[450px] ss:max-h-[300px] max-h-[200px] top-[6rem]'>
            <img src={hero2} alt='hero4'
            className='w-[120rem] md:h-[300px] ss:h-[300px]
            h-[200px]' />
            <div className='absolute w-full md:pb-8'>
              <Hero4 />
            </div>
          </div>

          <div className='journal'>
            <Contact />
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
  
  export default ContactPage;