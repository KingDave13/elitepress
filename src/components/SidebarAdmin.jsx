import { useState } from 'react';
import styles from '../styles';
import { sideLinks } from '../constants';
import { logo, logout } from '../assets';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogout } from '../state';

const SidebarAdmin = () => {
  const [active, setActive] = useState('requests');

    const dispatch = useDispatch();
	const navigate = useNavigate();

  const handleSideItemClick = (link) => {
    setActive(link.title);
    navigate(link.route);
  };

  return (
    <div className={`${styles.paddingX} md:w-1/5 flex items-center
    md:border-r-[1px] border-textalt hidden md:flex z-20`}
    >
      <div className="w-full flex justify-between items-center mx-auto
      py-10">
        <div className="flex flex-col items-center w-full
        h-screen">
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
                      <img src={link.Icon} 
                        alt={link.title} 
                        width={18} 
                        height={'auto'} 
                      />
                    </span>
                  )}
                  {link.title}
                </a>
              </li>
            ))}

            <li className='hover:text-secondary grow3 text-[20px] list-item
            text-decoration-none cursor-pointer text-textalt mt-20'>
              <div 
                onClick={() => dispatch(setLogout())}
                className='flex gap-6 items-center icon'
              >
                <img src={logout} 
                  alt='logout'
                  width={18} 
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
