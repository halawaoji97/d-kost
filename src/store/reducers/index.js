import { combineReducers } from 'redux';
import checkout from './checkout';
import page from './page';
import auth from './auth';

export default combineReducers({
  checkout,
  page,
  auth,
});
