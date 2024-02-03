import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { EJH } from '../assets';

const Haemat = () => {

    return (
        <section className="w-full md:min-h-[550px] ss:min-h-[550px] 
        min-h-[900px] flex"
        >
            <div className='flex md:flex-row ss:flex-row flex-col md:gap-10 
                ss:gap-10 gap-12 w-full aboutimage'
            >
                <motion.div 
                    variants={fadeIn('left', 'spring', 0.3)}>
                    <img src={EJH} alt='Haemat'
                    className='md:h-auto w-auto'
                    />
                </motion.div>

                <motion.div variants={textVariant()}
                className=''>
                    <p className='text-main md:text-[20px] ss:text-[15px] 
                    text-[13px] md:leading-[28px]'>
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
        </section>
    );
};

export default SectionWrapper(Haemat, '');