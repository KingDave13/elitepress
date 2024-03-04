import { SectionWrapper } from "../hoc";
import { useNavigate } from 'react-router-dom';

const EJMVol2Issues = () => {
    const navigate = useNavigate();

  return (
    <section className="md:min-h-[auto] ss:min-h-[3000px] min-h-[5750px] 
    flex items-center">
        <div className='items-center w-full flex flex-col'>
            <div className='grid grid-cols-2 md:gap-12 ss:gap-6 gap-10'>
                <div className='w-full cursor-pointer shadow-lg hover:shadow-xl 
                rounded-lg bg-primaryalt'
                >
                    <button className='grow md:text-[12px] 
                    ss:text-[14px] md:py-1.5 ss:py-1.5 
                    md:px-6 ss:px-6 text-main rounded-full
                    font-medium border-textalt border-[1px] 
                    hover:text-white'
                    onClick={() => {
                          navigate('/journals/EJM/Vol2Iss1');
                        }
                      }
                    >
                        Issue 1
                    </button>

                    <button className='grow md:text-[12px] 
                    ss:text-[14px] md:py-1.5 ss:py-1.5 
                    md:px-6 ss:px-6 text-main rounded-full
                    font-medium border-textalt border-[1px] 
                    hover:text-white'
                    >
                        Issue 2
                    </button>
                    <button className='grow md:text-[12px] 
                    ss:text-[14px] md:py-1.5 ss:py-1.5 
                    md:px-6 ss:px-6 text-main rounded-full
                    font-medium border-textalt border-[1px] 
                    hover:text-white'
                    >
                        Issue 3
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default SectionWrapper(EJMVol2Issues, '');