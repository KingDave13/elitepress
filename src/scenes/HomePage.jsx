import {
    Navbar, Hero, About, Journals, Newsletter, Footer
} from '../components';

import { Helmet } from 'react-helmet';

const HomePage = () => {

    return (
        <div className='font-instrument-sans'>
            <Helmet>
                <title>Elite Press Journals | Innovation and Novelty</title>
                <meta name="description" content="Explore the pinnacle of medical knowledge with Elite Press. Elevate your understanding of medical sciences through our meticulously crafted publications, authored by leading experts in their fields." />
            </Helmet>

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