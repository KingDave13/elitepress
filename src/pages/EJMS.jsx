import {
  HeroEJMS,
  Newsletter,
  Footer, 
  MedicalSciencesHero,
  Sidebar,
  Sidebar2, 
  NavbarPages } from "../components";

import styles from "../styles";
import { ejmsSideLinks } from "../constants";

import { hero3 } from "../assets";
import { Helmet } from "react-helmet";

const EJMS = () => {

  return (
    <div className="font-instrument-sans">
      <Helmet>
        <title>Elite Journal of Medical Sciences | Elite Press Journals</title>
        <meta name="description" content="Discover the pulse of medical knowledge with EJMS. Unveiling the latest findings and trends across various medical specialties and subspecialties, this journal is a comprehensive resource for healthcare professionals and researchers." />
      </Helmet>

      <NavbarPages />
      <div className='relative flex items-center justify-center w-full 
      md:max-h-[450px] ss:max-h-[300px] max-h-[200px] md:top-[6rem] 
      ss:top-[6rem] top-[4.8rem]'>
        <img src={hero3} alt='hero3'
        className='w-[120rem] md:h-[300px] ss:h-[250px]
        h-[150px]' />
        <div className='absolute w-full md:pb-8 ss:pb-8 pb-6'>
          <HeroEJMS />
        </div>
      </div>

      <div className='journal'>
        <div className={`${styles.padding} max-w-[82rem] mx-auto flex 
        md:pt-28 ss:pt-28 pt-28 hidden md:flex`}>
          <div className="md:mr-4 mt-[30px] flex-1">
            <Sidebar sideLinks={ejmsSideLinks}/>
          </div>

          <div className='md:ml-20'>
            <MedicalSciencesHero />
          </div>
        </div>

        <div className='flex ss:pt-28 pt-28 md:hidden flex flex-col'>
          <div className=''>
            <MedicalSciencesHero />
          </div>

          <div className="">
            <Sidebar2 sideLinks={ejmsSideLinks} />
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

export default EJMS;