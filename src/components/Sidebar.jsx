import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrow, arrowright, info } from '../assets';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ onClose, name, school, profileLink }) => {
  const modalRef = useRef(null);

  const enableScroll = () => {
    document.body.style.overflow = 'auto';
    document.body.style.top = '0';
  };

  const handleClick = () => {
    onClose();
    enableScroll();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
        enableScroll();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center
      bg-black bg-opacity-80 z-50">
        <motion.div 
        initial={{ y: 0, opacity: 0.7 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.1 }}
        ref={modalRef} 
        className="bg-primaryalt p-8 rounded-md shadow-xl flex flex-col 
        justify-center w-1/3 h-1/4 items-center m-6">
          <div className='flex flex-col w-full gap-4'>
            <h1 className='text-maintext text-[35px] font-bold'>
              {name}
            </h1>

            <div className="flex-1 relative items-center justify-center">
              <div className='bg-textalt w-full h-[1px]' />
            </div>

            <p className='text-maintext text-[18px] leading-[23px]'>
                {school}
            </p>

            <p
              onClick={handleClick}
              className='w-full text-[17px] text-main'
              >
                {profileLink}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Sidebar = ({ sideLinks }) => {
  const navigate = useNavigate();
  const [expandedItem, setExpandedItem] = useState(null);

  const [modalInfo, setModalInfo] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const disableScroll = () => {
    setScrollPosition(window.pageYOffset);
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${scrollPosition}px`;
  };

  const handleSideItemClick = (link) => {
    setExpandedItem(expandedItem === link.id ? null : link.id);
  };

  const handleSubItemClick = (route) => {
    navigate(route);
  };

  const handleModalOpen = (info) => {
    setModalInfo(info);
    setModalOpen(true);
    disableScroll();
  };

  const handleModalClose = () => {
    setModalInfo(null);
    setModalOpen(false);
  };

  return (
    <div className='flex items-center hidden md:flex w-full'>

      {modalOpen && (
        <Modal 
          onClose={handleModalClose}
          name={modalInfo.name}
          school={modalInfo.school}
          profileLink={modalInfo.profileLink}
        />
      )}

      <div className="w-full flex justify-between items-center py-10">
        <div className="flex flex-col items-center w-full">
          <ul className="list-none flex flex-col gap-5 w-[350px]">
            {sideLinks.map((link) => (
              <li
                key={link.id}
                className={`grow4 text-[18px] px-6 py-3 border-textalt 
                border-[0.5px] text-decoration-none cursor-pointer
                text-textalt list-item bg-white`}
                onClick={(e) => handleSideItemClick(link, e)}
              >
                <div className="flex gap-6 items-center justify-between">
                  {link.title}
                  <span>
                    <img
                      src={arrow}
                      alt={link.title}
                      className="h-[5px] w-auto"
                    />
                  </span>
                </div>

                {expandedItem === link.id && (
                  <div className='mt-2'>
                    {link.links && link.links.length > 0 && (
                      <ul>
                        {link.links.map((submenuItem, index) => (
                          <li key={index}>
                            <a href={submenuItem.route} className="block 
                            text-main py-[5px] font-medium"
                            onClick={(e) => {
                              e.preventDefault();
                              if (submenuItem.route && submenuItem.route.startsWith('mailto:')) {
                                window.location.href = submenuItem.route;
                              } else if (submenuItem.route) {
                                handleSubItemClick(submenuItem.route);
                              }
                            }}
                            >
                              <div className='flex items-center gap-3'>
                                {submenuItem.name}

                                {link.special && (
                                  <img src={info} alt='info'
                                    className='h-[14px] w-auto'
                                    onClick={() => {
                                      handleModalOpen(submenuItem);
                                    }}
                                  />               
                                )}
                              </div>
                              
                              <span className="block text-maintext text-[14px]
                              leading-[18px] font-normal"
                              >
                                {submenuItem.school}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}

            <li className='grow4 text-[18px] px-6 py-3 border-textalt 
                border-[0.5px] text-decoration-none cursor-pointer 
                text-white list-item bg-main mt-16'>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                }}
                className='flex gap-6 items-center w-full justify-between'
              >
                Submit Manuscript
                <img src={arrowright} alt='submit'
                  className='h-[11px] w-auto'
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
