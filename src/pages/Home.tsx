import React from "react";
import Header from "../components/Header";
import heroImage from "../assets/image/hero-img-1.jpeg";

const Home: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="pl-5p pr-5p">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="flex pl-5p pr-5p mt-28">
        <div className="p-12">
          {/* Content+Button */}
          <div>
            {/* Content */}
            <h1 className="text-[#294A5E] text-7xl font-bold">
              Elevate your business with precision and prowess
            </h1>
            <p className="text-[#294A5E] text-xl mt-8 tracking-wider" >
              Through the application of advanced marketing techniques, we strive to revolutionize the way businesses approach their customers. Our team ensures that your business story resonates profoundly within your targeted audience.
            </p>
          </div>
          <div className="mt-8 flex ">
            <button className=" h-12 gap-x-1.5 text-white text-center cursor-pointer bg-[#457b9d] border border-[#457b9d] rounded-lg justify-center items-center text-base font-medium leading-none no-underline flex w-28">
              Get Started
            </button>
            <button className=" text-lg font-medium ml-6 text-[#457b9d]">
              Discover More→</button>
          </div>
        </div>

        {/* Image */}
        <div className="border rounded-xl p-6 static">
          {/* img */}
          <img src={heroImage} alt="HeroImage" className="rounded-lg " />
        </div>
      </div>
    </div>
  );
}

export default Home;