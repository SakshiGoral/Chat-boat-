
export const getBotResponse = (input: string): string => {
  const lowerCaseInput = input.toLowerCase().trim();

  // Greeting Rule
  if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi') || lowerCaseInput.includes('hey')) {
    const responses = ["Hello there! How can I help you today?", "Hi! What can I do for you?", "Hey! Nice to hear from you."];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Time Rule
  if (lowerCaseInput.includes('time')) {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `The current time is ${timeString}.`;
  }

  // Joke Rule
  if (lowerCaseInput.includes('joke') || lowerCaseInput.includes('funny')) {
    const jokes = [
      "Why don't scientists trust atoms? Because they make up everything!",
      "I told my wife she should embrace her mistakes. She gave me a hug.",
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
      "What do you call fake spaghetti? An impasta!"
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  // Help/Capabilities Rule
  if (lowerCaseInput.includes('help') || lowerCaseInput.includes('what can you do')) {
    return "I am a simple rule-based bot. You can ask me for the current time, to tell you a joke, or just chat. Try saying 'tell me a joke'!";
  }

  // Farewell Rule
  if (lowerCaseInput.includes('bye') || lowerCaseInput.includes('goodbye') || lowerCaseInput.includes('see you')) {
    return "Goodbye! Have a great day!";
  }

  // Thank you Rule
  if (lowerCaseInput.includes('thank you') || lowerCaseInput.includes('thanks')) {
    return "You're welcome! Is there anything else I can help with?";
  }
  
  // How are you Rule
  if (lowerCaseInput.includes('how are you')) {
      return "I'm just a bunch of code, but I'm doing great! Thanks for asking.";
  }

  // Default Fallback Rule
  const fallbackResponses = [
    "I'm not sure I understand. Could you rephrase that?",
    "Sorry, I didn't get that. I'm still learning. You can ask me for the time or a joke.",
    "My apologies, I can't answer that yet. Try asking me something simpler like 'what's the time?'.",
  ];
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
};
