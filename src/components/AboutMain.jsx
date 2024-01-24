import { heroImg2 } from '../assets';
import { layout } from '../styles';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const AboutMain = () => {
  return (
    <section className='w-full min-h-[1380px] items-center flex flex-col'>
        <div className='w-full md:mt-28 ss:mt-20 mt-10'>
            <div className='justify-between w-full flex md:flex-row 
            ss:flex-wrap flex-col items-start gap-5'>
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
            className='md:mt-10 ss:mt-6 mt-0'>
                <img src={heroImg2} alt='cloth'
                className='md:h-[500px] ss:h-[400px] h-[300px] w-auto'
                />
            </motion.div>
            </div>

            <motion.div variants={textVariant(0.8)}
            className='md:mt-3 ss:mt-3 mt-5'>
                <p className='text-main md:text-[20px] 
                    ss:text-[18px] text-[14px] font-bold'>
                    OUR JOURNALS
                </p>

                <div className='md:mt-3 ss:mt-3 mt-2'>
                    <ol className='text-main md:text-[18px] ss:text-[14px] 
                    text-[13px] text-justify md:leading-[22px] flex flex-col
                    md:gap-3 ss:gap-3 gap-2'>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Haematology (EJH):
                            </span>
                            <p className='mt-1'>
                            Delving into the intricacies of blood-related 
                            disorders and advancements in haematological 
                            research.
                            </p>
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Medicine (EJM):
                            </span>
                            <p className='mt-1'>
                            Showcasing breakthroughs and innovations in 
                            general medicine, providing a holistic view 
                            of the medical landscape.
                            </p>
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Health Sciences (EJHS):
                            </span>
                            <p className='mt-1'>
                            Exploring diverse aspects of health sciences, 
                            from epidemiology to healthcare management.
                            </p>
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Medical Sciences (EJMS):
                            </span>
                            <p className='mt-1'>
                            Unveiling the latest findings and trends in 
                            various medical specialties and subspecialties.
                            </p>
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Public Health (EJPH):
                            </span>
                            <p className='mt-1'>
                            Addressing public health challenges and promoting 
                            strategies for community well-being.
                            </p>
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Immunology (EJI):
                            </span>
                            <p className='mt-1'>
                            Investigating the complexities of the immune system 
                            and advancements in immunological research.
                            </p>
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Laboratory Medicine (EJLM):
                            </span>
                            <p className='mt-1'>
                            Highlighting innovations and best practices in 
                            laboratory medicine and diagnostic technologies.
                            </p>
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Nursing Science and Health Sciences (EJNSHS):
                            </span>
                            <p className='mt-1'>
                            Showcasing research that shapes the nursing profession 
                            and advancements in health sciences.
                            </p>
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Scientific Research and Review (EJSRR):
                            </span>
                            <p className='mt-1'>
                            Serving as a platform for comprehensive scientific 
                            reviews and critical analysis across various 
                            disciplines.
                            </p>
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of HIV (EJHIV):
                            </span>
                            <p className='mt-1'>
                            Focusing on research, prevention and treatment 
                            strategies related to Human Immunodeficiency 
                            Virus (HIV).
                            </p>
                        </li>
                    </ol>
                </div>
            </motion.div>
        </div>
    </section> 
  )
};

export default SectionWrapper(AboutMain, '');