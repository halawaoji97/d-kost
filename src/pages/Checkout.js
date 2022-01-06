import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CheckoutExample = () => {
  const { state } = useLocation();
  const { dataBooking } = state;
  console.log('data-booking', dataBooking);

  return <h1>ok</h1>;
};

export default CheckoutExample;
