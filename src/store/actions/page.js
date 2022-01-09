import { FETCH_ALL, FETCH_DETAIL, CHECKOUT_BOOKING } from '../types';

import * as api from '../../api/index';
import axios from 'axios';

export const getAllData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getDetailItems = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://garos.herokuapp.com/api/v1/member/detail-page/${id}`
    );
    dispatch({ type: FETCH_DETAIL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const checkoutBooking = (item) => async (dispatch) => {
  try {
    const { data } = await api.checkoutBooking(item);

    dispatch({ type: CHECKOUT_BOOKING, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
