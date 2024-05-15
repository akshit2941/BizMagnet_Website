import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HomePage/HeroSection";
import SecondSection from "../components/HomePage/SecondSection";

const Home: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="pl-5p pr-5p">
        <Header />
      </div>

      {/* Hero Section */}
      <div>
        <HeroSection />
      </div>

      {/* Second Section */}
      <div>
        <SecondSection />
      </div>
    </div>
  );
}

export default Home;