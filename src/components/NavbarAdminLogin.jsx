import { useState, useEffect } from 'react';
import styles from '../styles';
import { logo } from '../assets';
import { Link } from 'react-router-dom';


const NavbarAdminLogin = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


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
            </div>
        </div>
    </nav>
  );
};

export default NavbarAdminLogin;