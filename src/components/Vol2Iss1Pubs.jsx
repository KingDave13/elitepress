import { SectionWrapper } from "../hoc";
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';

const Vol2Iss1Pubs = () => {

    return (
        <section className="w-full md:min-h-[550px] ss:min-h-[300px] 
        min-h-[500px] flex flex-col"
        >
            <div className="w-full">
                <h1 className="text-center md:text-[36px] ss:text-[30px] 
                text-[32px] font-bold text-textalt">
                    Publications
                </h1>
            </div>
        </section>
    );
};

export default SectionWrapper(Vol2Iss1Pubs, '');