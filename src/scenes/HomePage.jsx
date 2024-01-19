import {
    Navbar, Hero, About, Journals
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
            </div>
        </div>
    )
};

export default HomePage;