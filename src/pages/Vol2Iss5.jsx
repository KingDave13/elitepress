import {
    EJPHVOL2ISS5,
    Newsletter,
    Footer, 
    Sidebar,
    Sidebar2, 
    NavbarPages,
    Vol2Iss5Pubs, 
    } from "../components";
  
  import styles from "../styles";
  import { ejphSideLinks } from "../constants";
  import { hero3 } from "../assets";
  
  const Vol2Iss5 = () => {
    return (
      <div className="font-instrument-sans">
        <NavbarPages />
        <div className='relative flex items-center justify-center w-full 
        md:max-h-[450px] ss:max-h-[300px] max-h-[200px] md:top-[6rem] 
        ss:top-[6rem] top-[4.8rem]'>
          <img src={hero3} alt='hero3'
          className='w-[120rem] md:h-[300px] ss:h-[250px]
          h-[150px]' />
          <div className='absolute w-full md:pb-8 ss:pb-8 pb-6'>
            <EJPHVOL2ISS5 />
          </div>
        </div>
  
        <div className='journal'>
          <div className={`${styles.padding} max-w-[82rem] mx-auto flex 
          md:pt-28 hidden md:flex`}>
            <div className="mr-4 mt-[30px]">
              <Sidebar sideLinks={ejphSideLinks}/>
            </div>
  
            <div className='ml-20 w-full'>
              <Vol2Iss5Pubs />
            </div>
          </div>
  
          <div className='flex ss:pt-28 pt-28 md:hidden flex flex-col'>
            <div className=''>
              <Vol2Iss5Pubs />
            </div>
  
            <div className="">
              <Sidebar2 sideLinks={ejphSideLinks} />
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
  
  export default Vol2Iss5;