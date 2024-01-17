import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './scenes';
import { Navbar } from './components';

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes >
    //     <Route path='/' element={<HomePage />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <Navbar />
    </div>
  )
};

export default App;