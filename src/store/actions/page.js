import { FETCH_ALL, FETCH_DETAIL } from '../types';

import * as api from '../../api/index';

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
    const { detailItem } = await api.fetchDetailData(id);
    console.log(detailItem);
    // dispatch({type: types.GET_ITEM, payload: id})
    dispatch({ type: FETCH_DETAIL, payload: detailItem, id: id });
  } catch (error) {
    console.log(error.message);
  }
};
