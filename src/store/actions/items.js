import { FETCH_ALL, FETCH_DETAIL } from '../types';

import * as api from '../../api/index';

export const getItems = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const getDetailItems = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.fetchDetailData(id);
//     console.log(data);

//     dispatch({ type: FETCH_DETAIL, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
