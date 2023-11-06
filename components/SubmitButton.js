import React from "react";

const SubmitButton = ({ onClick }) => {
  return (
    <button type="submit" className="btn btn-primary" onClick={onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;
