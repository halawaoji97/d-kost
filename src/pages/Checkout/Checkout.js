import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from '../../components/Stepper';
import BookingInformation from '../../components/Checkout/BookingInformation';
import Payment from '../../components/Checkout/Payment';
import Completed from '../../components/Checkout/Completed';
import axios from 'axios';
import detailPage from '../../json/detailPage.json';
import { checkoutBooking } from '../../store/actions/checkout';

const Checkout = () => {
  const { state } = useLocation();
  const { dataBooking } = state;
  console.log(dataBooking);
  const [data, setData] = useState({
    full_name: '',
    email: '',
    phone: '',
    proof_payment: '',
    bank_name: '',
    bank_holder: '',
    title: dataBooking.title,
    price: dataBooking.price,
    city: dataBooking.city,
    imageId: dataBooking.imageId[0],
    unit: dataBooking.unit,
    booking_start_date: new Date(),
    staying_start_date: '',
  });
  console.log(data);
  const submitBooking = (payload) => () => {
    return axios.post(`/booking-page`, payload, {
      headers: { contentType: 'multipart/form-data' },
    });
  };
  const _Submit = (nextStep) => {
    const { dataBooking } = state;
    console.log(data);
    // const { checkout } = this.props;

    const payload = new FormData();
    payload.append('full_name', dataBooking.full_name);
    payload.append('email', dataBooking.email);
    payload.append('booking_start_date', dataBooking.booking_start_date);
    payload.append('staying_start_date', dataBooking.staying_start_date.value);
    payload.append('phone_number', dataBooking.phone);
    payload.append('idItem', dataBooking._id);
    payload.append('account_holder', dataBooking.bank_holder);
    payload.append('bank_from', dataBooking.bank_name);
    payload.append('image', dataBooking.proofPayment[0].name);
    // payload.append("bankId", dataBooking.bankId);

    submitBooking(payload);
  };
  const [checkout, setCheckout] = useState({ duration: '' });

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const steps = {
    bookingInformation: {
      title: 'Booking Information',
      description: 'Please fill up the blank fields below',
      content: (
        <BookingInformation
          data={data}
          checkout={checkout}
          detailPage={data}
          onChange={onChange}
        />
      ),
    },

    payment: {
      title: 'Payment',
      description: 'Kindly follow the instructions below',
      content: (
        <Payment
          data={data}
          detailPage={detailPage}
          checkout={checkout}
          onChange={onChange}
        />
      ),
    },

    completed: {
      title: 'Yay! Completed',
      description: null,
      content: <Completed />,
    },
  };
  return (
    <>
      <Stepper steps={steps} initialStep='bookingInformation'>
        {(prevStep, nextStep, CurrentStep, steps) => (
          <>
            <Numbering
              data={steps}
              current={CurrentStep}
              style={{ marginBottom: 50 }}
            />

            <Meta data={steps} current={CurrentStep} />

            <MainContent data={steps} current={CurrentStep} />

            {CurrentStep === 'bookingInformation' && (
              <Controller>
                <Link
                  className='btn rounded text-light btn-lg btn-secondary'
                  to={`/detail/${checkout._id}`}
                >
                  Cancel
                </Link>
                {data.full_name !== '' &&
                  data.email !== '' &&
                  data.phone !== '' &&
                  data.staying_start_date !== '' && (
                    <button
                      className='btn text-light rounded btn-lg btn-primary'
                      type='button'
                      onClick={nextStep}
                    >
                      Continue
                    </button>
                  )}
              </Controller>
            )}

            {CurrentStep === 'payment' && (
              <Controller>
                <button
                  className='btn rounded text-light btn-lg btn-secondary'
                  type='button'
                  onClick={prevStep}
                >
                  Back
                </button>
                {data.proof_payment !== '' &&
                  data.bank_name !== '' &&
                  data.bank_holder !== '' && (
                    <button
                      className='btn text-light rounded btn-lg btn-primary'
                      type='button'
                      onClick={() => {
                        _Submit(nextStep);
                      }}
                    >
                      Continue to Book
                    </button>
                  )}
              </Controller>
            )}

            {CurrentStep === 'completed' && (
              <Controller>
                <Link
                  to='/'
                  className='btn text-light rounded btn-lg btn-primary'
                >
                  Back to Home
                </Link>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </>
  );
};

const mapStateToProps = (state) => ({
  checkout: state.checkout,
});

export default connect(mapStateToProps)(Checkout);
