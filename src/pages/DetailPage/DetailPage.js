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
import { getDetailItems, getItems } from '../../store/actions/page';
import { fetchData, fetchDetailData } from '../../api';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPage = () => {
  const [currentId, setCurrentId] = useState(null);
  // const [detailItem, setdetailItem] = useState([]);
  const dispatch = useDispatch();
  // const { id } = useParams();
  // console.log(id);
  // const detailItem = useSelector((state) =>
  //   state.page.mostPopular.find((item) => item._id === id)
  // );
  // console.log(detailItem);
  // if (!detailItem) return 'no data';
  // console.log(a);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetailItems(id));
  }, [dispatch]);

  // useEffect(() => {
  //   document.title = 'Detail';
  //   window.scrollTo(0, 0);
  //   const detailsPage = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${id}`
  //       );
  //       setdetailItem(response.data);
  //       setCurrentId(response.data._id);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   detailsPage();
  // }, []);

  // useEffect(() => {
  //   dispatch(checkoutBooking());
  // }, []);
  // console.log(currentId);
  return (
    <section className='detail-page'>
      <Navbar />
      {/* <PageDetailTitle data={detailItem} />
      <FeaturedImage data={detailItem} />
      <PageDetailDescription data={detailItem} currentId={currentId} />
      <Footer /> */}
    </section>
  );
};
export default DetailPage;
