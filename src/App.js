import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AboutPage, ContactPage, HomePage, JournalsPage, AdminLogin, AdminHome } from './scenes';
import { EJH, EJM, EJHIV, EJHS, EJI, EJLM, EJMS, EJNHS, EJPH, EJSRR, 
  Vol2Iss1, Vol1Iss1, EjhVol2Iss1, EjmsVol2Iss1, EjhsVol2Iss1, 
  EjmVol2Iss1, EjmVol1, EjmVol2, EjlmVol2Iss1, EjnhsVol2Iss1, EjhivVol2Iss1,
  EjiVol2Iss1, EjsrrVol2Iss1, EjmVol2Iss2, EjhVol2Iss2, EjmVol1Iss1, 
  Vol1, Vol2, EjhVol2, EjhsVol2, EjhsVol2Iss2, EjnhsVol2, EjnhsVol2Iss2,
  Vol2Iss2, EjlmVol2, EjlmVol2Iss2, EjmVol2Iss3, EjmsVol2, EjmsVol2Iss2,
  EjhivVol2, EjhivVol2Iss2, EjnhsVol2Iss3, EjiVol2, EjiVol2Iss2, 
  EjhVol2Iss3, EjsrrVol2, EjsrrVol2Iss2, Vol2Iss3, EjiVol2Iss3, 
  EjlmVol2Iss3, EjhsVol2Iss3, EjhivVol2Iss3, EjmsVol2Iss3, 
  EjnhsVol2Iss4, Vol2Iss4, EjhVol2Iss4, EjhsVol2Iss4, 
  EjiVol2Iss4, EjhivVol2Iss4, EjsrrVol2Iss3, EjmVol2Iss4, 
  EjlmVol2Iss4, EjmsVol2Iss4, EjhsVol1, EjhsVol1Iss1, 
  EjmsVol1, EjmsVol1Iss1, EjnhsVol1, EjnhsVol1Iss1, EjlmVol1, 
  EjlmVol1Iss1, EjhivVol1, EjhivVol1Iss1, EjsrrVol2Iss4,
  EjhVol2Iss5, EjmVol2Iss5, EjhivVol2Iss5, Vol2Iss5, 
  } from './pages';
import  ScrollToTop  from './constants/ScrollToTop';

const App = () => {
  const isAuth = Boolean(useSelector((state) => state.token));

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

          <Route path='/journals/EJPH/Vol2/Vol2Iss1' element={<Vol2Iss1 />} />
          <Route path='/journals/EJPH/Vol2/Vol2Iss2' element={<Vol2Iss2 />} />
          <Route path='/journals/EJPH/Vol2/Vol2Iss3' element={<Vol2Iss3 />} />
          <Route path='/journals/EJPH/Vol2/Vol2Iss4' element={<Vol2Iss4 />} />
          <Route path='/journals/EJPH/Vol2Iss5' element={<Vol2Iss5 />} />
          <Route path='/journals/EJPH/Vol1' element={<Vol1 />} />
          <Route path='/journals/EJPH/Vol2' element={<Vol2 />} />
          <Route path='/journals/EJPH/Vol1/Vol1Iss1' element={<Vol1Iss1 />} />

          <Route path='/journals/EJH/Vol2/Vol2Iss1' element={<EjhVol2Iss1 />} />
          <Route path='/journals/EJH/Vol2/Vol2Iss2' element={<EjhVol2Iss2 />} />
          <Route path='/journals/EJH/Vol2/Vol2Iss3' element={<EjhVol2Iss3 />} />
          <Route path='/journals/EJH/Vol2/Vol2Iss4' element={<EjhVol2Iss4 />} />
          <Route path='/journals/EJH/Vol2Iss5' element={<EjhVol2Iss5 />} />
          <Route path='/journals/EJH/Vol2' element={<EjhVol2 />} />

          <Route path='/journals/EJMS/Vol2Iss4' element={<EjmsVol2Iss4 />} />
          <Route path='/journals/EJMS/Vol2' element={<EjmsVol2 />} />
          <Route path='/journals/EJMS/Vol1' element={<EjmsVol1 />} />
          <Route path='/journals/EJMS/Vol1/Vol1Iss1' element={<EjmsVol1Iss1 />} />
          <Route path='/journals/EJMS/Vol2/Vol2Iss1' element={<EjmsVol2Iss1 />} />
          <Route path='/journals/EJMS/Vol2/Vol2Iss2' element={<EjmsVol2Iss2 />} />
          <Route path='/journals/EJMS/Vol2/Vol2Iss3' element={<EjmsVol2Iss3 />} />

          <Route path='/journals/EJHS/Vol2Iss4' element={<EjhsVol2Iss4 />} />
          <Route path='/journals/EJHS/Vol1/Vol1Iss1' element={<EjhsVol1Iss1 />} />
          <Route path='/journals/EJHS/Vol2/Vol2Iss1' element={<EjhsVol2Iss1 />} />
          <Route path='/journals/EJHS/Vol2/Vol2Iss2' element={<EjhsVol2Iss2 />} />
          <Route path='/journals/EJHS/Vol2/Vol2Iss3' element={<EjhsVol2Iss3 />} />
          <Route path='/journals/EJHS/Vol2' element={<EjhsVol2 />} />
          <Route path='/journals/EJHS/Vol1' element={<EjhsVol1 />} />

          <Route path='/journals/EJM/Vol2/Vol2Iss1' element={<EjmVol2Iss1 />} />
          <Route path='/journals/EJM/Vol1/Vol1Iss1' element={<EjmVol1Iss1 />} />
          <Route path='/journals/EJM/Vol2/Vol2Iss2' element={<EjmVol2Iss2 />} />
          <Route path='/journals/EJM/Vol2/Vol2Iss3' element={<EjmVol2Iss3 />} />
          <Route path='/journals/EJM/Vol2/Vol2Iss4' element={<EjmVol2Iss4 />} />
          <Route path='/journals/EJM/Vol2Iss5' element={<EjmVol2Iss5 />} />
          <Route path='/journals/EJM/Vol1' element={<EjmVol1 />} />
          <Route path='/journals/EJM/Vol2' element={<EjmVol2 />} />

          <Route path='/journals/EJI/Vol2Iss4' element={<EjiVol2Iss4 />} />
          <Route path='/journals/EJI/Vol2' element={<EjiVol2 />} />
          <Route path='/journals/EJI/Vol2/Vol2Iss1' element={<EjiVol2Iss1 />} />
          <Route path='/journals/EJI/Vol2/Vol2Iss2' element={<EjiVol2Iss2 />} />
          <Route path='/journals/EJI/Vol2/Vol2Iss3' element={<EjiVol2Iss3 />} />

          <Route path='/journals/EJLM/Vol2Iss4' element={<EjlmVol2Iss4 />} />
          <Route path='/journals/EJLM/Vol2/Vol2Iss1' element={<EjlmVol2Iss1 />} />
          <Route path='/journals/EJLM/Vol2/Vol2Iss2' element={<EjlmVol2Iss2 />} />
          <Route path='/journals/EJLM/Vol2/Vol2Iss3' element={<EjlmVol2Iss3 />} />
          <Route path='/journals/EJLM/Vol1/Vol1Iss1' element={<EjlmVol1Iss1 />} />
          <Route path='/journals/EJLM/Vol2' element={<EjlmVol2 />} />
          <Route path='/journals/EJLM/Vol1' element={<EjlmVol1 />} />

          <Route path='/journals/EJNHS/Vol2Iss4' element={<EjnhsVol2Iss4 />} />
          <Route path='/journals/EJNHS/Vol2' element={<EjnhsVol2 />} />
          <Route path='/journals/EJNHS/Vol1' element={<EjnhsVol1 />} />
          <Route path='/journals/EJNHS/Vol1/Vol1Iss1' element={<EjnhsVol1Iss1 />} />
          <Route path='/journals/EJNHS/Vol2/Vol2Iss1' element={<EjnhsVol2Iss1 />} />
          <Route path='/journals/EJNHS/Vol2/Vol2Iss2' element={<EjnhsVol2Iss2 />} />
          <Route path='/journals/EJNHS/Vol2/Vol2Iss3' element={<EjnhsVol2Iss3 />} />

          <Route path='/journals/EJHIV/Vol2Iss5' element={<EjhivVol2Iss5 />} />
          <Route path='/journals/EJHIV/Vol2/Vol2Iss1' element={<EjhivVol2Iss1 />} />
          <Route path='/journals/EJHIV/Vol2/Vol2Iss2' element={<EjhivVol2Iss2 />} />
          <Route path='/journals/EJHIV/Vol2/Vol2Iss3' element={<EjhivVol2Iss3 />} />
          <Route path='/journals/EJHIV/Vol2/Vol2Iss4' element={<EjhivVol2Iss4 />} />
          <Route path='/journals/EJHIV/Vol1/Vol1Iss1' element={<EjhivVol1Iss1 />} />
          <Route path='/journals/EJHIV/Vol2' element={<EjhivVol2 />} />
          <Route path='/journals/EJHIV/Vol1' element={<EjhivVol1 />} />

          <Route path='/journals/EJSRR/Vol2Iss4' element={<EjsrrVol2Iss4 />} />
          <Route path='/journals/EJSRR/Vol2' element={<EjsrrVol2 />} />
          <Route path='/journals/EJSRR/Vol2/Vol2Iss1' element={<EjsrrVol2Iss1 />} />
          <Route path='/journals/EJSRR/Vol2/Vol2Iss2' element={<EjsrrVol2Iss2 />} />
          <Route path='/journals/EJSRR/Vol2/Vol2Iss3' element={<EjsrrVol2Iss3 />} />

          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admin/dashboard' 
            element = {isAuth ? <AdminHome /> : <Navigate to='/admin' />} 
            />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
};

export default App;