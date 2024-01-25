import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { useFormik } from "formik";
import * as Yup from 'yup';

const Modal = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center
       bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-md shadow-xl flex flex-col
        items-center justify-center md:w-[400px] ss:w-[400px] w-[330px]
        md:h-[150px] ss:h-[150px] h-[100px]">
          <p className="text-center mb-4 font-medium text-primary">
            Thanks for reaching out, we will be in touch.
          </p>
        </div>
      </div>
    );
};

const Contact = () => {

    const formRef = useRef();
    const [Loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const disableScroll = () => {
        setScrollPosition(window.pageYOffset);
        document.body.style.overflow = 'hidden';
        document.body.style.top = `-${scrollPosition}px`;
    };
    
    const enableScroll = () => {
        document.body.style.overflow = 'auto';
        document.body.style.top = '0';
    };

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            subject: '',
            message: '',
        },

        validationSchema: Yup.object({
            firstname: Yup.string().required('First Name is required.'),
            lastname: Yup.string().required('Last Name is required.'),
            email: Yup.string().email('Invalid email address.').required('Email is required.'),
            subject: Yup.string().required('Subject is required.'),
            message: Yup.string().required('Message is required.'),
        }),

        onSubmit: (values) => {
            setLoading(true);

            emailjs.send(
                'service_skvhseu',
                'template_bu4q17u',
                {
                  from_name: values.firstname,
                  to_name: 'Anayo Okpala Global Concept',
                  from_email: values.email,
                  to_email: 'contact@anayookpalaglobalconcept.com',
                  subject: values.subject,
                  message: values.message,
                },
                'u4mJjP_i8Ayoq1SU-'
              )
              .then(
                () => {
                  setLoading(false);
                  setModalOpen(true);
                  disableScroll();
          
                  setTimeout(() => {
                    setModalOpen(false);
                    enableScroll();
                  }, 2000);
          
                  values = formik.initialValues
                },
                
                (error) => {
                  setLoading(false);
                  console.log(error);
                }
            );
        },
    });

  return (
    <section className="md:min-h-[1050px] ss:min-h-[950px] min-h-[910px] 
    flex items-center">
        <div className='items-center w-full flex flex-col'>
            {modalOpen && (
                <Modal />
            )}

            <motion.div variants={textVariant()} className='md:mt-10 ss:mt-14 
            mt-20 w-full'>
                <div className="w-full flex md:flex-row ss:flex-row flex-col
                justify-center items-center md:gap-10 ss:gap-8 gap-6">
                    <p className='text-main font-medium md:text-[20px] ss:text-[20px] 
                    text-[15px] leading-[18px]'>
                        <span className='font-bold'>EMAIL: </span> 
                        <a href='mailto:elitepressjournals@gmail.com' 
                        className='hover:text-secondary'>
                            elitepressjournals@gmail.com
                        </a>
                    </p>

                    <p className='text-main font-medium md:text-[20px] ss:text-[20px] 
                    text-[14px] leading-[17px]'>
                        <span className='font-bold'>PHONE: </span> 
                        <a href='http://wa.me/23480xxxxxxx' 
                        className='hover:text-secondary'>
                            080xxxxxxxxxx
                        </a>
                    </p>
                </div>
            </motion.div>

            <motion.div variants={fadeIn('down', 'spring', 0.3)}
            className='w-full md:mt-14'>
                <div className='md:bg-main2 ss:bg-primary md:p-12
                ss:p-6 md:rounded-xl ss:rounded-xl rounded-xl'>
                <form ref={formRef} onSubmit={formik.handleSubmit}
                className="grid grid-cols-2 md:gap-6 ss:gap-6 gap-4">
                    <div className="flex flex-col">
                        <label className="text-main md:mb-3 ss:mb-2 mb-2 
                        md:text-[18px] ss:text-[15px] text-[14px] font-bold">
                            First Name
                        </label>
                        <input
                        type="text"
                        name="firstname"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your first name"
                        className="md:py-3 ss:py-3 py-2 px-4 border-none 
                        outline-none text-maintext md:rounded-[5px]
                        ss:rounded-[5px] rounded-[5px]
                        md:placeholder:text-[15px] font-medium
                        ss:placeholder:text-[13px] 
                        placeholder:text-[12px] bg-primaryalt"
                        />
                        <p className="text-mainRed md:text-[13px] 
                        ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                        >
                            {formik.touched.firstname && formik.errors.firstname}
                        </p>
                    </div>

                    <div className="flex flex-col">
                        <label className="text-main md:mb-3 ss:mb-2 mb-2 
                        md:text-[18px] ss:text-[15px] text-[14px] font-bold">
                            Last Name
                        </label>
                        <input
                        type="text"
                        name="lastname"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your last name"
                        className="md:py-3 ss:py-3 py-2 px-4 border-none 
                        outline-none text-maintext md:rounded-[5px]
                        ss:rounded-[5px] rounded-[5px]
                        md:placeholder:text-[15px] font-medium
                        ss:placeholder:text-[13px] 
                        placeholder:text-[12px] bg-primaryalt"
                        />
                        <p className="text-mainRed md:text-[13px] 
                        ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                        >
                            {formik.touched.lastname && formik.errors.lastname}
                        </p>
                    </div>

                    <div className="col-span-2 flex flex-col">
                        <label className="text-main md:mb-3 ss:mb-2 mb-2 
                        md:text-[18px] ss:text-[15px] text-[14px] font-bold">
                            Email Address
                        </label>
                        <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your email address"
                        className="md:py-3 ss:py-3 py-2 px-4 border-none 
                        outline-none text-maintext md:rounded-[5px]
                        ss:rounded-[5px] rounded-[5px]
                        md:placeholder:text-[15px] font-medium
                        ss:placeholder:text-[13px] 
                        placeholder:text-[12px] bg-primaryalt"
                        />
                        <p className="text-mainRed md:text-[13px] 
                        ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                        >
                            {formik.touched.email && formik.errors.email}
                        </p>
                    </div>

                    <div className="col-span-2 flex flex-col">
                        <label className="text-main md:mb-3 ss:mb-2 mb-2 
                        md:text-[18px] ss:text-[15px] text-[14px] font-bold">
                            Subject
                        </label>
                        <input
                        type="text"
                        name="subject"
                        value={formik.values.subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter a subject"
                        className="md:py-3 ss:py-3 py-2 px-4 border-none 
                        outline-none text-maintext md:rounded-[5px]
                        ss:rounded-[5px] rounded-[5px]
                        md:placeholder:text-[15px] font-medium
                        ss:placeholder:text-[13px] 
                        placeholder:text-[12px] bg-primaryalt"
                        />
                        <p className="text-mainRed md:text-[13px] 
                        ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                        >
                            {formik.touched.subject && formik.errors.subject}
                        </p>
                    </div>

                    <div className="col-span-2 flex flex-col">
                        <label className="text-main md:mb-3 ss:mb-2 mb-2 
                        md:text-[18px] ss:text-[15px] text-[14px] font-bold">
                            Message
                        </label>
                        <textarea
                        rows="6"
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="How may we assist you?"
                        className="md:py-3 ss:py-3 py-2 px-4 border-none 
                        outline-none text-maintext md:rounded-[5px]
                        ss:rounded-[5px] rounded-[5px]
                        md:placeholder:text-[15px] font-medium
                        ss:placeholder:text-[13px] 
                        placeholder:text-[12px] bg-primaryalt"
                        />
                        <p className="text-mainRed md:text-[13px] 
                        ss:text-[12px] text-[11px] md:mt-2 ss:mt-2 mt-1"
                        >
                            {formik.touched.message ? formik.errors.message : ''}
                        </p>
                    </div>

                    <div className="col-span-2 md:mt-0 ss:mt-0 mt-5">
                        <button
                        type="submit"
                        className="bg-main grow md:text-[16px] 
                        ss:text-[16px] text-[14px] md:py-3 ss:py-3 py-2 
                        md:px-20 ss:px-14 px-6 text-white rounded-lg
                        font-medium border-none"
                        >
                            {Loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
                </div>
            </motion.div>
        </div>
    </section>
  )
};

export default SectionWrapper(Contact, '');