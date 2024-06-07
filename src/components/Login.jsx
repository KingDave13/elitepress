import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin } from '../state';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { SectionWrapper } from "../hoc";

const Modal = ({ onClose }) => {
  const modalRef = useRef(null);

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.top = '0';
  };

  const handleClick = () => {
      onClose();
      enableScroll();
  };

  return (
      <div className="fixed inset-0 flex items-center justify-center
      bg-black bg-opacity-80 z-50">
        <div ref={modalRef} 
        className="bg-primaryalt md:px-10 ss:px-10 px-6 md:py-5 ss:py-5 py-5
        rounded-md shadow-xl flex flex-col justify-center w-auto h-auto 
        items-center">
          <div className='flex flex-col w-full justify-center 
          items-center'>
            <h1 className='text-mainRed font-medium md:text-[16px] ss:text-[20px]
            text-[15px] text-center md:mb-4 ss:mb-4 mb-3'>
              Incorrect email or password.
            </h1>

            <button
            onClick={handleClick}
            className='grow4 bg-main border-none
            md:text-[13px] ss:text-[14px] text-[13px] md:py-2
            ss:py-3 py-2 md:px-7 ss:px-7 px-5 text-white 
            md:rounded-[3px] ss:rounded-[3px] rounded-[3px] 
            cursor-pointer'
            >
              OK
            </button>
          </div>
        </div>
      </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const disableScroll = () => {
    setScrollPosition(window.pageYOffset);
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${scrollPosition}px`;
  };

  const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },

      validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address.').required('Email is required.'),
        password: Yup.string().required('Password is required.'),
      }),

      onSubmit: async (values) => {
        try {
          const loggedInResponse = await fetch(
            "http://localhost:3001/auth/login",
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json'},
              body: JSON.stringify(values),
            }
          );
          const loggedIn = await loggedInResponse.json();

          if (loggedIn.token) {
            dispatch(
              setLogin({
                user: loggedIn.user,
                token: loggedIn.token
              })
            );
            navigate('/admin/dashboard');
          } else {
            setModalOpen(true);
            disableScroll();
          }
        } catch (error) {
          console.error('Login error:', error);
        }
      },
  });

  return (
    <section className="flex w-full items-center justify-center 
    md:h-[80vh] ss:h-[100vh] h-[110vh]">
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)} />
      )}

      <motion.div variants={slideIn('down', 'tween', 0.2, 1)}
        className='md:w-1/2 ss:w-3/4 w-full font-medium flex 
        items-center justify-center flex-col bg-main2 rounded-lg 
        md:p-10 ss:p-10 p-6 shadow-xl md:mb-0 ss:mb-60 mb-60'
      >
        <p className='text-main md:text-[22px] ss:text-[20px] 
        text-[16px] border-b-[1px] border-textalt w-full text-center
        md:pb-4 ss:pb-4 pb-3 font-bold'>
          Please enter your login details
        </p>

        <form onSubmit={formik.handleSubmit} 
        className='flex flex-col w-full md:mt-8 ss:mt-5 mt-5 md:gap-4
        ss:gap-4 gap-3'>
          <div className="flex flex-col">
            <label className="text-main font-bold md:mb-3 ss:mb-2 mb-2 
            md:text-[18px] ss:text-[15px] text-[14px]">
              Email
            </label>
            <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}

            onBlur={formik.handleBlur}
            placeholder="Enter your email"
            className="md:py-3 ss:py-2 py-2 px-4 border-none 
            outline-none text-maintext md:rounded-[5px] 
            ss:rounded-[3px] rounded-[3px] placeholder:text-textalt 
            focus:outline-none md:placeholder:text-[15px] 
            ss:placeholder:text-[12px] placeholder:text-[12px] 
            bg-primaryalt"
            />
            <p className="text-mainRed md:text-[14px] 
            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
            >
              {formik.touched.email && formik.errors.email}
            </p>
          </div>

          <div className="flex flex-col">
            <label className="text-main font-bold md:mb-3 ss:mb-2 mb-2 
            md:text-[18px] ss:text-[15px] text-[14px]">
              Password
            </label>
            <div className="relative">
              <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your password"
              className="md:py-3 ss:py-2 py-2 px-4 border-none 
              outline-none text-maintext md:rounded-[5px] 
              ss:rounded-[3px] rounded-[3px] placeholder:text-textalt 
              focus:outline-none md:placeholder:text-[15px] 
              ss:placeholder:text-[12px] placeholder:text-[12px] 
              bg-primaryalt w-full"
              />
              <div className="absolute right-0 inset-y-0 flex pr-4
              items-center">
                {showPassword ? (
                    <FaEyeSlash
                      className="text-gray-400 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                ) : (
                    <FaEye
                      className="text-gray-400 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    />
                )}
              </div>
            </div>
            <p className="text-mainRed md:text-[14px] 
            ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
            >
              {formik.touched.password && formik.errors.password}
            </p>
          </div>

          <div className="md:mt-2 ss:mt-2 mt-3 w-full flex items-center 
          justify-center md:gap-10 ss:gap-8 gap-6">
            <button
            type='submit'
            className="bg-main grow2  md:text-[16px] font-medium
            ss:text-[14px] text-[13px] md:py-3 ss:py-3 py-2 md:px-20 
            ss:px-14 px-12 text-white md:rounded-[5px] ss:rounded-[3px] 
            rounded-[3px] border-none cursor-pointer"
            > 
              Login
            </button>

            <a 
              href="/admin"
              className='text-mainRed md:text-[16px] ss:text-[15px]
              text-[13px] grow2 font-medium'
            >
              Forgot password?
            </a>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Login, '');