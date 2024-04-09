import styles from '../styles';
import { logo } from '../assets';
import { Link } from 'react-router-dom';


const NavbarAdminLogin = () => {
 
  return (
    <nav className={`${styles.paddingX} w-full flex items-center fixed 
    md:py-6 ss:py-6 py-5 top-0 z-20 bg-primaryalt`}
    >
        <div className="w-full flex items-center max-w-[82rem] mx-auto">
            <div className='flex w-full justify-between items-center'>
                <Link to='/admin'
                onClick={() => {
                window.scrollTo(0, 0);
                }}
                className='md:mr-10 ss:mr-8 mr-6'>
                <img src={logo} alt='logo'
                className='md:w-[75px] ss:w-[75px] w-[70px] h-auto'/>
                </Link>

                <div className="flex w-full flex-col">
                    <h1 className='text-main font-bold md:text-[30px]
                    ss:text-[28px] text-[21px] md:leading-[40px] 
                    ss:leading-[40px] leading-[30px]'>
                    Admin Dashboard
                    </h1>

                    <p className='text-maintext md:text-[17px]
                    ss:text-[16px] text-[13px] md:leading-[25px] 
                    ss:leading-[25px] leading-[15px]'>
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