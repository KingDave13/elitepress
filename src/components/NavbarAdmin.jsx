
import { useState, useEffect, useRef } from 'react';
import { BsX } from 'react-icons/bs';
import styles from '../styles';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
// import { sideLinks } from '../constants';
import { logo, picture, arrow, arrowreverse, logout } from '../assets';
import { Link, useNavigate } from 'react-router-dom';


const NavbarAdmin = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

//   const { data: session } = useSession();

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

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setToggle(false);
          setToggle2(false);
        }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);

const handleSideItemClick = (link) => {
  navigate(link.route)
//   console.log(session);
//   console.log('session');
};

  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed 
    md:py-6 ss:py-6 py-3 top-0 z-20 navsmooth backdrop-blur-md bg-opacity-90
    ${ isScrolled ? 'bg-primaryalt shadow-lg' : '' }`}
    >
      <div className="w-full flex items-center max-w-[82rem] mx-auto">
        <div className='flex w-full justify-between hidden md:flex 
        items-center'>
            <Link to='/admin'
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

          <div className='flex justify-end w-full items-center gap-5
            cursor-pointer'
            onClick={() => setToggle2(!toggle2)}
          >
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

            <img
              src={arrow}
              alt='arrow'
              width={12}
              height={'auto'}
            />
          </div>

            <div
            ref={menuRef}
            className='bg-white absolute rounded-lg z-10 flex-col
            p-6 shadow-xl '
            style={{ height: toggle2 ? 'auto' : 0, opacity: toggle2 ? 1 : 0, 
            visibility: toggle2 ? 'visible' : 'hidden', 
            transition: 'height 0.3s, opacity 0.3s, visibility 0.3s' }}
            >
              <div className="list-none flex justify-end flex-col">
                <div className='flex w-full items-center gap-6
                cursor-pointer'>
                  <img 
                    src={picture}
                    width={35}
                    height={'auto'}
                    alt='profilepic'
                    className='object-contain'
                    
                  />

                  <h1 className='text-main text-[18px] font-medium'>
                    Elite Admin
                  </h1>

                  <img
                    src={arrowreverse}
                    alt='arrow'
                    width={12}
                    height={'auto'}
                  />
                </div>
                
                <div className='hover:text-secondary grow3 text-[17px] 
                list-item cursor-pointer text-textalt mt-6'>
                  <a 
                    href='/'
                    className='flex gap-5 items-center'
                  >
                    <img src={logout} 
                      alt='logout'
                      width={18} 
                      height={'auto'}
                    />
                    Logout
                  </a>
                </div>
              </div>
          </div>
        </div>

        {/* FOR MOBILE */}
        
        <div className="md:hidden flex-1 items-center
          mt-3">
          <div className='flex justify-between w-full pb-4'>
            <div className="flex items-center z-20">
              {toggle ? (
                <BsX
                  size={40}
                  className="object-contain cursor-pointer"
                  style={{ color: '#021e31' }}
                  onClick={() => setToggle(!toggle)}
                />
              ) : (
                <HiOutlineMenuAlt3
                  size={40}
                  className="object-contain cursor-pointer"
                  style={{ color: '#021e31' }}
                  onClick={() => setToggle(!toggle)}
                />
              )}
            </div>

            <div className='flex justify-end items-center gap-4 grow2
            cursor-pointer'
            onClick={() => setToggle2(!toggle2)}>
              <img 
                src={picture}
                width={35}
                height={'auto'}
                alt='profilepic'
                className='object-contain'
              />

              <img
                src={arrow}
                alt='arrow'
                width={13}
                height={'auto'}
              />
            </div>
          </div>

          <div className="flex w-full flex-col ss:mt-5 mt-5 border-b-[1px]
          border-maintext pb-6">
            <h1 className='text-main ss:text-[30px] text-[25px] font-bold'>
              Admin Dashboard
            </h1>
            <p className='text-maintext ss:text-[16px] text-[13px]'>
              Manage new membership requests, view info and communicate 
              with members and more.
            </p>
          </div>

          <div
            ref={menuRef}
            className='ss:p-6 p-4 bg-white absolute ss:top-5 top-5 right-6 
            rounded-lg z-10 flex-col shadow-xl ss:mt-4 mt-3'
            style={{ height: toggle2 ? 'auto' : 0, opacity: toggle2 ? 1 : 0, 
            visibility: toggle2 ? 'visible' : 'hidden', 
            transition: 'height 0.3s, opacity 0.3s, visibility 0.3s' }}
          >
            <div className="list-none flex justify-end ss:gap-5 gap-4 
            flex-col">
              <div className='flex w-full items-center ss:gap-3 gap-3
              cursor-pointer'>
                <img 
                  src={picture}
                  width={35}
                  height={'auto'}
                  alt='profilepic'
                  className='object-contain'
                  
                />

                <h1 className='text-primary ss:text-[20px] text-[16px]
                font-medium'>
                  Elite Admin
                </h1>

                <img
                  src={arrowreverse}
                  alt='arrow'
                  width={12}
                  height={'auto'}
                />
              </div>
              
              <div className='hover:text-secondary grow3 ss:text-[21px] 
              text-[17px] list-item cursor-pointer text-textalt ss:mt-6
              mt-6'>
                <a 
                  href='/'
                  className='flex ss:gap-6 gap-5 items-center'
                >
                  <img src={logout} 
                    alt='logout'
                    width={18} 
                    height={'auto'}
                  />
                  Logout
                </a>
              </div>
            </div>
          </div>
          
          <div
            ref={menuRef}
            className='p-6 bg-white absolute ss:top-20 top-20 rounded-lg 
            z-10 flex-col shadow-xl ss:mt-4 mt-3'
            style={{ height: toggle ? 'auto' : 0, opacity: toggle ? 1 : 0, 
            visibility: toggle ? 'visible' : 'hidden', 
            transition: 'height 0.3s, opacity 0.3s, visibility 0.3s' }}
          >
            <ul className="list-none flex justify-end ss:gap-5 gap-4 
            flex-col">
              {/* {sideLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? 'bg-secondary p-2 rounded-md'
                      : 'bg-none'
                  } hover:text-secondary grow3 ss:text-[21px] text-[17px] 
                  text-decoration-none cursor-pointer text-textalt 
                  list-item`}
                  onClick={() => {
                    handleSideItemClick(link);
                  }}
                >
                  <a 
                    href={link.route} 
                    className='flex ss:gap-6 gap-5 items-center'
                  >
                    {link.Icon && (
                      <span className="icon">
                        <Image src={link.Icon} 
                          alt={link.title} 
                          width={18} 
                          height={'auto'} 
                        />
                      </span>
                    )}
                    {link.title}
                  </a>
                </li>
              ))} */}
              {/* <img
                src={logo}
                alt='logo'
                width={100}
                height={'auto'}
                className='mt-10 mx-auto'
              /> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;