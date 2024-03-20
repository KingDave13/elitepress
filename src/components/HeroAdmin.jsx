import { SectionWrapper } from "../hoc";


const HeroAdmin = () => {

  return (
    <section className='w-full'>
        <div className="flex w-full flex-col ss:mt-5 mt-5 border-b-[1px]
        border-maintext pb-6">
            <h1 className='text-main ss:text-[30px] text-[25px] font-bold'>
                Admin Dashboard
            </h1>
            <p className='text-maintext ss:text-[16px] text-[13px]'>
                Manage new membership requests, view info and communicate 
                with members and more.
            </p>
        </div>       
    </section>
  );
};

export default SectionWrapper(HeroAdmin, '');