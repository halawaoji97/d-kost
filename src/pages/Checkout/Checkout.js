import React, { Component } from 'react';
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

export default class Checkout extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankName: '',
      bankHolder: '',
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'Staycation | Checkout';
  }

  render() {
    const { data } = this.state;
    const checkout = {
      duration: '',
    };
    console.log(data);

    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        description: 'Please fill up the blank fields below',
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={detailPage}
            onChange={this.onChange}
          />
        ),
      },

      payment: {
        title: 'Payment',
        description: 'Kindly follow the instructions below',
        content: (
          <Payment
            data={data}
            ItemDetails={detailPage}
            checkout={checkout}
            onChange={this.onChange}
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
        {/* <Header isCentered /> */}
        <Stepper steps={steps} initialStep='payment'>
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
                  {data.firstName !== '' &&
                    data.lastName !== '' &&
                    data.email !== '' &&
                    data.phone !== '' && (
                      <button
                        className='btn mb-3'
                        type='button'
                        onClick={nextStep}
                      >
                        Continue to Book
                      </button>
                    )}
                  <button
                    className='btn'
                    type='link'
                    href={`/properties/${checkout._id}`}
                  >
                    Cancel
                  </button>
                </Controller>
              )}

              {CurrentStep === 'payment' && (
                <Controller>
                  {data.proofPayment !== '' &&
                    data.bankName !== '' &&
                    data.bankHolder !== '' && (
                      <button
                        className='btn mb-3'
                        type='button'
                        onClick={nextStep}
                      >
                        Continue to Book
                      </button>
                    )}
                  <button className='btn' type='button' onClick={prevStep}>
                    Cancel
                  </button>
                </Controller>
              )}

              {CurrentStep === 'completed' && (
                <Controller>
                  <button className='btn' isBlock isPrimary hasShadow href=''>
                    Back to Home
                  </button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}
