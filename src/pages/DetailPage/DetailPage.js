import React, { useEffect, useState } from 'react';
import FeaturedImage from '../../components/Detail/FeaturedImage';
import PageDetailDescription from '../../components/Detail/PageDetailDescription';
import PageDetailTitle from '../../components/Detail/PageDetailTitle';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailItems } from '../../store/actions/page';
import { useParams } from 'react-router-dom';

const DetailPage = (props) => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const items = useSelector((state) => state.page);
  console.log(items);
  const fetchDetails = (id) => {
    dispatch(getDetailItems(id));
  };
  useEffect(() => {
    fetchDetails(id);
  }, []);

  return (
    <section className='detail-page'>
      <Navbar />
      <PageDetailTitle data={items} />
      <FeaturedImage data={items} />
      <PageDetailDescription data={items} currentId={currentId} />
      <Footer />
    </section>
  );
};
export default DetailPage;
