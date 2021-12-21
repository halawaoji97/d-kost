import React from 'react';
import imgFeatures from '../../../assets/images/pict1.jpg';

const Item = () => {
  return (
    <div className='col-lg-3 col-sm-10 col-md-6 my-3'>
      <div className='card'>
        <img src={imgFeatures} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>
            <a href='' className='stretched-link'>
              Kelapa Gading, Jakarta Utara
            </a>
          </h5>
          <p className='card-text'>700.000 / month</p>
          <div className='rating'>
            <span className='material-icons'>grade</span>
            <span className='rating-value'>4.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
