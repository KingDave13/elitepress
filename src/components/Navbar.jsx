import { useState, useEffect, useRef } from 'react';
import { BsX } from 'react-icons/bs';
import styles from '../styles';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { navLinks } from '../constants';
import { logo } from '../assets';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);


  // Add an event listener to detect scrolling
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
        }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);


  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed 
      md:py-3 ss:py-6 py-5 top-0 z-20 navsmooth 
      ${ isScrolled ? 'bg-white shadow-lg' : '' }`}
    >
      <div className="w-full flex justify-between items-center 
      max-w-[82rem] mx-auto">
        <Link to='/'
                onClick={() => {
                setActive('Home');
                window.scrollTo(0, 0);
                }}>
                <img src={logo} alt='logo'
                className='w-[120px] h-auto'/>
        </Link>

        <div className="flex items-center justify-center w-full hidden 
        md:flex">
          <ul className="list-none flex flex-row gap-16">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? 'text-secondary'
                    : isScrolled ? 'text-primary' : 'text-primary'
                } hover:text-textalt grow3 text-[18px] text-decoration-none 
                cursor-pointer font-medium`}
                onClick={() => {
                    setActive(link.title);
                    if (link.special) {
                      navigate(link.route);
                    }
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <button className='hidden md:flex bg-main grow justify-center
          text-[16px] py-4 w-[22%] text-white rounded-full font-medium'
          onClick={() => navigate('/contact')}
          >
            Our newsletter
        </button>

        {/* FOR MOBILE
        
        <div className="md:hidden flex justify-between flex-1 items-center
        mt-3">
          <Link href="/" 
            onClick={() => { setActive(''); 
            window.scrollTo({ 
              top: 0, left: 0, 
              behavior: 'smooth' }); 
          }}
          >
            <Image
              src={isScrolled ? logo : logoalt}
              alt="logo"
              width={130}
              height="auto"
              className="object-contain"
            />
          </Link>

          <div className="flex items-center z-20">
            {toggle ? (
              <BsX
                size={40}
                className="object-contain cursor-pointer"
                style={{ color: isScrolled ? '#000' : '#fff' }}
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <HiOutlineMenuAlt3
                size={40}
                className="object-contain cursor-pointer"
                style={{ color: isScrolled ? '#000' : '#fff' }}
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
          
          <div
            ref={menuRef}
            className={`p-6 ss:mt-28 mt-24 bg-white absolute top-0 right-0 
            z-10 flex-col w-full shadow-xl
            ${toggle ? 'menu-slide-enter menu-slide-enter-active' 
            : 'menu-slide-exit menu-slide-exit-active'}`}
          >
            <ul className="list-none flex justify-end 
            flex-col">
              {navLinks.map((link, index) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? 'text-secondary'
                      : 'text-primary'
                  } font-medium cursor-pointer ss:text-[20px] text-[16px] 
                  w-full
                  ${index !== navLinks.length - 1 ? 'border-b-[1px] pb-1.5 pt-1.5' : 'pt-1.5'}`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleNavItemClick(link);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
