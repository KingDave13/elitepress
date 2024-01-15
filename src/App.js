import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './assets/logo.png';
// import { HomePage, AboutPage, ContactPage, ProductsPage } from './scenes';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        ELITE PRESS
        <img src={logo} />
      </div>
      {/* <Routes >
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/products' element={<ProductsPage />} />
        </Routes> */}
    </BrowserRouter>
  )
};

export default App;