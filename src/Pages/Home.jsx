import React from "react";
import Banner from "../Components/Banner";
import StorySection from "../Components/StorySection"; 
import Footer from "../Components/Footer"; 
// import ChatBot from "../Components/Chatbot/ChatBot";
import SimpleChatbot from "../Components/SimpleChatBot";

function Home() {
  return (
    <div>
      <div>
        <Banner />
        <StorySection />
        <SimpleChatbot/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
