import {
  HeroEJSRR,
  Newsletter,
  Footer, 
  ResearchHero,
  Sidebar,
  Sidebar2, 
  NavbarPages } from "../components";

import styles from "../styles";
import { ejsrrSideLinks } from "../constants";

import { hero3 } from "../assets";
import { Helmet } from "react-helmet";

const EJSRR = () => {

  return (
    <div className="font-instrument-sans">
      <Helmet>
        <title>Elite Journal of Scientific Research and Review | Elite Press Journals</title>
        <meta name="description" content="EJSRR serves as a dynamic platform for comprehensive scientific reviews and critical analysis across various disciplines. Engage with in-depth explorations of research methodologies, theoretical frameworks, and emerging trends." />
      </Helmet>

      <NavbarPages />
      <div className='relative flex items-center justify-center w-full 
      md:max-h-[450px] ss:max-h-[300px] max-h-[200px] md:top-[6rem] 
      ss:top-[6rem] top-[4.8rem]'>
        <img src={hero3} alt='hero3'
        className='w-[120rem] md:h-[300px] ss:h-[250px]
        h-[150px]' />
        <div className='absolute w-full md:pb-8 ss:pb-8 pb-6'>
          <HeroEJSRR />
        </div>
      </div>

      <div className='journal'>
        <div className={`${styles.padding} max-w-[82rem] mx-auto flex 
        md:pt-28 ss:pt-28 pt-28 hidden md:flex`}>
          <div className="mr-4 mt-[30px] flex-1">
            <Sidebar sideLinks={ejsrrSideLinks}/>
          </div>

          <div className='md:ml-20'>
            <ResearchHero />
          </div>
        </div>

        <div className='flex ss:pt-28 pt-28 md:hidden flex flex-col'>
          <div className=''>
            <ResearchHero />
          </div>

          <div className="">
            <Sidebar2 sideLinks={ejsrrSideLinks} />
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

export default EJSRR;