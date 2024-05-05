import { SectionWrapper } from "../hoc";
import { useNavigate } from 'react-router-dom';

const EJNHSVol2Issues = () => {
    const navigate = useNavigate();

  return (
    <section className="min-h-[auto] flex items-center">
        <div className='items-center w-full flex'>
            <div className='grid md:grid-cols-2 ss:grid-cols-2 grid-cols-3 
            md:gap-10 ss:gap-8 gap-6 w-full'>
                <div className='w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-primaryalt md:py-5 ss:py-5 flex items-center
                    justify-center py-3'
                    onClick={() => {
                        navigate('/journals/EJNHS/Vol2/Vol2Iss1');
                    }}
                >
                    <p className="md:text-[20px] ss:text-[14px] font-medium">
                        Issue 1
                    </p>
                </div>

                <div className='w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-primaryalt md:py-5 ss:py-5 flex items-center
                    justify-center py-3'
                    onClick={() => {
                        navigate('/journals/EJNHS/Vol2/Vol2Iss2');
                    }}
                >
                    <p className="md:text-[20px] ss:text-[14px] font-medium">
                        Issue 2
                    </p>
                </div>

                <div className='w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-primaryalt md:py-5 ss:py-5 flex items-center
                    justify-center py-3'
                    onClick={() => {
                        navigate('/journals/EJNHS/Vol2/Vol2Iss3');
                    }}
                >
                    <p className="md:text-[20px] ss:text-[14px] font-medium">
                        Issue 3
                    </p>
                </div>

                <div className='w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-primaryalt md:py-5 ss:py-5 flex items-center
                    justify-center py-3'
                    onClick={() => {
                        navigate('/journals/EJNHS/Vol2/Vol2Iss4');
                    }}
                >
                    <p className="md:text-[20px] ss:text-[14px] font-medium">
                        Issue 4
                    </p>
                </div>

                <div className='w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3'
                    // onClick={() => {
                    //     navigate('/journals/EJM/Vol2Iss1');
                    // }}
                >
                    <p className="md:text-[20px] ss:text-[14px] font-medium">
                        Issue 5
                    </p>
                </div>

                <div className='w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3'
                    // onClick={() => {
                    //     navigate('/journals/EJM/Vol2Iss1');
                    // }}
                >
                    <p className="md:text-[20px] ss:text-[14px] font-medium">
                        Issue 6
                    </p>
                </div>

                <div className='w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3'
                    // onClick={() => {
                    //     navigate('/journals/EJM/Vol2Iss1');
                    // }}
                >
                    <p className="md:text-[20px] ss:text-[14px] font-medium">
                        Issue 7
                    </p>
                </div>

                <div className='w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3'
                    // onClick={() => {
                    //     navigate('/journals/EJM/Vol2Iss1');
                    // }}
                >
                    <p className="md:text-[20px] ss:text-[14px] font-medium">
                        Issue 8
                    </p>
                </div>

                <div className='w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3'
                    // onClick={() => {
                    //     navigate('/journals/EJM/Vol2Iss1');
                    // }}
                >
                    <p className="md:text-[20px] ss:text-[14px] font-medium">
                        Issue 9
                    </p>
                </div>

                <div className='w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3'
                    // onClick={() => {
                    //     navigate('/journals/EJM/Vol2Iss1');
                    // }}
                >
                    <p className="md:text-[20px] ss:text-[14px] font-medium">
                        Issue 10
                    </p>
                </div>

                <div className='w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3'
                    // onClick={() => {
                    //     navigate('/journals/EJM/Vol2Iss1');
                    // }}
                >
                    <p className="md:text-[20px] ss:text-[14px] font-medium">
                        Issue 11
                    </p>
                </div>

                <div className='w-full cursor-pointer shadow-md hover:shadow-lg 
                    rounded-lg bg-main2 md:py-5 ss:py-5 flex items-center
                    justify-center py-3'
                    // onClick={() => {
                    //     navigate('/journals/EJM/Vol2Iss1');
                    // }}
                >
                    <p className="md:text-[20px] ss:text-[14px] font-medium">
                        Issue 12
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default SectionWrapper(EJNHSVol2Issues, '');