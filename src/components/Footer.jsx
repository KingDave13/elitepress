import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';
import { BiCopyright } from 'react-icons/bi';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../assets';
import React from 'react';

const Footer = () => {
  return (
    <section className='relative w-full md:min-h-[270px] ss:min-h-[390px] 
    min-h-[450px] flex items-center flex-col'>
      <div className='flex items-center w-full relative'>
        <motion.div variants={textVariant()} className='flex md:flex-row 
        ss:flex-row flex-col relative w-full'>
          <div className='flex md:flex-row flex-col flex-start 
          relative w-full md:gap-6 ss:gap-5 md:items-center'>
            <img src={logo} alt='logo' className='md:h-[120px] md:w-[120px]
            ss:h-[100px] ss:w-[100px] h-[80px] w-[80px]' />

            <p className='text-main md:text-[18px] ss:text-[16px] 
            text-[14px] md:max-w-[550px] ss:max-w-[280px] max-w-[320px] 
            md:mt-0 ss:mt-3 mt-6 md:leading-[25px] ss:leading-[22px] 
            leading-[20px]'>
              At Elite Press, we are committed to disseminating 
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
      flex flex-col w-full bottom-0 md:max-w-[600px] left-0'>
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

        <div className='flex md:mt-2 ss:mt-1 mt-0 items-center'>
          <BiCopyright className='sm:mr-2 mr-1 md:text-[20px] 
          ss:text-[18px] text-[15px] md:mt-1 ss:mt-1 mt-0' />

          <p className='md:text-[16px] ss:text-[16px] text-[14px] 
          text-main md:mt-1 ss:mt-1 mt-0.5'>
            2024. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </section>
  )
};

export default SectionWrapper(Footer, '');