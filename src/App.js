import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import DetailPage from './pages/DetailPage/DetailPage';
import Checkout from './pages/Checkout/Checkout';
import CheckoutExample from './pages/Checkout';

const App = () => {
  return (
    <Router>
      <div className='home'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkoutExample' element={<CheckoutExample />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
