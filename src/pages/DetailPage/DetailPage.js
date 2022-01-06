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
import axios from 'axios';

const DetailPage = () => {
  const [currentId, setCurrentId] = useState(null);
  const [detailItem, setdetailItem] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();
  // const items = useSelector((state) => state.items);
  // console.log(items);
  // console.log(id);

  useEffect(() => {
    document.title = 'Detail';
    window.scrollTo(0, 0);
    const detailsPage = async () => {
      try {
        const response = await axios.get(
          `https://staycation-bwa-mern.herokuapp.com/api/v1/member/detail-page/${id}`
        );
        console.log(response.data);
        setdetailItem(response.data);
        setCurrentId(response.data._id);
      } catch (error) {
        console.log(error);
      }
    };
    detailsPage();
  }, []);

  // useEffect(() => {
  //   dispatch(checkoutBooking());
  // }, []);
  console.log(detailItem);
  if (!detailItem) return 'no data';
  // console.log(currentId);
  return (
    <section className='detail-page'>
      <Navbar />
      <PageDetailTitle data={detailItem} />
      {/* <FeaturedImage data={detailItem} /> */}
      <PageDetailDescription data={detailItem} currentId={currentId} />
      <Footer />
    </section>
  );
};
export default DetailPage;
