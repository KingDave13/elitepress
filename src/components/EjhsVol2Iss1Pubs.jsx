import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { Ejhsvol2iss1 } from "../constants";

const Publication = ({ pages, abstract, title, authors, route }) => {
    return (
        <motion.div
            variants={textVariant}
            className='p-4 md:p-6 ss:p-6 bg-white shadow-md
            grow5'
        >
            <div className='flex flex-col gap-3'>
                <div className="flex flex-col gap-1">
                    <h3
                    className='text-[18px] md:text-[25px] ss:text-[22px] 
                    font-bold text-main leading-tight'
                    >
                        {title}
                    </h3>

                    <h3
                    className='text-[14px] md:text-[18px] ss:text-[16px] 
                    text-textalt font-medium'
                    >
                        {authors}
                    </h3>

                    <h3 className='text-[14px] md:text-[18px] ss:text-[16px] 
                    text-main font-bold md:mt-5 ss:mt-4 mt-3'>
                        Abstract
                    </h3>

                    <p className='text-[14px] md:text-[16px] ss:text-[16px] 
                    text-primary'>
                        {abstract}
                    </p>
                </div>

                <div>
                    <a
                    href={route}
                    target="blank"
                    className='text-primary underline text-[14px] md:text-[16px] 
                    ss:text-[14px] font-medium cursor-pointer hover:text-secondary'
                    >
                        Read More
                    </a>
                </div>

                <motion.div variants={textVariant()}
                className='md:mt-3 ss:mt-3 mt-2 flex md:flex-row ss:flex-row
                flex-col md:gap-2 ss:gap-2 gap-1 md:items-center 
                ss:items-center'>
                    <p className='text-textalt md:text-[14px] ss:text-[13px] 
                    text-[12px]'>
                        Elite Journal of Health Sciences
                    </p>

                    <p className='text-textalt md:text-[15px] ss:text-[14px] 
                    text-[13px] md:flex ss:flex hidden'>
                        |
                    </p>

                    <p className='text-textalt md:text-[14px] ss:text-[13px] 
                    text-[12px]'>
                        Volume 2, Issue 1, 2024
                    </p>

                    <p className='text-textalt md:text-[15px] ss:text-[14px] 
                    text-[13px] md:flex ss:flex hidden'>
                        |
                    </p>

                    <p className='text-textalt md:text-[14px] ss:text-[13px] 
                    text-[12px]'>
                        pp. {pages}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );

}

const EjhsVol2Iss1Pubs = () => {
    return (
        <section className="w-full md:min-h-[550px] ss:min-h-[300px] 
        min-h-[500px] flex flex-col"
        >
            <div className='items-center w-full flex flex-col'>
                <motion.div variants={fadeIn('down', 'spring', 0.2)}
                className='flex items-center flex-col 
                justify-center w-full'>
                    <div className='w-full flex flex-col md:gap-12 
                    ss:gap-10 gap-10'>
                        {Ejhsvol2iss1.map((item, index) => (
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

export default SectionWrapper(EjhsVol2Iss1Pubs, '');