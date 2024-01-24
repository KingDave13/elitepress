// import { frame } from '../assets';
import { layout } from '../styles';
import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const AboutMain = () => {
  return (
    <section className='w-full min-h-[700px] items-center flex flex-col'>
        <div className='justify-between w-full items-center flex 
        md:flex-row ss:flex-wrap flex-col items-start gap-5'
        >
            <motion.div variants={textVariant()}
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

                <p className='md:mt-8 ss:mt-8 mt-5 text-main md:text-[20px] 
                ss:text-[18px] text-[14px] md:max-w-[620px] ss:max-w-[700px]
                md:leading-[28px] ss:leading-[25px] leading-[20px]'>
                Welcome to Elite Press, a distinguished platform dedicated 
                to advancing medical knowledge and fostering excellence in 
                healthcare. At Elite Press, we are committed to 
                disseminating cutting-edge research through our 
                comprehensive range of medical journals. Each publication 
                is meticulously curated to contribute to the progress of 
                various disciplines within the medical field.
                </p>

                <p className='md:mt-8 ss:mt-8 mt-5 text-main md:text-[20px] 
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
                            </span><br></br>
                            Delving into the intricacies of blood-related 
                            disorders and advancements in haematological 
                            research.
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Medicine (EJM):
                            </span><br></br>
                            Showcasing breakthroughs and innovations in 
                            general medicine, providing a holistic view 
                            of the medical landscape.
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Health Sciences (EJHS):
                            </span><br></br>
                            Exploring diverse aspects of health sciences, 
                            from epidemiology to healthcare management.
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Medical Sciences (EJMS):
                            </span><br></br>
                            Unveiling the latest findings and trends in 
                            various medical specialties and subspecialties.
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Public Health (EJPH):
                            </span><br></br>
                            Addressing public health challenges and promoting 
                            strategies for community well-being.
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Haematology (EJH):
                            </span><br></br>
                            Delving into the intricacies of blood-related 
                            disorders and advancements in haematological 
                            research.
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Haematology (EJH):
                            </span><br></br>
                            Delving into the intricacies of blood-related 
                            disorders and advancements in haematological 
                            research.
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Haematology (EJH):
                            </span><br></br>
                            Delving into the intricacies of blood-related 
                            disorders and advancements in haematological 
                            research.
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Haematology (EJH):
                            </span><br></br>
                            Delving into the intricacies of blood-related 
                            disorders and advancements in haematological 
                            research.
                        </li>
                        <li>
                            <span className='font-bold'>
                            Elite Journal of Haematology (EJH):
                            </span><br></br>
                            Delving into the intricacies of blood-related 
                            disorders and advancements in haematological 
                            research.
                        </li>
                    </ol>
                </div>
            </motion.div>

            <motion.div 
            variants={slideIn('right', 'tween', 0.2, 0.5)}
            className='md:mt-10 ss:mt-6 mt-0'>
                <img alt='cloth'
                className=' md:h-[500px] ss:h-[500px] h-[280px] w-auto'
                />
            </motion.div>
        </div>
    </section> 
  )
};

export default SectionWrapper(AboutMain, '');