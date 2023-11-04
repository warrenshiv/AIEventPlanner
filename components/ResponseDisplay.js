// file: /components/ResponseDisplay.js
const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Loading..."; // Display a loading message while waiting for the AI response.
  } else if (error) {
    content = `Error: ${error.message}`; // Display an error message if there's an issue with the AI request.
  } else if (data) {
    console.log("Data from OpenAI API in display: ", data.result);

    content = (
      <>
        <p>Name: {data.result.eventRecommendation}</p>
        <p>Description: {data.result.description}</p> {/* Display the AI-generated event recommendation. */}
      </>
    );
  } else {
    content = ""; // Empty content by default.
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
