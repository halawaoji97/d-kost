import React, { Component } from 'react';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        },
      },
    };
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.data._id,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    // if (history) history.push('/checkout');
    // this.props.history.push('/checkout');
    // this.props.history.push({ pathname: '/checkout', state: data });
  };

  render() {
    const { data } = this.state;
    const { itemDetails, startBooking } = this.props;
    return (
      <button className='btn btn-primary btn-large' onClick={this.startBooking}>
        Continue to Book
      </button>
    );
  }
}

export default BookingForm;
