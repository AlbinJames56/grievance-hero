import React from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./Config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const ChatBot = () => {
  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
};

export default ChatBot;
