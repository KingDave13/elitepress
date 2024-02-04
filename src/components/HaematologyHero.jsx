import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { EJH } from '../assets';

const Haemat = () => {

    return (
        <section className="w-full md:min-h-[550px] ss:min-h-[550px] 
        min-h-[900px] flex flex-col"
        >
            <div className='flex md:flex-row ss:flex-row flex-col md:gap-10 
                ss:gap-10 gap-12 w-full aboutimage'
            >
                <motion.div 
                    variants={fadeIn('left', 'spring', 0.3)}>
                    <img src={EJH} alt='Haemat'
                    className='md:h-auto w-[3000px]'
                    />
                </motion.div>

                <motion.div variants={textVariant()}
                className=''>
                    <p className='text-main md:text-[20px] ss:text-[15px] 
                    text-[13px] md:leading-[28px] text-justify'>
                    Get on a journey into the intricate world of 
                    blood-related disorders. EJH is your guide to exploring 
                    the forefront of haematological research, unraveling 
                    the complexities of hematopoiesis, coagulation and 
                    the latest therapeutic interventions. Explore
                    groundbreaking studies that pave the way for 
                    advancements in the understanding and treatment of 
                    conditions affecting the blood and related systems.
                    </p>
                </motion.div>
            </div>

            <motion.div variants={fadeIn('down', 'spring', 0.3)}
            className="md:mt-12">
                <div className='bg-main w-full h-[1px]
                rounded-full' />
            </motion.div>

            <motion.div variants={textVariant()}
                className='md:mt-8 flex flex-row md:gap-4 items-center'>
                    <p className='text-main md:text-[18px] ss:text-[15px] 
                    text-[13px] font-bold'>
                        ISSN: <span className="font-light">1234-56789</span>
                    </p>

                    <p className='text-main md:text-[20px] ss:text-[15px] 
                    text-[13px]'>
                        |
                    </p>

                    <p className='text-main md:text-[18px] ss:text-[15px] 
                    text-[13px] font-bold'>
                        EJH: <span className="font-light">
                            Elite Journal of Haematology
                        </span>
                    </p>

                    <p className='text-main md:text-[20px] ss:text-[15px] 
                    text-[13px]'>
                        |
                    </p>

                    <p className='text-main md:text-[18px] ss:text-[15px] 
                    text-[13px] font-light'>
                        Elite Press Journals
                    </p>
                </motion.div>
        </section>
    );
};

export default SectionWrapper(Haemat, '');