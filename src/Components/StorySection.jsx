// StorySection.js
import React from "react";
import "./Component.css";
import minnalImg from "../assets/ma-icon.png";
import { Col, Container, Row } from "react-bootstrap";
const StorySection = () => {
    const chats = [
        { type: "user", text: "Um… who exactly are you, Mr. Superhero?" },
        {
          type: "hero",
          text: "🌩️ Well, hello there! I’m Minnal Murali, the superhero with the power of lightning! I zip around to help folks just like you. Need help? Just give me a shout!⚡",
        },
      
        { type: "user", text: "Ooooh, that’s cool! But... what are you doing here?" },
        {
          type: "hero",
          text: "🌩️ Great question! My mission is to make the world a bit better—one solved problem at a time. You tell me what’s wrong, and I go ‘Zoom!’ to make it right! 🌍",
        },
      
        { type: "user", text: "And how does this whole… ‘grievance thingy’ work?" },
        {
          type: "hero",
          text: "🌩️ Super simple! You send in your ‘grievance thingy’ (that’s your complaint), and I’ll take it from there! I’ll keep you posted along the way. 🚀",
        },
      
        { type: "user", text: "And how do I tell you about my problem?" },
        {
          type: "hero",
          text: "🌩️ Ah, that’s easy-peasy! Just hop over to the Grievance Submission page, fill out the details, and hit 'Submit.' Then, I get an alert on my hero dashboard! 📝",
        },
      
        { type: "user", text: "Okay, so… what kind of things can I tell you about?" },
        {
          type: "hero",
          text: "🌩️ Anything! Big, small, anything in between! Whether it’s a lost pet or a community issue, if you need a hero’s help, I’m your lightning guy! 🌟",
        },
      
        { type: "user", text: "Oh! And how will I know you’re working on it?" },
        {
          type: "hero",
          text: "🌩️ Great question! Once you submit, you’ll get a special ticket ID in your email (kind of like a secret code 🕵️). You can also see it in the app for a while to check on the status! 🏷️",
        },
      
        { type: "user", text: "So… how fast will you get back to me?" },
        {
          type: "hero",
          text: "🌩️ I’m lightning fast, so usually within 24 hours! If your problem’s urgent, I’ll make it top priority. Zip-zap, right on it! ⏰",
        },
      
        { type: "user", text: "You’re not sharing my info with bad guys, are you?" },
        {
          type: "hero",
          text: "🌩️ Oh, heavens no! Your info is locked up safe and sound. Only I see it—no bad guys allowed! 🔒",
        },
      
        { type: "user", text: "And how will you fix my problem?" },
        {
          type: "hero",
          text: "🌩️ I’ll use my superhero brain, my contacts, and maybe even my lightning powers! I come up with the best solution for every problem, just for you! 💡",
        },
      
        { type: "user", text: "Will I get updates, so I don’t have to keep guessing?" },
        {
          type: "hero",
          text: "🌩️ Of course! I’ll keep you posted every step of the way, so you’re never left wondering. 📬",
        },
      
        { type: "user", text: "What if my problem involves a lot of people?" },
        {
          type: "hero",
          text: "🌩️ Then we bring everyone together to work out a fair solution! The more, the merrier. Teamwork is key! 🧑‍🤝‍🧑",
        },
      
        { type: "user", text: "And… do you help with emergencies, too?" },
        {
          type: "hero",
          text: "🌩️ Absolutely! Emergencies are my specialty—lightning speed is perfect for quick responses! ⚡",
        },
      
        { type: "user", text: "So if I submit a grievance, what happens next?" },
        {
          type: "hero",
          text: "🌩️ After you submit, I get to work reviewing it, brainstorming a solution, and updating you along the way. Your ticket ID shows live updates! 💪",
        },
      
        { type: "user", text: "And if things are really hard, do you have other superhero friends to help?" },
        {
          type: "hero",
          text: "🌩️ You bet! When a problem’s big, I call on my fellow heroes. Together, we’re unstoppable! 🦸‍♂️🦸‍♀️",
        },
      ];
      
  return ( 

    <div className="container story py-5">
      <h3 className="text-center text-warning fw-bolder mb-4">
        Who?... What?... How?...
      </h3>
    
      <Row className="gx-4 gy-5">
        <Col md={7}>
          <div className="scroll-container p-3">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`chat-box d-flex ${
                  chat.type === "user" ? "justify-content-end" : "justify-content-start"
                } mb-3`}
              >
                <div
                  className={`p-3 rounded-4 ${
                    chat.type === "user" ? "bg-warning " : "bg-light text-dark"
                  }`}
                >
                  {chat.text}
                </div>
              </div>
            ))}
          </div>
        </Col>
        <Col
          md={5}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            style={{ width: "100%", maxWidth: "300px" }}
            src={minnalImg}
            alt=""
            className="img-fluid mt-4 mt-md-0"
          />
        </Col>
      </Row>
    </div>
  );
};

export default StorySection;
