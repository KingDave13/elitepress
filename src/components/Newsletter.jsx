import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant, fadeIn } from '../utils/motion';

const Newsletter = () => {
  return (
    <section className='relative w-full md:min-h-[320px] ss:min-h-[280px] 
    min-h-[230px] mx-auto flex items-center justify-center flex-col'>
      <div className='flex max-w-[95rem] mx-auto items-center w-full 
      relative items-center justify-center flex-col'>
        <motion.div variants={textVariant()} className='flex flex-col 
        relative w-full items-center'>
            <h1 className='text-main font-bold md:text-[45px]
                ss:text-[35px] text-[24px]'>
                Subscribe to Our Newsletter
            </h1>

            <div className='flex relative'>
            <div className='bg-secondary md:w-[120px] ss:w-[120px]
                w-[80px] h-[3px]' />
            </div>

            <p className='font-medium md:text-[20px] ss:text-[18px] 
            text-[14px] text-main md:mt-5 ss:mt-5 mt-3'>
                to stay up to date with the latest from us.
            </p>
        </motion.div>

        <motion.div variants={fadeIn('up', 'spring', 0.3)} 
        className='flex flex-col w-full items-center md:mt-10 ss:mt-5 
        mt-5'>
            <input
              type="email"
              name="email"
            //   value={form.email}
            //   onChange={handleChange}
              placeholder="Enter your email"
              className="md:py-3 ss:py-2 py-1 md:px-4 ss:px-4 px-2 
              border-b-[2px] outline-none placeholder:text-black-200 
              text-main rounded-lg md:placeholder:text-[16px] 
              ss:placeholder:text-[14px] placeholder:text-[12px] 
              md:w-[560px] ss:w-[450px] w-[300px] text-center
              md:text-[18px] ss:text-[18px] text-[14px] bg-transparent
              border-b-textalt"
            />

            <button className='bg-main grow md:text-[16px] md:mt-8 ss:mt-5 
            mt-5 ss:text-[16px] text-[14px] md:py-3 ss:py-3 py-2 md:px-14 
            ss:px-14 px-6 text-white rounded-full font-medium border-none'
            // onClick={() => navigate('/about')}
            >
                Subscribe
            </button>
        </motion.div>
      </div>
    </section>
  )
};

export default SectionWrapper(Newsletter, '');
