import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const Vol2Iss1Pubs = () => {

    return (
        <section className="w-full md:min-h-[550px] ss:min-h-[300px] 
        min-h-[500px] flex flex-col"
        >
            <div className='flex md:flex-row ss:flex-row flex-col md:gap-10 
                ss:gap-10 gap-8 w-full aboutimage'
            >
                <motion.div variants={textVariant()}
                className=''>
                    <p className='text-main md:text-[20px] ss:text-[17px] 
                    text-[14px] md:leading-[28px] ss:leading-[24px] 
                    leading-[19px] md:text-justify ss:text-justify text-center'>
                        EJPH takes on the mantle of addressing public 
                        health challenges head-on. Navigate through 
                        research dedicated to promoting strategies for 
                        community well-being. From preventive measures to 
                        community engagement, this journal is a reservoir 
                        of knowledge aimed at fostering a healthier 
                        society. Join the discourse on public health 
                        advancement with EJPH.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWrapper(Vol2Iss1Pubs, '');