import { 
    NavbarAlt,
    Hero3,
    JournalsMain,
    Newsletter,
    Footer } from "../components";
  
  const JournalsPage = () => {
    return (
      <div className="font-instrument-sans">
        <div>
          <NavbarAlt />
  
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
  
  export default JournalsPage;