import React, { useState } from 'react';

const InputText = (props) => {
  const { value, type, placeholder, name, errorResponse } = props;

  const [hasError, setHasError] = useState(null);

  let pattern = '';
  if (type === 'email') pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === 'tel') pattern = '[0-9]*';

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (type === 'email') {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === 'tel') {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
    console.log(target);
  };
  return (
    <div className='input-text mb-3'>
      <div className='input-group rounded'>
        <input
          name={name}
          type={type}
          pattern={pattern}
          className='form-control'
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          hasError={errorResponse}
        />
      </div>
    </div>
  );
};

export default InputText;

InputText.defaultProps = {
  type: 'text',
  pattern: '',
  placeholder: 'Please type here...',
  errorResponse: 'Please match the requested format.',
};
