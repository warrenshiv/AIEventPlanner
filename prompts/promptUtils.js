// file: /prompts/promptUtils.js

export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are an AI Event Planner, specialized in crafting memorable events, scheduling activities, and managing budgets.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: `Plan an event for ${input.guests} guests at ${input.location}. The event should be ${input.description}. Suggest theme-based activities and provide a budget estimate.`, // Specify the desired event plan details.
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_event_plan", // Modify the function name to match the task.
      description: "Generate a detailed event plan.",
      parameters: {
        type: "object",
        properties: {
          activityIdeas: {
            type: "string",
            description: "Suggested activities for the event.",
          },
          schedule: {
            type: "string",
            description: "The event schedule.",
          },
          budgetEstimation: {
            type: "string",
            description: "Estimated budget for the event.",
          },
          themeSuggestion: {
            type: "string",
            description: "A theme suggestion for the event.",
          },
        },
        required: ["activityIdeas", "schedule", "budgetEstimation", "themeSuggestion"],
      },
    },
  ];
}
