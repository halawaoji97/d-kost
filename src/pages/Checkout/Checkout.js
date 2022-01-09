import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from '../../components/Stepper';
import BookingInformation from '../../components/Checkout/BookingInformation';
import Payment from '../../components/Checkout/Payment';
import Completed from '../../components/Checkout/Completed';
import detailPage from '../../json/detailPage.json';
import { useParams } from 'react-router-dom';
import { checkoutBooking } from '../../store/actions/page';

const Checkout = (props) => {
  const { state } = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    bank_from: '',
    account_holder: '',
    booking_start_date: new Date(),
    staying_start_date: '',
    idItem: '',
  });

  useEffect(() => {
    const { dataBooking } = state;
    if (data)
      setData({
        ...data,
        idItem: dataBooking._id,
      });
  }, []);

  const handleBooking = (nextStep) => {
    dispatch(checkoutBooking({ ...data }));
    nextStep();
  };
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
        <BookingInformation data={data} detailPage={data} onChange={onChange} />
      ),
    },

    payment: {
      title: 'Payment',
      description: 'Kindly follow the instructions below',
      content: (
        <Payment data={data} detailPage={detailPage} onChange={onChange} />
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
                  to={`/detail/${data.idItem}`}
                >
                  Cancel
                </Link>
                {data.full_name !== '' &&
                  data.email !== '' &&
                  data.phone_number !== '' &&
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
                {data.bank_name !== '' && data.bank_holder !== '' && (
                  <button
                    className='btn text-light rounded btn-lg btn-primary'
                    type='button'
                    onClick={() => {
                      handleBooking(nextStep);
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

export default Checkout;
