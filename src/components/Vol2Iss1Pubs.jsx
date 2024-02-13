import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { vol2iss1 } from "../constants";

const Publication = ({ index, title, authors, link }) => {
    return (
        <motion.div
            variants={textVariant}
            className='p-4 md:p-6 ss:p-6 bg-white shadow-md
            grow5'
        >
            <div className='flex flex-col gap-3'>
                <div>
                    <h3
                    className='text-[18px] md:text-[25px] ss:text-[22px] 
                    font-bold text-main'
                    >
                        {title}
                    </h3>

                    <h3
                    className='text-[14px] md:text-[18px] ss:text-[16px] 
                    text-textalt'
                    >
                        {authors}
                    </h3>
                </div>

                <div>
                    <a
                    href={link}
                    className='text-primary underline text-[14px] md:text-[16px] 
                    ss:text-[14px] font-medium cursor-pointer hover:text-secondary'
                    >
                        Read More
                    </a>
                </div>
            </div>
        </motion.div>
    );

}

const Vol2Iss1Pubs = () => {
    return (
        <section className="w-full md:min-h-[550px] ss:min-h-[300px] 
        min-h-[500px] flex flex-col"
        >
            <div className='items-center w-full flex flex-col'>
                <motion.div className='flex items-center flex-col 
                justify-center w-full'>
                    <div className='w-full md:gap-12 ss:gap-6 gap-10'>
                        {vol2iss1.map((item, index) => (
                            <Publication
                                key={item.title}
                                index={index}
                                {...item}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWrapper(Vol2Iss1Pubs, '');