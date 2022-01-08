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
import { fetchPage } from '../../store/actions/page';

const DetailPage = (props) => {
  const [currentId, setCurrentId] = useState(null);
  const [detailItem, setdetailItem] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  const items = useSelector((state) => state.page);
  console.log(items);
  // console.log(items);
  const fetchDetails = (id) => {
    dispatch(getDetailItems(id));
  };
  //   console.log(data);
  //   dispatch(
  //     fetchPage(
  //       `https://garos.herokuapp.com/api/v1/member/detail-page/${id}`,
  //       'detailPage'
  //     )
  //   )
  //     .then((res) => console.log(res))
  //     .then((res) => setdetailItem(res));
  // };
  // console.log(detailItem);
  // const detailItem = useSelector((state) =>
  //   state.page.mostPopular.find((item) => item._id === id)
  // );
  console.log(id);
  useEffect(() => {
    fetchDetails(id);
  }, []);
  // if (!detailItem) return 'no data';
  // console.log(a);

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

  // console.log(currentId);
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
