import { useState } from 'react';
import { sideLinks } from '../constants';
import { useNavigate } from 'react-router-dom';
import { arrow, arrowright } from '../assets';
import { SectionWrapper } from '../hoc';

const Sidebar2 = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSideItemClick = (link) => {
    if (window.innerWidth < 768) {
      // For mobile devices, toggle the menu open/close
      if (selectedItem === link.id) {
        setSelectedItem(null);
        setIsMenuOpen(false);
      } else {
        setSelectedItem(link.id);
        setIsMenuOpen(true);
      }
    } else {
      // For desktop, directly navigate to the link
      navigate(link.route);
    }
  };

  return (
    <div className='flex items-center w-full'
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex flex-col items-center w-full pb-10">
          <ul className="list-none flex flex-col gap-4 w-full">
            {sideLinks.map((link) => (
              <li
                key={link.id}
                className='grow4 text-[15px] px-5 py-2 border-textalt 
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
                        className='ss:h-[5px] h-[5px] w-auto'
                      />
                    </span>
                </a>
              </li>
            ))}

            <li className='grow4 text-[15px] px-5 py-2 border-textalt 
                border-[0.5px] text-decoration-none cursor-pointer 
                text-white list-item bg-main ss:mt-16 mt-8'>
              <a 
                href='/'
                className='flex gap-6 items-center justify-between'
              >
                Submit Manuscript

                <img src={arrowright} alt='submit'
                  className='ss:h-[10px] h-[10px] w-auto'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Sidebar2, '');
