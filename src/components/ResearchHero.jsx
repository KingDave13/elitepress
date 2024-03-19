import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { EJSRR } from '../assets';

const Research = () => {

    return (
        <section className="w-full md:min-h-[550px] ss:min-h-[300px] 
        min-h-[500px] flex flex-col"
        >
            <div className='flex md:flex-row ss:flex-row flex-col md:gap-10 
                ss:gap-10 gap-8 w-full aboutimage'
            >
                <motion.div 
                    variants={fadeIn('left', 'spring', 0.3)}>
                    <img src={EJSRR} alt='research'
                    className='md:h-auto w-[3000px]'
                    />
                </motion.div>

                <motion.div variants={textVariant()}
                className=''>
                    <p className='text-main md:text-[20px] ss:text-[17px] 
                    text-[14px] md:leading-[28px] ss:leading-[24px] 
                    leading-[19px] md:text-justify ss:text-justify text-center'>
                        EJSRR serves as a dynamic platform for 
                        comprehensive scientific reviews and critical 
                        analysis across various disciplines. Engage with 
                        in-depth explorations of research methodologies, 
                        theoretical frameworks, and emerging trends. 
                        EJSRR fosters a scholarly environment where 
                        rigorous analysis and insightful reviews converge 
                        to shape the discourse in scientific research.
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
                    E-ISSN: <span className="font-light">1118-7425</span>
                </p>

                <p className='text-main md:text-[20px] ss:text-[17px] 
                text-[13px] md:flex ss:flex hidden'>
                    |
                </p>

                <p className='text-main md:text-[18px] ss:text-[17px] 
                text-[15px] font-bold'>
                    EJSRR: <span className="font-light">
                        Elite Journal of Scientific Research and Review
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

export default SectionWrapper(Research, '');