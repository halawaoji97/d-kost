import React from 'react';
import InputText from '../Input/InputText';

const BookingInformation = (props) => {
  const { data, detailPage, checkout } = props;
  console.log(data);

  return (
    <div className='container booking-information mt-5'>
      <div className='row align-items-center justify-content-around'>
        <div className='col-sm-10 col-md-5 mt-5 border-right'>
          <div className='card'>
            <figure className='figure-img img-fluid rounded'>
              <img
                className='rounded img-fluid'
                src={data.imageUrls}
                alt={data.title}
              />
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
          <label htmlFor='name'>Full Name</label>
          <InputText
            id='fullName'
            name='fullName'
            value={data.fullName}
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

          <label htmlFor='phone'>Phone Number</label>
          <InputText
            id='phone'
            name='phone'
            value={data.phone}
            type='tel'
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingInformation;
