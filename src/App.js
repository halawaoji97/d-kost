import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import DetailPage from './pages/DetailPage/DetailPage';
import Checkout from './pages/Checkout/Checkout';
import Auth from './components/Auth/Auth';

const App = () => {
  return (
    <Router>
      <div className='home'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
