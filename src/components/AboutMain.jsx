import { heroImg2 } from '../assets';
import { layout } from '../styles';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const AboutMain = () => {
  return (
    <section className='w-full min-h-[600px] items-center flex flex-col'>
        <div className='w-full md:mt-28 ss:mt-20 mt-24'>
            <div className='justify-between w-full flex md:flex-row 
            ss:flex-wrap flex-col items-start gap-5 items-center'>
                <motion.div variants={textVariant(0.3)}
                className={`${layout.sectionInfo}`}
                >
                    <h1 className='text-main font-bold md:text-[52px]
                    ss:text-[45px] text-[33px]'>
                        Who we are
                    </h1>
                    
                    <div className='flex relative'>
                        <div className='bg-secondary md:w-[120px] ss:w-[120px]
                    w-[80px] h-[3px]' />
                    </div>

                    <p className='md:mt-8 ss:mt-8 mt-5 text-main md:text-[19px] 
                    ss:text-[18px] text-[14px] md:max-w-[650px] ss:max-w-[700px]
                    md:leading-[27px] ss:leading-[25px] leading-[20px]'>
                    Welcome to Elite Press, a distinguished platform dedicated 
                    to advancing medical knowledge and fostering excellence in 
                    healthcare. At Elite Press, we are committed to 
                    disseminating cutting-edge research through our 
                    comprehensive range of medical journals. Each publication 
                    is meticulously curated to contribute to the progress of 
                    various disciplines within the medical field.
                    </p>

                    <p className='md:mt-8 ss:mt-8 mt-5 text-main md:text-[19px] 
                    ss:text-[18px] text-[14px] md:max-w-[650px] ss:max-w-[700px]
                    md:leading-[27px] ss:leading-[25px] leading-[20px]'>
                    Our mission is to empower medical professionals, 
                    researchers and academicians by providing a dynamic 
                    platform for the dissemination of groundbreaking medical 
                    research. Elite Press welcomes collaboration with 
                    researchers, institutions and industry partners. Whether 
                    you are looking to publish groundbreaking research or 
                    explore partnership opportunities, we invite you to join 
                    us in shaping the future of medical knowledge.
                    </p>
                </motion.div>

                <motion.div 
                variants={slideIn('right', 'tween', 0.2, 0.5)}
                className='md:mt-10 ss:mt-6 mt-2'>
                    <img src={heroImg2} alt='cloth'
                    className='md:h-[500px] ss:h-[400px] h-[300px] w-auto'
                    />
                </motion.div>
            </div>
        </div>
    </section> 
  )
};

export default SectionWrapper(AboutMain, '');