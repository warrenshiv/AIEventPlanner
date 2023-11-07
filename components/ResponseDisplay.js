// file: /components/ResponseDisplay.js
import React from "react";

const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Loading..."; // Display a loading message while waiting for the AI response.
  } else if (error) {
    content = `Error: ${error.message}`; // Display an error message if there's an issue with the AI request.
  } else if (data) {
    const { activityIdeas, schedule, budgetEstimation, themeSuggestion } = data.result;

     // Split the schedule string into an array of options
     const scheduleOptions = schedule.split("\n").map((option, index) => (
      <option key={index}>{option}</option>
    ));

     // Split the schedule string into an array of options
     const scheduleActivities = activityIdeas.split("\n").map((option, index) => (
      <option key={index}>{option}</option>
    ));

    content = (
      <div className="response-content">
        <p><p style={{ fontWeight: "bold" }}>Theme-Based Activities: </p>{themeSuggestion}</p>
        <p><p style={{ fontWeight: "bold" }}>Activities Ideas: </p>{scheduleActivities}</p>
        <p><p style={{ fontWeight: "bold" }}>Schedule: </p>{scheduleOptions}</p>
        <p><p style={{ fontWeight: "bold" }}>Budget Estimate: </p>{budgetEstimation}</p>
      </div>
    );
  } else {
    content = ""; // Empty content by default.
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
