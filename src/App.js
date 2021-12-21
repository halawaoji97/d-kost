import React from 'react';
import Home from './pages/Home/Home';
import DetailPage from './pages/DetailPage/DetailPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='home'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
