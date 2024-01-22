import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { BiCopyright } from 'react-icons/bi';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../assets';
import React from 'react';

const Footer = () => {
  return (
    <section className='relative w-full md:min-h-[330px] ss:min-h-[420px] 
    min-h-[500px] mx-auto flex items-center flex-col md:mb-0 ss:mb-0 mb-6'>
      <div className='flex max-w-[95rem] mx-auto items-center w-full 
      relative'>
        <motion.div variants={textVariant()} className='flex md:flex-row 
        ss:flex-row flex-col relative w-full'>
          <div className='flex md:flex-row flex-col flex-start 
          relative w-full md:gap-6 ss:gap-5 md:items-center'>
            <img src={logo} alt='logo' className='md:h-[120px] md:w-[120px]
            ss:h-[100px] ss:w-[100px] h-[100px] w-[100px]' />

            <p className='text-main md:text-[18px] ss:text-[16px] 
            text-[14px] md:max-w-[550px] ss:max-w-[280px] max-w-[320px] 
            md:mt-0 ss:mt-3 mt-6 md:leading-[25px] ss:leading-[22px] 
            leading-[20px]'>
              At Elite Press Journals, we are committed to disseminating 
              cutting-edge research through our comprehensive range of 
              medical journals. Each publication is carefully curated to 
              contribute to the progress of various disciplines within the 
              medical field.
            </p>
          </div>
          
          <div className='w-full flex flex-row md:justify-end 
          ss:justify-end'>
            {footerLinks.map((footerLink, index) => (
              <div key={index} className='flex flex-col my-4 md:min-w-[150px]
              md:max-w-[200px] w-full'>
                <h4 className={`font-bold md:text-[21px] ss:text-[18px] 
                text-[15px] text-main 
                  ${index !== footerLinks.length - 1 ? 'md:mr-10 ss:mr-8 mr-8' : 'mr-12'}`}>
                  {footerLink.title}
                </h4>

                <ul className='list-none md:mt-4 ss:mt-3 mt-1 mr-5'>
                  {footerLink.links.map((Link, index) => (
                    <a target='blank' href={Link.route} key={Link.name}>
                      <li className={`md:text-[17px] ss:text-[16px] grow2
                      text-[14px] md:leading-[17px] ss:leading-[17px] leading-[14px]
                      text-main hover:text-secondary cursor-pointer 
                      ${index !== footerLink.links.length - 1 ? 'md:mb-4 ss:mb-2 mb-2' : 'mb-0'}`}>
                        {Link.name}
                      </li>
                    </a>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div variants={textVariant()} className='md:absolute ss:absolute 
      flex flex-col w-full md:bottom-2 ss:bottom-10 md:max-w-[600px] left-0'>
        <div className='flex md:mt-3 ss:mt-3 mt-2 items-center'>
          {socialMedia.map((social, index) => (
            <a target='_blank' href={social.link} rel="noreferrer" key={index}>
              {React.createElement(social.Icon, {
                className: `md:w-[27px] ss:w-[24px] w-[20px] md:h-[22px] 
                ss:h-[20px] h-[30px] object-contain cursor-pointer grow2
                ${index !== socialMedia.length - 1 ? 'mr-3' : 'mr-0' }`,
              })}
            </a>
            
          ))}

          <p className='text-main md:ml-2 ss:ml-2 ml-2 md:text-[17px]
          ss:text-[17px] text-[14px]'>
            elitepressjournals@gmail.com
          </p>
        </div>

        <div className='flex md:mt-2 ss:mt-1 mt-0 md:mb-12 ss:mb-3 mb-3
        items-center'>
          <BiCopyright className='sm:mr-2 mr-1 md:text-[20px] 
          ss:text-[18px] text-[15px] md:mt-1 ss:mt-1 mt-[3px]' />

          <p className='md:text-[16px] ss:text-[16px] text-[14px] 
          text-main mt-1'>
            2024. All Rights Reserved.
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeIn('down', 'spring', 0.3)}
      className='absolute bottom-0 w-full 
      border-t-[1px] md:pt-3 ss:pt-2 pt-1 border-t-textalt'>
        <p className='md:text-[15px] ss:text-[14px] text-[12px] text-center'>
          Designed and developed by
            <span className='text-[#00563B] font-medium cursor-pointer grow3'>
              <a href='https://wa.me/2349014452743' target='blank'> 09014452743
              </a>
            </span>
        </p>
      </motion.div>
    </section>
  )
};

export default SectionWrapper(Footer, '');
