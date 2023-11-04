// file: /prompts/promptUtils.js

export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are an AI Event Planner, specialized in creating memorable events and short descriptions.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: `Generate a event recommendation and a short description for a ${input}`, // Refine the content to provide more context and specify that you're looking for event-related suggestions.
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_event_recommendation", // Modify the function name.
      description: "Generate event-related recommendations.",
      parameters: {
        type: "object",
        properties: {
          // Define the expected structure of the AI response for events.
          eventRecommendation: {
            type: "string",
            description: "The generated event recommendation.",
          },
          description: {
            type: "string",
            description: "The generated event-related recommendations explanation",
          },
        },
        required: ["eventRecommendation", "description"],
      },
    },
  ];
}
