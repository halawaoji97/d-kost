import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from '../components/Stepper';
import BookingInformation from '../components/Checkout/BookingInformation';
import Payment from '../components/Checkout/Payment';
import Completed from '../components/Checkout/Completed';
import detailPage from '../json/detailPage.json';

const CheckoutExample = () => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    phone: '',
    proofPayment: '',
    bankName: '',
    bankHolder: '',
  });
  console.log(data);
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
          detailPage={detailPage}
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
                {data.fullName !== '' &&
                  data.email !== '' &&
                  data.phone !== '' && (
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
                {data.proofPayment !== '' &&
                  data.bankName !== '' &&
                  data.bankHolder !== '' && (
                    <button
                      className='btn text-light rounded btn-lg btn-primary'
                      type='button'
                      onClick={nextStep}
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

export default CheckoutExample;
