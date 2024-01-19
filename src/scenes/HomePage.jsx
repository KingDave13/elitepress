import {
    Navbar, Hero, About, Journals, Newsletter, Footer
} from '../components';

const HomePage = () => {
    return (
        <div className='font-instrument-sans'>
            <div className=''>
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
        </div>
    )
};

export default HomePage;