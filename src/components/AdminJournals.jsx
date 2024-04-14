import React, { useState, useEffect } from 'react';
import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';

const JournalCard = ({ title, icon, desc, route }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const isMobile = windowWidth <= 1060;

    return (
      <div className='w-full grow3'>
        <div className='w-full shadow-lg hover:shadow-xl rounded-lg 
        bg-primaryalt'
        >
            <div options={{ max: 45, scale: 1, speed: 450 }}
            className='p-8 md:gap-8 ss:gap-6 gap-5 flex justify-evenly 
            md:flex-row flex-col'
            >
                <div className="flex flex-col gap-3 justify-between">
                    <h3
                    className='text-main md:text-[22px] ss:text-[21px] 
                    text-[18px] font-medium md:leading-[25px] 
                    ss:leading-[24px] leading-[22px]'
                    >
                        {title}
                    </h3>

                    <div className="w-full">
                        <button className='md:text-[15px] cursor-pointer
                        ss:text-[14px] md:py-1.5 ss:py-1.5 hover:bg-main
                        md:px-6 ss:px-6 text-textalt rounded-md grow5 w-full
                        font-medium border-textalt border-[1px] hover:text-white'
                        >
                            Manage
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
};

const AdminJournals = () => {
    const [journals, setJournals] = useState([]);

    useEffect(() => {
        const fetchJournals = async () => {
            try {
                const response = await fetch('http://localhost:3001/journals', {
                    method: 'GET',
                });
                const data = await response.json();
                setJournals(data);
            } catch (error) {
                console.error('Error fetching journals:', error);
            }
        };

        fetchJournals();
    }, []);

  return (
    <section className="flex items-center">
        <div className='items-center w-full flex flex-col md:mt-28 
        ss:mt-20 mt-20'>
            <motion.div className='flex items-center flex-col relative 
            justify-center w-full'>
                <div className='grid grid-cols-4 md:gap-8 ss:gap-6 gap-10'>
                    {journals.map((journal) => (
                        <JournalCard 
                            key={journal.title}
                            {...journal}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default SectionWrapper(AdminJournals, '');