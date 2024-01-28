import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { journals } from '../constants';

const JournalCard = ({ index, title, icon, desc, route }) => {
    return (
      <div className='w-full grow3 show'>
        <motion.div
          variants={fadeIn('right', 'spring', 0.4 * index, 0.75)}
          className='w-full cursor-pointer shadow-lg hover:shadow-xl 
          rounded-lg bg-primaryalt'
        >
        <a href={route} className='md:hidden block'>
            <div options={{ max: 45, scale: 1, speed: 450 }}
                className='p-5 md:gap-8 ss:gap-6 gap-5 flex justify-evenly 
                md:flex-row flex-col'
            >
                <img src={icon} alt={title}
                    className='md:w-[250px] ss:w-[300px] h-auto 
                    object-contain rounded-lg'
                />

                <div className="flex flex-col gap-3 justify-between">
                    <h3
                    className='text-main md:text-[25px] ss:text-[23px] 
                    text-[18px] font-bold md:leading-[28px] 
                    ss:leading-[25px] leading-[22px]'
                    >
                        {title}
                    </h3>

                    <div className='flex'>
                        <div className='bg-secondary w-full h-[2px] 
                        rounded-full' />
                    </div>

                    <h3
                    className='text-textalt md:text-[15px] ss:text-[14px] 
                    text-[14px] md:leading-[18px] ss:leading-[18px]
                    leading-[17px] text-justify'
                    >
                        {desc}
                    </h3>

                    <div className="md:block hidden">
                        <a href={route}>
                            <button className='grow md:text-[12px] 
                            ss:text-[14px] md:py-1.5 ss:py-1.5 
                            md:px-6 ss:px-6 text-main rounded-full
                            font-medium border-textalt border-[1px] 
                            hover:text-white opacity-0 transition-opacity 
                            duration-500'
                            >
                                Read More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </a>

        <div className='hidden md:block'>
            <div options={{ max: 45, scale: 1, speed: 450 }}
                className='p-5 md:gap-8 ss:gap-6 gap-5 flex justify-evenly 
                md:flex-row flex-col'
            >
                <img src={icon} alt={title}
                    className='md:w-[250px] ss:w-[300px] h-auto 
                    object-contain rounded-lg'
                />

                <div className="flex flex-col gap-3 justify-between">
                    <h3
                    className='text-main md:text-[25px] ss:text-[23px] 
                    text-[18px] font-bold md:leading-[28px] 
                    ss:leading-[25px] leading-[22px]'
                    >
                        {title}
                    </h3>

                    <div className='flex'>
                        <div className='bg-secondary w-full h-[2px] 
                        rounded-full' />
                    </div>

                    <h3
                    className='text-textalt md:text-[15px] ss:text-[14px] 
                    text-[14px] md:leading-[18px] ss:leading-[18px]
                    leading-[17px] text-justify'
                    >
                        {desc}
                    </h3>

                    <div className="md:block hidden">
                        <a href={route}>
                            <button className='grow md:text-[12px] 
                            ss:text-[14px] md:py-1.5 ss:py-1.5 
                            md:px-6 ss:px-6 text-main rounded-full
                            font-medium border-textalt border-[1px] 
                            hover:text-white opacity-0 transition-opacity 
                            duration-500'
                            >
                                Read More
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
      </div>
    )
  };

const Journals = () => {

  return (
    <section className="md:min-h-[1800px] ss:min-h-[3000px] min-h-[5850px] 
    flex items-center">
        <div className='items-center w-full flex flex-col md:mt-28 
        ss:mt-20 mt-24'>
            <motion.div className='flex items-center flex-col relative 
            justify-center w-full'>
                <div className='grid grid-cols-2 md:gap-12 ss:gap-4 gap-5'>
                    {journals.map((journal, index) => (
                        <JournalCard 
                            key={journal.title}
                            index={index}
                            {...journal}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default SectionWrapper(Journals, '');