import React from 'react';

const InputForm = ({ guests, onChange, location, onChange2, description, onChange3 }) => {
  return (
     <div className='mb-3'>
      <div className='mb-3'>
      <input
        type="text"
        value={guests}
        onChange={onChange}
        className="form-control"
        placeholder="Enter the number of guests"
      />
      </div>

      <div className='mb-3'>
      <input
        type="text"
        value={location}
        onChange={onChange2}
        className="form-control"
        placeholder="Enter the location"
      />
      </div>
       <input
        type="text"
        value={description}
        onChange={onChange3}
        className="form-control"
        placeholder="Enter the description"
      />
    </div>
  );
};

export default InputForm;
