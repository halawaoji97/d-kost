import { FETCH_ALL, FETCH_DETAIL, FETCH_PAGE } from '../types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        ...action.payload,
      };
    case FETCH_DETAIL:
      return {
        ...state,
        itemId: action.payload,
      };

    default:
      return state;
  }
}
