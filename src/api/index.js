import axios from 'axios';

const API = axios.create({
  baseURL: 'https://garos.herokuapp.com/api/v1',
});

const APISIGN = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchData = () => API.get('/member/landing-page');
export const fetchDetailData = (id) => API.get(`/member/detail-page/${id}`);
export const checkoutBooking = (newPost) =>
  API.post('/member/booking-page', newPost);

export const signIn = (formData) => APISIGN.post('/user/signin', formData);
export const signUp = (formData) =>
  API.post(
    '/user/signup',
    { headers: { 'Access-Control-Allow-Origin': '*' } },
    formData
  );
