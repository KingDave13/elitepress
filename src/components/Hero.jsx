import { SectionWrapper } from '../hoc';
import { heroImg } from '../assets';
import { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const Hero = () => {

  return (
    <section className='relative w-full mobile'>
      <div className='items-center justify-between w-full flex flex-row 
      items-start gap-5 md:mt-36 ss:mt-56 mt-44' 
        >
          <div className={`${layout.sectionInfo}`}>
            <motion.div variants={textVariant()}>
              <h1 className='text-secondary font-bold md:text-[65px]
              ss:text-[50px] text-[40px] md:leading-[80px] 
              ss:leading-[55px] leading-[45px] tracking-tight 
              md:max-w-[750px] ss:max-w-[600px]'>
                Empowering <span className='text-main'>
                medical minds, </span> 
                advancing <span className='text-main'>
                scientific frontiers. </span>
              </h1>
            </motion.div>

            <motion.div variants={textVariant(0.3)}>
              <p className='md:mt-8 ss:mt-8 mt-5 text-main md:text-[18px]
              ss:text-[20px] text-[14px] md:max-w-[600px] ss:max-w-[480px]
              max-w-[320px] font-medium md:leading-[25px] ss:leading-[26px]'>
                Explore the pinnacle of medical knowledge with Elite Press. 
                Elevate your understanding of medical sciences through our 
                meticulously crafted publications, authored by leading 
                experts in their fields.
              </p>
            </motion.div>

            <motion.div variants={textVariant(0.8)}>
              <div className='flex flex-row md:mt-8 ss:mt-10 mt-5 md:gap-5 
              ss:gap-5 gap-2 items-center'>
                <a href='/about'>
                  <button className='bg-main grow md:text-[16px] 
                  ss:text-[16px] text-[14px] md:py-3 ss:py-3 py-2 
                  md:px-14 ss:px-14 px-6 text-white rounded-full
                  font-medium border-none'>
                    Learn More
                  </button>
                </a>
                
                <a href='/contact'>
                  <button className='border-[1px] grow2 border-main 
                  md:text-[16px] ss:text-[16px] text-[14px] md:py-3 
                  ss:py-3 py-2 md:px-14 ss:px-14 px-6 text-main 
                  rounded-full font-medium'>
                    Get in Touch
                  </button>
                </a>
              </div>  
            </motion.div>
          </div>

          <motion.div variants={fadeIn('left', 'spring', 0.3)}
          className='md:flex hidden justify-end'>
            <img src={heroImg} alt='heroImage'
              className='h-[600px] w-auto'
            />
          </motion.div>          
        </div>
    </section>
  );
};

export default SectionWrapper(Hero, 'home');