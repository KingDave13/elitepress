import { useState, useEffect, useRef } from 'react';
import styles from '../styles';
import { logo, picture, arrow, arrowreverse } from '../assets';
import { HiLogout } from "react-icons/hi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogout } from '../state';
import { sideLinks } from '../constants';


const NavbarAdmin = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const [active, setActive] = useState('Journals');

  const dispatch = useDispatch();
	const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSideItemClick = (link) => {
    setActive(link.title);
    navigate(link.route);
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed 
    md:py-6 ss:py-6 py-3 top-0 z-40 navsmooth backdrop-blur-md bg-opacity-90
    md:border-b-[1px] border-textalt bg-primaryalt
    ${ isScrolled ? 'bg-primaryalt md:shadow-none shadow-lg' : '' }`}
    >
      <div className="w-full flex items-center max-w-[82rem] mx-auto">
        <div className='flex w-full justify-between hidden md:flex 
        items-center'>
            <Link to='/admin/dashboard'
            onClick={() => {
            window.scrollTo(0, 0);
            }}
            className='md:mr-10'>
            <img src={logo} alt='logo'
            className='md:w-[120px] ss:w-[80px] w-[45px] h-auto'/>
            </Link>

          <div className="flex w-full flex-col">
            <h1 className='text-main font-bold text-[30px]'>
              Admin Dashboard
            </h1>

            <p className='text-maintext text-[17px]'>
              Manage papers and articles for each journal, 
              submisson requests and more.
            </p>
          </div>

          <div className='flex justify-end w-full items-center gap-5'>
            <img 
              src={picture}
              width={45}
              height={'auto'}
              alt='profilepic'
              className='object-contain'
            />

            <h1 className='text-main font-medium text-[18px]'>
              Elite Admin
            </h1>
          </div>
        </div>

        {/* FOR MOBILE */}
        
        <div className="md:hidden flex-1 items-center
          mt-3">
          <div className='flex justify-between w-full'>
            <div className="flex w-full flex-col">
              <h1 className='text-main font-bold ss:text-[25px] text-[20px]'>
                Admin Dashboard
              </h1>

              <p className='text-maintext ss:text-[16px] text-[13px]
              ss:leading-[20px] leading-[18px]'>
                Manage papers and articles for each journal, 
                submisson requests and more.
              </p>
            </div>

            <div className='flex justify-end items-center ss:gap-4 gap-2'
            onClick={() => setToggle(!toggle)}>
              <img 
                src={picture}
                width={32}
                height={'auto'}
                alt='profilepic'
                className='object-contain'
              />

              <MdKeyboardArrowDown
              className='text-main ss:text-[32px] text-[34px]'
              />
            </div>
          </div>

          <div
            ref={menuRef}
            className='ss:p-8 p-6 bg-main absolute ss:top-8 top-6 rounded-lg 
            z-10 flex-col shadow-xl ss:mt-4 mt-1 ss:right-16 right-6'
            style={{ height: toggle ? 'auto' : 0, opacity: toggle ? 1 : 0, 
            visibility: toggle ? 'visible' : 'hidden', 
            transition: 'height 0.3s, opacity 0.3s, visibility 0.3s' }}
          >
            <div className='flex w-full items-center ss:gap-3 gap-5'
              onClick={() => setToggle(!toggle)}>
                <img 
                  src={picture}
                  width={32}
                  height={'auto'}
                  alt='profilepic'
                  className='object-contain'
                  
                />

                <h1 className='text-white ss:text-[20px] text-[16px]
                font-medium'>
                  Elite Admin
                </h1>

                <MdKeyboardArrowUp
                className='text-white ss:text-[30px] text-[25px]'
              />
            </div>

            <div className="items-center justify-center ss:mt-6 mt-4">
              <div className='bg-textalt w-full h-[0.5px]
              rounded-full' />
            </div>

            <ul className="list-none flex justify-end ss:gap-5 gap-3 
            flex-col ss:mt-10 mt-6">
              {sideLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? 'text-white font-bold ss:text-[22px] text-[19px]'
                      : ''
                  } ss:text-[20px] text-[17px] 
                  text-decoration-none text-mainalt`}
                  onClick={() => {
                    handleSideItemClick(link);
                  }}
                >
                  <a 
                    href={link.route} 
                    className='flex ss:gap-6 gap-5 items-center'
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

              <div className='text-secondary grow3 ss:text-[21px] 
              text-[16px] list-item cursor-pointer ss:mt-4
              mt-3'>
                <div onClick={() => dispatch(setLogout())}
                  className='flex ss:gap-6 gap-5 items-center'
                >
                  <HiLogout
                  width={18}
                  style={{ transform: 'scaleX(-1)' }}
                  height={'auto'} 
                />
                Logout
                </div>
              </div>
            </ul>
          </div>
          
          
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;