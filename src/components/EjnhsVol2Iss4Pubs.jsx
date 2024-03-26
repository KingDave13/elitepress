import { useState, useEffect } from 'react';

import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { Ejnhsvol2iss4 } from "../constants";

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
                    rel='noopener noreferrer'
                    className='text-primary underline text-[14px] md:text-[16px] 
                    ss:text-[14px] font-medium cursor-pointer hover:text-secondary'
                    >
                        Read More
                    </a>
                </div>

                <motion.div
                className='md:mt-3 ss:mt-3 mt-2 flex md:flex-row ss:flex-row
                flex-col md:gap-2 ss:gap-2 gap-1 md:items-center 
                ss:items-center'>
                    <p className='text-textalt md:text-[14px] ss:text-[13px] 
                    text-[12px]'>
                        Elite Journal of Nursing and Health Sciences
                    </p>

                    <p className='text-textalt md:text-[15px] ss:text-[14px] 
                    text-[13px] md:flex ss:flex hidden'>
                        |
                    </p>

                    <p className='text-textalt md:text-[14px] ss:text-[13px] 
                    text-[12px]'>
                        Volume 2, Issue 4, 2024
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

const EjnhsVol2Iss4Pubs = () => {
    const isMobile = window.innerWidth <= 620;

    const [currentPage, setCurrentPage] = useState(() => {
        const savedPage = parseInt(localStorage.getItem('currentPage'));
        return isNaN(savedPage) ? 1 : savedPage;
    });
    const itemsPerPage = 3;
    const totalItems = Ejnhsvol2iss4.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    useEffect(() => {
        localStorage.setItem('currentPage', currentPage.toString());
        window.scrollTo(0, 0);
    }, [currentPage]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const currentItems = Ejnhsvol2iss4.slice(startIndex, endIndex);

    return (
        <section className="w-full md:min-h-[550px] ss:min-h-[300px] 
        min-h-[500px] flex flex-col"
        >
            <div className='items-center w-full flex flex-col'>
                <motion.div variants={fadeIn('down', 'spring', 0.2)}
                className='flex items-center flex-col justify-center 
                w-full'>
                    <div className='w-full flex flex-col md:gap-12 
                    ss:gap-10 gap-10'>
                        {currentItems.map((item, index) => (
                            <Publication
                                key={item.title}
                                index={startIndex + index + 1}
                                {...item}
                            />
                        ))}
                    </div>

                    <div className="w-full flex justify-center mt-8
                    items-center relative">
                        <div className='flex gap-5'>
                            <button className='bg-main text-white font-medium
                            flex items-center justify-center gap-2 md:px-5 
                            ss:px-5 px-3 md:py-2.5 ss:py-2.5 py-2
                            rounded-md cursor-pointer grow4 text-[13px]'
                            onClick={handlePrevPage} 
                            disabled={currentPage === 1}
                            >
                                <GoArrowLeft 
                                size={isMobile ? 23 : 25}
                                />
                            </button>
                            
                            <button className='bg-main text-white font-medium
                            flex items-center justify-center gap-2 md:px-5 
                            ss:px-5 px-3 md:py-2.5 ss:py-2.5 py-2
                            rounded-md cursor-pointer grow4 text-[13px]'
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            >   
                                <span className={isMobile ? 'hidden' : 'block'}>Next Page</span>
                                <GoArrowRight 
                                size={isMobile ? 23 : 20}
                                />
                            </button>
                        </div>
                        
                        <div className='flex absolute right-0'>
                            <p className='text-maintext font-medium 
                            md:text-[17px] ss:text-[16px] text-[14px]'>
                                Page <span className='font-bold'>
                                    {currentPage}
                                    </span> of <span className='font-bold'>
                                    {totalPages}
                                    </span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWrapper(EjnhsVol2Iss4Pubs, '');