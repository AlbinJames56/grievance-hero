import React from "react";
import Banner from "../Components/Banner";
import StorySection from "../Components/StorySection";
import Header from "../Components/Header";

function Home() {
  return (
    <div>
      <div>
        <Header/>
        <Banner />
        <StorySection />
      </div>
    </div>
  );
}

export default Home;
