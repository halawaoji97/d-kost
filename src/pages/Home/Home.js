import React from 'react';
import Features from '../../components/Features/Features';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Items from '../../components/Items/Items';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Items />
      <Footer />
    </div>
  );
};

export default Home;
