import React, { useEffect, useState } from 'react';
import BookingForm from '../../components/BookingForm';
import FeaturedImage from '../../components/Detail/FeaturedImage';
import PageDetailDescription from '../../components/Detail/PageDetailDescription';
import PageDetailTitle from '../../components/Detail/PageDetailTitle';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import detailPage from '../../json/detailPage.json';
import { connect, useDispatch, useSelector } from 'react-redux';
import { checkoutBooking } from '../../store/actions/checkout';
import { getDetailItems, getItems } from '../../store/actions/items';
import { fetchData, fetchDetailData } from '../../api';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const [currentId, setCurrentId] = useState(null);
  const [detailItem, setdetailItem] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
  const items = useSelector((state) => state.items);
  console.log(items);
  console.log(id);

  const detailsPage = () => {
    fetch(
      `https://staycation-bwa-mern.herokuapp.com/api/v1/member/detail-page/${id}`
    )
      .then((res) => res.json())
      .then((data) => setdetailItem(data))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    document.title = 'Detail';
    window.scrollTo(0, 0);
    detailsPage();
  }, []);

  return (
    <section className='detail-page'>
      <Navbar />
      <PageDetailTitle data={detailItem} />
      {/* <FeaturedImage data={detailItem} /> */}
      <PageDetailDescription data={detailItem} />
      <Footer />
    </section>
  );
};
export default DetailPage;
