import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { EJI } from '../assets';

const Immune = () => {

    return (
        <section className="w-full md:min-h-[550px] ss:min-h-[300px] 
        min-h-[500px] flex flex-col"
        >
            <div className='flex md:flex-row ss:flex-row flex-col md:gap-10 
                ss:gap-10 gap-8 w-full aboutimage'
            >
                <motion.div 
                    variants={fadeIn('left', 'spring', 0.3)}>
                    <img src={EJI} alt='Immunology'
                    className='md:h-auto w-[3000px]'
                    />
                </motion.div>

                <motion.div variants={textVariant()}
                className=''>
                    <p className='text-main md:text-[20px] ss:text-[17px] 
                    text-[14px] md:leading-[28px] ss:leading-[24px] 
                    leading-[19px] md:text-justify ss:text-justify text-center'>
                        Journey into the intricate world of the immune 
                        system with EJI. Investigate the complexities of 
                        immune responses and stay abreast of advancements 
                        in immunological research. EJI brings together 
                        studies that delve into the molecular mechanisms, 
                        therapeutic interventions and emerging trends in 
                        immunology, shaping the future of immune-related 
                        healthcare.
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
                    E-ISSN: <span className="font-light">1118-7441</span>
                </p>

                <p className='text-main md:text-[20px] ss:text-[17px] 
                text-[13px] md:flex ss:flex hidden'>
                    |
                </p>

                <p className='text-main md:text-[18px] ss:text-[17px] 
                text-[15px] font-bold'>
                    EJI: <span className="font-light">
                        Elite Journal of Immunology
                    </span>
                </p>

                <p className='text-main md:text-[20px] ss:text-[15px] 
                text-[13px] md:flex hidden'>
                    |
                </p>

                <p className='text-main md:text-[18px] ss:text-[15px] 
                text-[13px] font-light md:flex hidden'>
                    Elite Press Journals
                </p>
            </motion.div>
        </section>
    );
};

export default SectionWrapper(Immune, '');