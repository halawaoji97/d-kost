import React, { useEffect } from 'react';
import FeaturedImage from '../../components/Detail/FeaturedImage';
import PageDetailDescription from '../../components/Detail/PageDetailDescription';
import PageDetailTitle from '../../components/Detail/PageDetailTitle';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import detailPage from '../../json/detailPage.json';

const DetailPage = () => {
  useEffect(() => {
    document.title = 'Detail';
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='detail-page'>
      <Navbar />
      <PageDetailTitle data={detailPage} />
      <FeaturedImage data={detailPage.imageUrls} />
      <PageDetailDescription data={detailPage} />
      <Footer />
    </section>
  );
};

export default DetailPage;
