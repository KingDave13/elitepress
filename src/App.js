import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage, ContactPage, HomePage, JournalsPage } from './scenes';
import { EJH, EJM, EJHIV, EJHS, EJI, EJLM, EJMS, EJNSHS, EJPH, EJSRR } from './pages';
import  ScrollToTop  from './constants/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/journals' element={<JournalsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/journals/EJH' element={<EJH />} />
          <Route path='/journals/EJM' element={<EJM />} />
          <Route path='/journals/EJHS' element={<EJHS />} />
          <Route path='/journals/EJMS' element={<EJMS />} />
          <Route path='/journals/EJPH' element={<EJPH />} />
          <Route path='/journals/EJI' element={<EJI />} />
          <Route path='/journals/EJLM' element={<EJLM />} />
          <Route path='/journals/EJNSHS' element={<EJNSHS />} />
          <Route path='/journals/EJSRR' element={<EJSRR />} />
          <Route path='/journals/EJHIV' element={<EJHIV />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
};

export default App;