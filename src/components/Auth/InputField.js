import React from 'react';

const InputField = (props) => {
  const { name, handleChange, label, type, className, placeholder } = props;
  return (
    <div class='mb-3'>
      <label for={name} class='form-label'>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={className}
        id={label}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
