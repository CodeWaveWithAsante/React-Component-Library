import React, { useState } from "react";

const FormInput = ({
  label,
  type,
  placeholder,
  required = false,
  onChange,
  value,
  validator = () => {},
  name,
  error,
  resetError,
}) => {
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    const response = validator(inputValue);

    setIsValid(response); // Update the validity state
    onChange(inputValue); // Pass the input value to
  };

  return (
    <div>
      <label className='block mb-2 text-sm font-medium text-gray-800'>
        {label}
      </label>
      <input
        onFocus={resetError}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        required={required}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 block w-full p-2.5 outline-none '
      />
      {!isValid?.isValid && error === null && (
        <span className='mt-2 text-sm text-red-600'>{isValid?.msg}</span>
      )}
      {error && <span className='mt-2 text-sm text-red-600'>{error}</span>}
    </div>
  );
};

export default FormInput;
