import React, { useState } from 'react';
import InputDate from '../Input/InputDate';
import InputText from '../Input/InputText';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
const BookingInformation = (props) => {
  const { data } = props;

  return (
    <div className='container booking-information mt-5'>
      <div className='row align-items-center justify-content-around'>
        <div className='col-sm-10 col-md-5 mt-5 border-right'>
          <div className='card'>
            <figure className='figure-img img-fluid rounded'>
              {/* <img
                className='rounded img-fluid'
                src={`${process.env.REACT_APP_HOST}/${data.imageId.imageUrl}`}
                alt={data.title}
              /> */}
            </figure>
            <div className='row p-3 align-items-center d-flex justify-content-around'>
              <div className='col'>
                <h5>Kost {data.title}</h5>
                <span className='text-secondary'>
                  {data.price}, {data.city}
                </span>
              </div>
              <div className='col d-sm-none d-xs-none d-md-block'></div>
              <div className='col'>
                <p className='text-secondary'>
                  Rp. {`${data.price} / ${data.unit} `}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-10 mt-5 col-md-5'>
          <label htmlFor='full_name'>Full Name</label>
          <InputText
            id='full_name'
            name='full_name'
            value={data.full_name}
            type='text'
            onChange={props.onChange}
          />

          <label htmlFor='email'>Email Address</label>
          <InputText
            id='email'
            name='email'
            value={data.email}
            type='email'
            onChange={props.onChange}
          />

          <label htmlFor='phone_number'>Phone Number</label>
          <InputText
            id='phone_number'
            name='phone_number'
            value={data.phone_number}
            type='tel'
            onChange={props.onChange}
          />

          <label htmlFor='staying_start_date'>Date</label>
          {/* <DatePicker
            dateFormat='MMMM d, yyyy'
            selected={startDate}
            id='staying_start_date'
            name='staying_start_date'
            value={startDate}
            onChange={datePickerChange}
            className='date-picker'
          /> */}
          <InputText
            id='staying_start_date'
            name='staying_start_date'
            value={data.staying_start_date}
            type='text'
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingInformation;
