import { FETCH_ALL, FETCH_DETAIL } from '../types';

import * as api from '../../api/index';
import axios from 'axios';

// export const fetchPage = (url, page) => (dispatch) => {
//   return axios.get(url).then((response) => {
//     dispatch({
//       type: FETCH_ALL,
//       payload: {
//         [page]: response.data,
//       },
//     });
//     return response.data;
//   });
// };
export const getAllData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();
    console.log(data);

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
    console.log(data);
    // dispatch({type: types.GET_ITEM, payload: id})
    dispatch({ type: FETCH_DETAIL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
