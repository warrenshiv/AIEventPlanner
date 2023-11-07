import React from 'react';

const InputForm = ({ guests, onChange, location, onChange2, description, onChange3 }) => {
  return (
    <div>
      <input
        type="text"
        value={guests}
        onChange={onChange}
        className="text-input"
        placeholder="Enter the number of guests"
      />
      <input
        type="text"
        value={location}
        onChange={onChange2}
        className="text-input"
        placeholder="Enter the location"
      />
       <input
        type="text"
        value={description}
        onChange={onChange3}
        className="text-input"
        placeholder="Enter the description"
      />
    </div>
  );
};

export default InputForm;
