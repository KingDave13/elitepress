import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage, HomePage } from './scenes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;