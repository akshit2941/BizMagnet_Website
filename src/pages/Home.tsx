import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HomePage/HeroSection";

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
    </div>
  );
}

export default Home;