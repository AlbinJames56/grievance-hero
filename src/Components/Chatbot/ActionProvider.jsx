import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleNewGrievance = () => {
    const message = createChatBotMessage(
      "Please go ahead and submit your grievance here."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleGrievanceStatus = () => {
    const message = createChatBotMessage(
      "I can help you check your grievance status. Please share your grievance ID."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  const handleUnknown = () => {
    const message = createChatBotMessage(
      "Sorry, I didn't understand that. Could you rephrase?"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  return { handleNewGrievance, handleGrievanceStatus, handleUnknown };
};

export default ActionProvider;
