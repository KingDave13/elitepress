import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { EJNHS } from '../assets';

const Nurse = () => {

    return (
        <section className="w-full md:min-h-[550px] ss:min-h-[300px] 
        min-h-[500px] flex flex-col"
        >
            <div className='flex md:flex-row ss:flex-row flex-col md:gap-10 
                ss:gap-10 gap-8 w-full aboutimage'
            >
                <motion.div 
                    variants={fadeIn('left', 'spring', 0.3)}>
                    <img src={EJNHS} alt='Nursing'
                    className='md:h-auto w-[3000px]'
                    />
                </motion.div>

                <motion.div variants={textVariant()}
                className=''>
                    <p className='text-main md:text-[20px] ss:text-[17px] 
                    text-[14px] md:leading-[28px] ss:leading-[24px] 
                    leading-[19px] md:text-justify ss:text-justify text-center'>
                        EJNHS is a platform dedicated to showcasing 
                        research that shapes the nursing profession. 
                        Explore the forefront of nursing science and 
                        advancements in health sciences. From 
                        evidence-based practices to transformative 
                        healthcare delivery models, EJNHS contributes 
                        to the ongoing evolution of nursing and its vital 
                        role in modern healthcare.
                    </p>
                </motion.div>
            </div>

            <motion.div variants={fadeIn('down', 'spring', 0.3)}
            className="md:mt-12 ss:mt-12 mt-6">
                <div className='bg-main w-full h-[1px]
                rounded-full' />
            </motion.div>

            <motion.div variants={textVariant()}
            className='md:mt-8 ss:mt-8 mt-6 flex md:flex-row ss:flex-row
            flex-col md:gap-4 ss:gap-4 gap-1 md:items-center 
            ss:items-center'>
                <p className='text-main md:text-[18px] ss:text-[17px] 
                text-[15px] font-bold'>
                    E-ISSN: <span className="font-light">3027-2726</span>
                </p>

                <p className='text-main md:text-[20px] ss:text-[17px] 
                text-[13px] md:flex ss:flex hidden'>
                    |
                </p>

                <p className='text-main md:text-[18px] ss:text-[17px] 
                text-[15px] font-bold'>
                    EJNHS: <span className="font-light">
                        Elite Journal of Nursing and Health Sciences
                    </span>
                </p>

                <p className='text-main md:text-[20px] ss:text-[17px] 
                text-[13px] md:flex hidden'>
                    |
                </p>

                <p className='text-main md:text-[18px] ss:text-[17px] 
                text-[13px] font-light md:flex hidden'>
                    Elite Press Journals
                </p>
            </motion.div>
        </section>
    );
};

export default SectionWrapper(Nurse, '');