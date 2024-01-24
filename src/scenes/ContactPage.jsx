import { 
    NavbarAlt,
    Hero4,
    Contact,
    Newsletter,
    Footer } from "../components";
  
  const ContactPage = () => {
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
  
  export default ContactPage;