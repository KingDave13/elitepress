import { useState } from 'react';
import styles from '../styles';
import { sideLinks } from '../constants';
import { HiLogout } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { setLogout } from '../state';

const SidebarAdmin = () => {
  const [active, setActive] = useState('Journals');

  const dispatch = useDispatch();

  const handleSideItemClick = (link) => {
    setActive(link.title);
  };

  return (
    <div className={`${styles.paddingX} flex items-center fixed
    md:border-r-[1px] border-textalt hidden md:flex z-20 bg-main`}
    >
      <div className="w-full flex justify-between items-center mx-auto
      py-16">
        <div className="flex flex-col items-center w-full
        h-screen">
          <ul className="list-none flex flex-col gap-6 hidden md:flex
          mt-24">
            {sideLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? 'text-white font-bold text-[22px]'
                    : ''
                } hover:text-white grow5 text-[20px] text-decoration-none 
                cursor-pointer text-mainalt list-item`}
                onClick={() => {
                  handleSideItemClick(link);
                }}
              >
                <a 
                  href={link.route} 
                  className='flex gap-6 items-center'
                  >
                  {link.Icon && 
                    <link.Icon 
                      className="icon"
                      width={18} 
                      height={'auto'} 
                    />
                  }
                  {link.title}
                </a>
              </li>
            ))}

            <li className='hover:text-secondary grow4 text-[20px] list-item
            text-decoration-none cursor-pointer text-textalt mt-20'>
              <div 
                onClick={() => dispatch(setLogout())}
                className='flex gap-6 items-center font-medium'
              >
                <HiLogout
                  width={18}
                  style={{ transform: 'scaleX(-1)' }}
                  height={'auto'} 
                />
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
