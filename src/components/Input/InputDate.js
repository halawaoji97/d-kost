import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const InputDate = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <DatePicker
        dateFormat='MMMM d, yyyy'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className='date-picker'
      />
    </>
  );
};

export default InputDate;
