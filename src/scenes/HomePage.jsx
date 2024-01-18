import {
    Navbar, Hero
} from '../components';

const HomePage = () => {
    return (
        <div className='font-instrument-sans'>
            <div className='relative overflow-hidden'>
                <Navbar />

                <div className='hero'>
                    <Hero />
                </div>
                
            </div>
        </div>
    )
};

export default HomePage;