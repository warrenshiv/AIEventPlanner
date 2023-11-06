import React, { useState } from "react";
import TextInput from "./TextInput";

const InputForm = ({ onSubmit }) => {
  const [guests, setGuests] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [guestsError, setGuestsError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    if (!guests || isNaN(guests) || guests < 1) {
      setGuestsError("Please enter a valid number of guests.");
      isValid = false;
    } else {
      setGuestsError("");
    }

    if (!location) {
      setLocationError("Location is required.");
      isValid = false;
    } else {
      setLocationError("");
    }

    if (!description) {
      setDescriptionError("Description is required.");
      isValid = false;
    } else {
      setDescriptionError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} suppressHydrationWarning>
      <TextInput
        type="number"
        value={guests}
        onChange={(value) => setGuests(value)}
        placeholder="Number of guests"
      />
      <span className="error-message">{guestsError}</span>

      <TextInput
        value={location}
        onChange={(value) => setLocation(value)}
        placeholder="Event location"
      />
      <span className="error-message">{locationError}</span>

      <TextInput
        value={description}
        onChange={(value) => setDescription(value)}
        placeholder="Event description"
      />
      <span className="error-message">{descriptionError}</span>
    </form>
  );
};

export default InputForm;
