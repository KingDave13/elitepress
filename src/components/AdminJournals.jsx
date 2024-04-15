import React, { useState, useEffect } from 'react';
import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const JournalCard = ({ title, route }) => {
    const navigate = useNavigate();

    return (
      <div className='w-full'>
        <div className="flex gap-3 items-center justify-between w-full">
            <h3
            className='text-main md:text-[22px] ss:text-[21px] 
            text-[16px] font-bold md:leading-[25px] 
            ss:leading-[24px] leading-[22px]'
            >
                {title}
            </h3>

            <div className="flex items-center justify-end">
                <button onClick={() => navigate(route)}
                className='md:text-[15px] ss:text-[14px] text-[12px] 
                cursor-pointer py-1.5 hover:bg-main
                md:px-12 ss:px-8 px-4 text-textalt rounded-lg grow5
                font-medium border-textalt border-[1px] hover:text-white'
                >
                    Manage
                </button>
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
        ss:mt-24 mt-24'>
            <motion.div className='flex items-center flex-col relative 
            justify-center w-full'>
                <div className='grid md:gap-5 ss:gap-6 gap-5 w-full'>
                    {journals.map((journal) => (
                        <div className='flex flex-col md:gap-5 ss:gap-6
                        gap-5'>
                            <JournalCard 
                                key={journal._id}
                                {...journal}
                            />

                            <div className="items-center justify-center">
                                <div className='bg-textalt w-full h-[0.5px]
                                rounded-full' />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default SectionWrapper(AdminJournals, '');