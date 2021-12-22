import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import DetailPage from './pages/DetailPage/DetailPage';
import BookingPage from './pages/Booking/BookingPage';

const App = () => {
  return (
    <Router>
      <div className='home'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='/booking' element={<BookingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
