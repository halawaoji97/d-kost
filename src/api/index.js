import axios from 'axios';

const API = axios.create({
  baseURL: 'https://garos.herokuapp.com/api/v1',
});

export const fetchData = () =>
  axios.get('https://garos.herokuapp.com/api/v1/member/landing-page');
export const fetchDetailData = (id) =>
  axios.get(`https://garos.herokuapp.com/api/v1/member/detail-page/${id}`);
