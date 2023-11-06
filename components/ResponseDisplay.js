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

    content = (
      <div className="response-content">
        <p>Theme-Based Activities: {themeSuggestion}</p>
        <p>Activities Ideas: {activityIdeas}</p>
        <p>schedule: {schedule}</p>
        <p> Budget Estimate: {budgetEstimation}</p>
      </div>
    );
  } else {
    content = ""; // Empty content by default.
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
