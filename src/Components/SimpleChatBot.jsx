import React, { useState, useRef, useEffect } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import "./SimpleChatBot.css";
import chatIcon from "../assets/chaticon.png";
import userAvatar from "../assets/boy.png";

const steps = [
  {
    id: "1",
    message: "Hi!.. Im Minnal Murali, How can I assist you today?",
    trigger: "main_options",
  },
  {
    id: "main_options",
    options: [
      {
        value: "new_grievance",
        label: "Submit a grievance",
        trigger: "new_grievance",
      },
      { value: "status", label: "Check grievance status", trigger: "status" },
      {
        value: "how_to_apply",
        label: "How to apply?",
        trigger: "how_to_apply",
      },
      {
        value: "create_account",
        label: "Create an account",
        trigger: "create_account",
      },
      {
        value: "edit_grievance",
        label: "Edit grievance details",
        trigger: "edit_grievance",
      },
      {
        value: "contact_support",
        label: "Contact Support",
        trigger: "contact_support",
      },
      {
        value: "superhero_details",
        label: "Know about Minnal Murali",
        trigger: "superhero_details",
      },
      {
        value: "process_info",
        label: "Grievance process info",
        trigger: "process_info",
      },
      { value: "faq", label: "FAQs", trigger: "faq" },
    ],
  },
  {
    id: "new_grievance",
    message: "Please describe your grievance in detail.",
    trigger: "grievance_followup",
  },
  {
    id: "grievance_followup",
    message: "Would you like to attach any supporting documents?",
    trigger: "document_options",
  },
  {
    id: "document_options",
    options: [
      { value: "yes", label: "Yes", trigger: "attach_document" },
      { value: "no", label: "No", trigger: "thank_you_grievance" },
    ],
  },
  {
    id: "attach_document",
    message:
      "You can upload your documents on the grievance submission form. Anything else I can help with?",
    trigger: "main_options",
  },
  {
    id: "thank_you_grievance",
    message: "Thank you for your submission. Anything else I can help with?",
    trigger: "main_options",
  },
  {
    id: "status",
    message: "Please provide your grievance ID to check the status.",
    end: true,
  },
  {
    id: "how_to_apply",
    message:
      "To apply, you need to first create an account. Would you like instructions on account creation?",
    trigger: "apply_options",
  },
  {
    id: "apply_options",
    options: [
      { value: "yes", label: "Yes", trigger: "create_account" },
      {
        value: "no",
        label: "No, take me back to the menu.",
        trigger: "main_options",
      },
    ],
  },
  {
    id: "create_account",
    message:
      "To create an account, visit our signup page, fill in your details, and verify your email. Would you like the signup link?",
    trigger: "signup_options",
  },
  {
    id: "signup_options",
    options: [
      { value: "yes", label: "Yes", trigger: "signup_link" },
      {
        value: "no",
        label: "No, take me back to the menu.",
        trigger: "main_options",
      },
    ],
  },
  {
    id: "signup_link",
    message:
      "Here's the link to create an account: [Signup Page Link]. Anything else I can help with?",
    trigger: "main_options",
  },
  {
    id: "edit_grievance",
    message:
      "You can edit your grievance by visiting the 'My Grievances' section in your account dashboard. Need help navigating there?",
    trigger: "edit_options",
  },
  {
    id: "edit_options",
    options: [
      { value: "yes", label: "Yes", trigger: "navigation_help" },
      { value: "no", label: "No, I'm good.", trigger: "main_options" },
    ],
  },
  {
    id: "navigation_help",
    message:
      "After logging in, go to 'My Grievances,' select the grievance, and click 'Edit.' Anything else I can assist with?",
    trigger: "main_options",
  },
  {
    id: "contact_support",
    message:
      "You can contact support via email at support@example.com or call us at +1234567890. Anything else?",
    trigger: "main_options",
  },
  {
    id: "superhero_details",
    message:
      "Minnal Murali is our dedicated superhero who ensures justice is served. Want to know about his powers?",
    trigger: "superhero_options",
  },
  {
    id: "superhero_options",
    options: [
      { value: "yes", label: "Yes", trigger: "superhero_powers" },
      { value: "no", label: "No, thank you.", trigger: "main_options" },
    ],
  },
  {
    id: "superhero_powers",
    message:
      "Minnal Murali has lightning speed and unmatched courage. He works tirelessly to address grievances. Anything else I can help with?",
    trigger: "main_options",
  },
  {
    id: "process_info",
    message:
      "The grievance process involves submission, review, and resolution. Would you like details on any step?",
    trigger: "process_options",
  },
  {
    id: "process_options",
    options: [
      { value: "submission", label: "Submission", trigger: "submission_info" },
      { value: "review", label: "Review", trigger: "review_info" },
      { value: "resolution", label: "Resolution", trigger: "resolution_info" },
      { value: "no", label: "No, thank you.", trigger: "main_options" },
    ],
  },
  {
    id: "submission_info",
    message:
      "Submission involves describing your grievance and optionally attaching documents. Anything else?",
    trigger: "main_options",
  },
  {
    id: "review_info",
    message:
      "During review, our team analyzes the grievance and consults Minnal Murali for appropriate action. Anything else?",
    trigger: "main_options",
  },
  {
    id: "resolution_info",
    message:
      "Resolution involves direct action or providing guidance to address your grievance effectively. Anything else?",
    trigger: "main_options",
  },
  {
    id: "faq",
    message:
      "Here are some FAQs: 1. How long does it take to resolve? 2. Can I submit anonymously? Want to know more?",
    trigger: "faq_options",
  },
  {
    id: "faq_options",
    options: [
      {
        value: "resolve_time",
        label: "Resolution Time",
        trigger: "resolve_time",
      },
      {
        value: "anonymous",
        label: "Anonymous Submission",
        trigger: "anonymous_submission",
      },
      { value: "no", label: "No, thank you.", trigger: "main_options" },
    ],
  },
  {
    id: "resolve_time",
    message: "Resolutions typically take 3-5 business days. Anything else?",
    trigger: "main_options",
  },
  {
    id: "anonymous_submission",
    message:
      "Yes, you can submit anonymously, but we may have limited communication for updates. Anything else?",
    trigger: "main_options",
  },
];

const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, Helvetica, sans-serif",
  headerBgColor: "#ffdd00",
  headerFontColor: "#000",
  headerFontSize: "15px",
  botBubbleColor: "#ffdd00",
  botFontColor: "",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const CustomBotAvatar = () => (
  <img
    src={chatIcon}
    alt=" "
    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
  />
);
const CustomUserAvatar = () => (
  <img
    src={userAvatar}
    alt=" "
    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
  />
);

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef();

  // Toggle chatbot window
  const toggleChatbot = () => setIsOpen(!isOpen);

  // Close chatbot when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Chatbot Toggle Icon */}
      <div className="chat-icon bounce" onClick={toggleChatbot}>
        <img width={40} src={chatIcon} alt="" />
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container" ref={chatRef}>
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={steps}
              botAvatar={chatIcon}
              userAvatar={userAvatar}
            />
          </ThemeProvider>
        </div>
      )}
    </>
  );
};

export default SimpleChatbot;
