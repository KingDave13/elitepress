import { layout } from '../styles';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { BsArrowRightShort } from 'react-icons/bs';

const HeroEJHS = () => {  
    return (
      <section className='w-full'>
          <div className=' w-full flex flex-col'
          >
              <motion.div variants={textVariant()}
              className={`${layout.sectionInfo} justify-center 
              items-center md:gap-0 ss:gap-0 gap-2`}
              >
                <h1 className='text-secondary font-bold md:text-[65px]
                ss:text-[65px] text-[30px] tracking-tight text-center
                md:leading-[90px] ss:leading-[70px] leading-[30px]'>
                  Elite Journal of Health Sciences
                </h1>

                <div className='flex flex-row items-center md:gap-3 
                ss:gap-5 gap-1 text-white md:text-[20px] ss:text-[20px] 
                text-[13px] justify-center'>
                  <p>Home</p>
                  <BsArrowRightShort className='md:text-[30px] 
                  ss:text-[30px] text-[22px] text-white'/>
                  <p>Journals</p>
                  <BsArrowRightShort className='md:text-[30px] 
                  ss:text-[30px] text-[22px] text-white'/>
                  <p>Elite Journal of Health Sciences</p>
                </div>
              </motion.div>          
          </div>
      </section>  
    )
  };
  
export default SectionWrapper(HeroEJHS, '');