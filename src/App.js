import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage, ContactPage, HomePage, JournalsPage } from './scenes';
import { EJH, EJM } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/journals' element={<JournalsPage />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='/journals/EJH' element={<EJH />} />
        <Route path='/journals/EJM' element={<EJM />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;