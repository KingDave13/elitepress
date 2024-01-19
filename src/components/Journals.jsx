import { useState } from 'react';
import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { journals } from '../constants';
import { BsArrowRightShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Journals = () => {
  return (
    <section className="md:min-h-[750px] ss:min-h-[700px] min-h-[800px] 
    flex items-center">
        <div className='items-center w-full flex flex-col md:pb-10 md:mb-0 
        ss:mb-0 mb-8'>
            <motion.div variants={fadeIn('up', 'spring', 0.3)}
            className="flex justify-between items-center w-full md:gap-12
            ss:gap-8 gap-5 md:mb-10 ss:mb-8 mb-6">
                <div className="flex-grow">
                    <div className='bg-secondary w-full h-[3px] rounded-full' />
                </div>

                <h1 className="text-main md:text-[52px] ss:text-[45px] 
                text-[33px] font-bold">
                    Our Journals
                </h1>

                <div className="flex-grow">
                    <div className='bg-secondary w-full h-[3px] rounded-full' />
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default SectionWrapper(Journals, 'journals');