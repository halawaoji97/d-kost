import { CHECKOUT_BOOKING } from '../types';
// import axios from "configs/axios";

// export const checkoutBooking = (payload) => (dispatch) => {
//   dispatch({
//     type: CHECKOUT_BOOKING,
//     payload: payload,
//   });
// };

export const checkoutBooking = (itemId) => {
  return {
    type: CHECKOUT_BOOKING,
    payload: {
      id: itemId,
    },
  };
};
