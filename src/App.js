import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage, ContactPage, HomePage, JournalsPage } from './scenes';
import { EJH, EJM, EJHIV, EJHS, EJI, EJLM, EJMS, EJNHS, EJPH, EJSRR, 
  Vol2Iss1, Vol1Iss1, EjhVol2Iss1, EjmsVol2Iss1, EjhsVol2Iss1, 
  EjmVol2Iss1, EjmVol1Iss1, EjlmVol2Iss1, EjnhsVol2Iss1, EjhivVol2Iss1 } from './pages';
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
          <Route path='/journals/EJNHS' element={<EJNHS />} />
          <Route path='/journals/EJSRR' element={<EJSRR />} />
          <Route path='/journals/EJHIV' element={<EJHIV />} />
          <Route path='/journals/EJPH/Vol2Iss1' element={<Vol2Iss1 />} />
          <Route path='/journals/EJPH/Vol1' element={<Vol1Iss1 />} />
          <Route path='/journals/EJH/Vol2Iss1' element={<EjhVol2Iss1 />} />
          <Route path='/journals/EJMS/Vol2Iss1' element={<EjmsVol2Iss1 />} />
          <Route path='/journals/EJHS/Vol2Iss1' element={<EjhsVol2Iss1 />} />
          <Route path='/journals/EJM/Vol2Iss1' element={<EjmVol2Iss1 />} />
          <Route path='/journals/EJM/Vol1' element={<EjmVol1Iss1 />} />
          <Route path='/journals/EJLM/Vol2Iss1' element={<EjlmVol2Iss1 />} />
          <Route path='/journals/EJNHS/Vol2Iss1' element={<EjnhsVol2Iss1 />} />
          <Route path='/journals/EJHIV/Vol2Iss1' element={<EjhivVol2Iss1 />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
};

export default App;