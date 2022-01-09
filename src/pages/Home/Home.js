import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Features from '../../components/Features/Features';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Items from '../../components/Items/Items';
import Navbar from '../../components/Navbar/Navbar';
import landingPage from '../../json/landingPage.json';
import { getAllData } from '../../store/actions/page';

const Home = () => {
  const refMostItemsPopular = useRef();
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  useEffect(() => {
    document.title = 'Home';
    window.scrollTo(0, 0);
    dispatch(getAllData());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Hero refMostItemsPopular={refMostItemsPopular} />
      <Features data={landingPage.features} />
      <Items
        refMostItemsPopular={refMostItemsPopular}
        currentId={currentId}
        setCurrentId={setCurrentId}
        data={page.mostPopular}
      />
      <Footer />
    </div>
  );
};

export default Home;
