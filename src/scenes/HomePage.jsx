import {
    Navbar, Hero, About, Journals, Newsletter, Footer
} from '../components';

import { useEffect } from 'react';

const HomePage = () => {

    useEffect(() => {
        document.title = 'Elite Press Journals | Innovation and Novelty';
    }, []); 

    return (
        <div className='font-instrument-sans'>
            <Navbar />

            <div className='hero'>
                <Hero />
            </div>

            <div className='bg-primaryalt'>
                <About />
            </div>

            <div className='journal'>
                <Journals />
            </div>

            <div className='bg-primaryalt'>
                <Newsletter />
            </div>

            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
};

export default HomePage;