import { SectionWrapper } from "../hoc";
import { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { EJH } from '../assets';

const Haemat = () => {

    return (
        <section className="w-full md:min-h-[550px] ss:min-h-[550px] 
        min-h-[900px] flex items-center"
        >
            <div className='flex md:flex-row ss:flex-row flex-col md:gap-10 
                ss:gap-10 gap-12 w-full aboutimage'
            >
                <motion.div 
                    variants={fadeIn('left', 'spring', 0.3)}>
                    <img src={EJH} alt='Haemat'
                    className='md:h-[300px] ss:h-[300px] w-auto'
                    />
                </motion.div>

                <motion.div variants={textVariant()}
                className={`${layout.sectionInfo}`}>
                    <p className='text-main md:text-[17px] ss:text-[15px] 
                    text-[13px] md:max-w-[700px] ss:max-w-[400px]  
                    md:leading-[23px]'>
                    Welcome to Elite Press, a distinguished platform dedicated 
                    to advancing medical knowledge and fostering excellence in 
                    healthcare. At Elite Press, we are committed to disseminating
                    cutting-edge research through our comprehensive range of
                    medical journals. Each publication is carefully curated 
                    to contribute to the progress of various disciplines within 
                    the medical field.
                    </p>

                    <p className='text-main md:text-[17px] ss:text-[15px] 
                    text-[13px] md:max-w-[700px] ss:max-w-[400px] 
                    md:mt-5 ss:mt-5 mt-5 md:leading-[23px]'>
                    We stand at the forefront of promoting academic excellence, 
                    scientific rigor and collaboration within the medical 
                    community. Our commitment to providing a platform for knowledge 
                    exchange and fostering a community of experts drives the 
                    success of our journals.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWrapper(Haemat, '');