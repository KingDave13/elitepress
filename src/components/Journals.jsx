import { useState } from 'react';
import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { journals } from '../constants';
import { BsArrowRightShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const JournalCard = ({ index, title, icon, desc }) => {
    return (
      <div className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className='w-full p-[1px] rounded-[20px] cursor-pointer'
        >
          <div options={{ max: 45, scale: 1, speed: 450 }}
            className='bg-tertiary rounded-[20px] py-5 px-12
            min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title}
            className='w-16 h-16 object-contain'
            />
            <h3
              className='text-white text-[20px] font-bold text-center'
            >
              {title}
            </h3>
            <h3
              className='text-white text-[20px] text-center'
            >
              {desc}
            </h3>
          </div>
        </motion.div>
      </div>
    )
  };

const Journals = () => {
    const navigate = useNavigate();

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

            <motion.div className='flex md:mt-16 ss:mt-16 mt-10 
            items-center flex-col relative justify-center'>
                <div className='flex-wrap gap-10'>
                    {journals.map((journal, index) => (
                        <JournalCard 
                            key={journal.title}
                            index={index}
                            {...journal}
                        />
                    ))}
                </div>

                {/* <div className='md:flex hidden absolute left-0'>
                    <motion.div
                        className='cursor-pointer'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={navigateLeft}
                        transition={{ ease: 'easeInOut' }}
                    >
                        <HiChevronLeft className='md:w-14 ss:w-14 
                        h-14 rounded-full bg-secondary 
                        bg-opacity-30 p-3 text-primary 
                        hover:bg-opacity-70' />
                    </motion.div>
                </div>

                <div className='md:flex hidden absolute right-0'>
                    <motion.div
                        className='cursor-pointer'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={navigateRight}
                        transition={{ ease: 'easeInOut' }}
                    >
                        <HiChevronRight className='w-14 h-14 
                        rounded-full bg-secondary bg-opacity-30 
                        p-3 text-primary hover:bg-opacity-70' />
                    </motion.div>
                </div> */}

                <div className='flex flex-row md:mt-16 ss:mt-10 mt-6 
                justify-center items-center gap-1 cursor-pointer 
                grow2 md:mb-0 ss:mb-5 mb-0'>
                    <p className='font-medium text-primary' 
                    onClick={() => navigate('/journals')}>
                        View All
                    </p>
                    <BsArrowRightShort className='text-[30px] 
                    text-primary' />
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default SectionWrapper(Journals, 'journals');