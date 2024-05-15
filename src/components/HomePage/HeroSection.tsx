import React from "react";
import heroImage from "../../assets/image/hero-img-1.jpeg";

const HeroSection: React.FC = () => {
    return (
        <div>
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
                <div className="border rounded-xl p-6 static bg-slate-100">
                    {/* img */}
                    <img src={heroImage} alt="HeroImage" className="rounded-lg " />
                </div>
            </div>

            {/* Second Section */}
            <div className="pl-5p pr-5p mt-48 mb-10">
                <div className="flex border p-20 border-solid border-gray-300 rounded-3xl bg-[#f6fcff]">
                    <div className="flex flex-col text-center">
                        <h1 className="font-bold text-3xl text-[#294A5E]">
                            Advancing your marketing strategies
                        </h1>
                        <p className="text-xl text-[#294A5E] mt-6 p-3">Our team of experts is devoted to delivering state-of-the-art marketing solutions tailored to your business. We have the expertise to unlock new avenues of growth for your enterprise.</p>
                        <button className="text-[#457b9d] mt-8 text-lg hover:text-[#294A5E] transition duration-300">We Can Help!</button>
                    </div>

                    <div className="flex flex-col text-center">
                        <h1 className="font-bold text-3xl text-[#294A5E]">Growth through effective marketing</h1>
                        <p className="text-xl text-[#294A5E] mt-6 p-3">Our strategies revolve around your unique business needs and objectives. We pride ourselves in crafting personalized marketing campaigns that foster business growth and brand recognition.</p>
                        <button className="text-[#457b9d] mt-8 text-lg hover:text-[#294A5E] transition duration-300">Join Our Team!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;