import React from 'react';
import FeaturedImage from '../../components/Detail/FeaturedImage';
import PageDetailDescription from '../../components/Detail/PageDetailDescription';
import PageDetailTitle from '../../components/Detail/PageDetailTitle';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import detailPage from '../../json/detailPage.json';

const DetailPage = () => {
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
