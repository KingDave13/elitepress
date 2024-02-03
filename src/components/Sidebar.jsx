import { useState } from 'react';
import { sideLinks } from '../constants';
import { useNavigate } from 'react-router-dom';
import { arrow, arrowright } from '../assets';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleSideItemClick = (link) => {
    navigate(link.route);
  };

  return (
    <div className='flex items-center hidden md:flex w-full'
    >
      <div className="w-full flex justify-between items-center py-10">
        <div className="flex flex-col items-center w-full">
          <ul className="list-none flex flex-col gap-5 hidden md:flex
          w-[350px]">
            {sideLinks.map((link) => (
              <li
                key={link.id}
                className='grow4 text-[18px] px-6 py-3 border-textalt 
                border-[0.5px] text-decoration-none cursor-pointer 
                text-textalt list-item bg-white'
                onClick={() => {
                  handleSideItemClick(link);
                }}
              >
                <a 
                  href={link.route} 
                  className='flex gap-6 items-center justify-between'
                >
                    {link.title}
                    <span>
                      <img src={arrow} alt={link.title} 
                        className='md:h-[5px] ss:h-[5px] w-auto'
                      />
                    </span>
                </a>
              </li>
            ))}

            <li className='grow4 text-[18px] px-6 py-3 border-textalt 
                border-[0.5px] text-decoration-none cursor-pointer 
                text-white list-item bg-main mt-16'>
              <a 
                href='/'
                className='flex gap-6 items-center justify-between'
              >
                Submit Manuscript

                <img src={arrowright} alt='submit'
                  className='md:h-[11px] ss:h-[10px] w-auto'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
