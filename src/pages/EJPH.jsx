import { 
    NavbarAlt,
    HeroEJPH,
    Newsletter,
    Footer } from "../components";
  
  import { hero2 } from "../assets";
  
  const EJHS = () => {
    return (
      <div className="font-instrument-sans">
        <NavbarAlt />
        <div className='relative flex items-center justify-center w-full 
        md:max-h-[450px] ss:max-h-[300px] max-h-[200px] top-[6rem]'>
          <img src={hero2} alt='hero2'
          className='w-[120rem] md:h-[300px] ss:h-[250px]
          h-[150px]' />
          <div className='absolute w-full md:pb-8 ss:pb-8 pb-6'>
            <HeroEJPH />
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
  
  export default EJHS;