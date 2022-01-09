import { FETCH_ALL, FETCH_DETAIL, CHECKOUT_BOOKING } from '../types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case FETCH_DETAIL:
      return {
        ...action.payload,
      };
    case CHECKOUT_BOOKING:
      return [...state, action.payload];
    default:
      return state;
  }
}
