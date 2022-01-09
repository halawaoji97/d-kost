import React from 'react';
import { Link } from 'react-router-dom';
import formattingRupiah from '../../utils/formattingRupiah';

const Item = ({ item }) => {
  return (
    <div className='card'>
      <img
        src={
          item.imageId[0]
            ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
            : ''
        }
        className='card-img-top'
        alt={item.title}
      />
      <div className='card-body'>
        <h5 className='card-title'>
          <Link to={`/detail/${item._id}`} className='stretched-link'>
            {`${item.title}, ${item.city}`}
          </Link>
        </h5>
        <p className='card-text'>{`${formattingRupiah(item.price)} / month`}</p>
        <div className='rating'>
          <span className='material-icons'>grade</span>
          <span className='rating-value'>{item.rate}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
