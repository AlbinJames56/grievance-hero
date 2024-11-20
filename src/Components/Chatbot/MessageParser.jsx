const MessageParser = ({ actions }) => {
    const parse = (message) => {
      if (message.toLowerCase().includes("new grievance")) {
        actions.handleNewGrievance();
      } else if (message.toLowerCase().includes("status")) {
        actions.handleGrievanceStatus();
      } else {
        actions.handleUnknown();
      }
    };
  
    return { parse };
  };
  
  export default MessageParser;
  