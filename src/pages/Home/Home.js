import React, { useEffect, useRef } from 'react';
import Features from '../../components/Features/Features';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Items from '../../components/Items/Items';
import Navbar from '../../components/Navbar/Navbar';
import landingPage from '../../json/landingPage.json';

const Home = () => {
  const refMostItemsPopular = useRef();

  useEffect(() => {
    document.title = 'Home';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero refMostItemsPopular={refMostItemsPopular} />
      <Features data={landingPage.features} />
      <Items
        refMostItemsPopular={refMostItemsPopular}
        data={landingPage.mostPopular}
      />
      <Footer />
    </div>
  );
};

export default Home;
