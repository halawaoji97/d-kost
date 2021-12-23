import React, { useState } from 'react';
import InputText from '../Input/InputText';
import detailPage from '../../json/detailPage.json';

const BookingInformation = () => {
  const [inputValue, setInputValue] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className='container booking-page mt-5'>
      <div className='row align-items-center justify-content-around'>
        <div className='col-sm-10 col-md-5 mt-5 border-right'>
          <div className='card'>
            <figure className='figure-img img-fluid rounded'>
              <img
                className='rounded img-fluid'
                src={detailPage.imageUrls[0].url}
                alt={detailPage.location}
              />
            </figure>
            <div className='row p-3 align-items-center d-flex justify-content-around'>
              <div className='col'>
                <h5>Kost {detailPage.location}</h5>
                <span className='text-secondary'>
                  {detailPage.location}, {detailPage.city}
                </span>
              </div>
              <div className='col d-sm-none d-xs-none d-md-block'></div>
              <div className='col'>
                <p className='text-secondary'>
                  Rp. {`${detailPage.price} / ${detailPage.unit} `}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-10 mt-5 col-md-5'>
          <h3 className='mb-4 text-primary'>Please fill the fields below</h3>
          <label htmlFor='name'>Full Name</label>
          <InputText
            name='name'
            value={inputValue}
            type='text'
            onChange={handleInputChange}
          />

          <label htmlFor='email'>Email Address</label>
          <InputText
            name='email'
            value={inputValue}
            type='email'
            onChange={handleInputChange}
          />

          <label htmlFor='phone'>Phone Number</label>
          <InputText
            name='phone'
            value={inputValue}
            type='tel'
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingInformation;
