import React from "react";
import Banner from "../Components/Banner";
import StorySection from "../Components/StorySection"; 
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <div>
        <Banner />
        <StorySection />
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
