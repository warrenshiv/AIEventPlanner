import React from "react";

const TextInput = ({ value, onChange, placeholder, type }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="text-input-container">
      <input
        type={type || "text"}
        value={value}
        onChange={handleInputChange}
        className={`text-input ${type === "number" ? "number-input" : ""}`}
        placeholder={placeholder}
        required // Add the required attribute for basic validation.
      />
      {value && (
        <button
          className="clear-button"
          onClick={() => onChange("")}
          aria-label="Clear input"
        >
          &#x2715;
        </button>
      )}
    </div>
  );
};

export default TextInput;
