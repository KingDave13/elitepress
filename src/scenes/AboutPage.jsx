import { 
  NavbarAlt,
  Hero2,
  AboutMain,
  Commitment,
  Newsletter,
  Footer } from "../components";

const AboutPage = () => {
  return (
    <div className="font-instrument-sans">
      <div>
        <NavbarAlt />

        <div className='journal'>
          <AboutMain />
        </div>

        <Commitment />

        <div className='bg-primaryalt'>
          <Newsletter />
        </div>

        <div className='footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;