import React from 'react';
import InputText from '../Input/InputText';
import Fade from 'react-reveal/Fade';
const BookingInformation = (props) => {
  const { data } = props;

  return (
    <Fade bottom>
      <div className='container booking-information mt-5'>
        <div className='row align-items-center justify-content-around'>
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
    </Fade>
  );
};

export default BookingInformation;
