import axios from 'axios';

const API = axios.create({
  baseURL: 'https://staycation-bwa-mern.herokuapp.com/api/v1',
});

export const fetchData = () => API.get('/member/landing-page');
export const fetchDetailData = (id) => API.get(`/member/detail-page/${id}`);
