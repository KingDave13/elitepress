import {
  HeroEJPH,
  Newsletter,
  Footer, 
  PublicHealthHero,
  Sidebar,
  Sidebar2, 
  NavbarPages } from "../components";

import { ejphSideLinks } from "../constants";

import styles from "../styles";

import { hero3 } from "../assets";
import { Helmet } from "react-helmet";

const EJPH = () => {

  return (
    <div className="font-instrument-sans">
      <Helmet>
        <title>Elite Journal of Public Health | Elite Press Journals</title>
        <meta name="description" content="EJPH takes on the mantle of addressing public health challenges head-on. Navigate through research dedicated to promoting strategies for community well-being." />
      </Helmet>

      <NavbarPages />
      <div className='relative flex items-center justify-center w-full 
      md:max-h-[450px] ss:max-h-[300px] max-h-[200px] md:top-[6rem] 
      ss:top-[6rem] top-[4.8rem]'>
        <img src={hero3} alt='hero3'
        className='w-[120rem] md:h-[300px] ss:h-[250px]
        h-[150px]' />
        <div className='absolute w-full md:pb-8 ss:pb-8 pb-6'>
          <HeroEJPH />
        </div>
      </div>

      <div className='journal'>
        <div className={`${styles.padding} max-w-[82rem] mx-auto flex 
        md:pt-28 ss:pt-28 pt-28 hidden md:flex`}>
          <div className="md:mr-4 mt-[30px] flex-1">
            <Sidebar sideLinks={ejphSideLinks}/>
          </div>

          <div className='md:ml-20'>
            <PublicHealthHero />
          </div>
        </div>

        <div className='flex ss:pt-28 pt-28 md:hidden flex flex-col'>
          <div className=''>
            <PublicHealthHero />
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

export default EJPH;