import { SectionWrapper } from "../hoc";
import { layout } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { useNavigate } from 'react-router-dom';
import { aboutImg } from '../assets';

const About = () => {
    const navigate = useNavigate();

    return (
        <section className="w-full md:min-h-[550px] ss:min-h-[550px] 
        min-h-[900px] flex items-center"
        >
            <div className='items-center w-full flex-col md:gap-5 
            ss:gap-5 gap-10'
            >
                <motion.div variants={fadeIn('up', 'spring', 0.3)}
                className="flex flex-row items-center w-full md:mb-8 ss:mb-14 
                mb-8">
                    <h1 className="text-main font-bold md:text-[52px]
                    ss:text-[45px] text-[33px] md:mr-14 ss:mr-6 mr-5
                    md:leading-[2px] ss:leading-[2px] leading-[40px]">
                       About Elite Press
                    </h1>
                    <motion.div variants={fadeIn('down', 'spring', 0.3)}
                    className="flex-1 relative items-center justify-center">
                        <div className='bg-secondary w-full h-[3px]
                        rounded-full' />
                    </motion.div>
                </motion.div>
                
                <motion.div variants={fadeIn('down', 'spring', 0.3)}
                className="flex md:flex-row ss:flex-row flex-col md:gap-10 
                ss:gap-10 gap-12 w-full aboutimage">
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

                        <div className="md:mt-8 ss:mt-8 mt-6">
                            <button className='bg-main grow md:text-[16px] 
                            ss:text-[16px] text-[14px] md:py-3 ss:py-3 py-2 
                            md:px-14 ss:px-14 px-6 text-white rounded-full
                            font-medium border-none'
                            onClick={() => navigate('/about')}
                            >
                                Learn More
                            </button>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={fadeIn('left', 'spring', 0.3)}>
                        <img src={aboutImg} alt='about'
                        className='md:h-[400px] ss:h-[300px] w-auto'
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWrapper(About, 'about');