import { useState } from 'react';
import { sideLinks } from '../constants';
import { useNavigate } from 'react-router-dom';
import { EJH } from '../assets';

const Sidebar = () => {
  const [active, setActive] = useState('requests');

  const navigate = useNavigate();

  const handleSideItemClick = (link) => {
    setActive(link.title);
    navigate(link.route);
  };

  return (
    <div className='flex items-center hidden md:flex z-20 w-full'
    >
      <div className="w-full flex justify-between items-center py-10">
        <div className="flex flex-col items-center w-full">
          <ul className="list-none flex flex-col gap-8 hidden md:flex
          mt-24 font-medium">
            {sideLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? 'bg-secondary p-2 rounded-md'
                    : 'bg-none'
                } hover:text-secondary grow3 text-[20px] text-decoration-none 
                cursor-pointer text-textalt list-item`}
                onClick={() => {
                  handleSideItemClick(link);
                }}
              >
                <a 
                  href={link.route} 
                  className='flex gap-6 items-center'
                >
                  {link.Icon && (
                    <span className="icon">
                      <img src={link.Icon} alt={link.title} 
                        className='md:h-[50px] ss:h-[50px] w-auto'
                      />
                    </span>
                  )}
                  {link.title}
                </a>
              </li>
            ))}

            <li className='hover:text-secondary grow3 text-[20px] list-item
            text-decoration-none cursor-pointer text-textalt mt-20'>
              <a 
                href='/'
                className='flex gap-6 items-center icon'
              >
                <img src={EJH} alt='submit'
                  className='md:h-[50px] ss:h-[50px] w-auto'
                />
                Submit Manuscript
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
