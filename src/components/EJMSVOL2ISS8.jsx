import { layout } from '../styles';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const HeroEJMSVOL2ISS8 = () => {  
    return (
      <section className='w-full'>
          <div className=' w-full flex flex-col'
          >
              <motion.div variants={textVariant()}
              className={`${layout.sectionInfo} justify-center 
              items-center md:gap-3 ss:gap-2 gap-2`}
              >
                <h1 className='text-secondary font-bold md:text-[65px]
                ss:text-[60px] text-[30px] tracking-tight text-center
                md:leading-[90px] ss:leading-[65px] leading-[30px]'>
                  Elite Journal of Medical Sciences
                </h1>

                <div className='flex flex-row items-center md:gap-3 
                ss:gap-2 gap-1 text-white md:text-[20px] ss:text-[20px] 
                text-[13px] justify-center'>
                  <p>Volume 2, Issue 8, 2024 Publications</p>
                </div>
              </motion.div>          
          </div>
      </section>  
    )
  };
  
export default SectionWrapper(HeroEJMSVOL2ISS8, '');