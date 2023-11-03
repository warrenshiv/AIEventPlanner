// file: /components/ResponseDisplay.js
const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    console.log("Data from OpenAI API in display: ", data.result);

    content = (
      <>
        <p>Name: {data.result.animalPetName}</p>
        <p>Description: {data.result.description}</p>
      </>
    );
  } else {
    content = "";
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
