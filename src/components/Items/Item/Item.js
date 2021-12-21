import React from 'react';

const Item = ({ item }) => {
  return (
    <div className='col-lg-3 col-sm-10 col-md-6 my-3'>
      <div className='card'>
        <img src={item.imageUrl} className='card-img-top' alt={item.imageUrl} />
        <div className='card-body'>
          <h5 className='card-title'>
            <a href='' className='stretched-link'>
              {`${item.location}, ${item.city}`}
            </a>
          </h5>
          <p className='card-text'>{`${item.price} / ${item.unit}`} </p>
          <div className='rating'>
            <span className='material-icons'>grade</span>
            <span className='rating-value'>{item.rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
