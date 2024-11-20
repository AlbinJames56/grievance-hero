import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Minnal Murali",
  initialMessages: [
    createChatBotMessage("Hello! How can I help you with your grievance today?"),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#0069d9",
    },
    chatButton: {
      backgroundColor: "#0069d9",
    },
  },
  state: {
    // any state you want to initialize
  },
};

export default config;
