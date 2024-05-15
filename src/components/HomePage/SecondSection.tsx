import React from "react";

const SecondSection: React.FC = () => {
    return (
        <div>
            <div className="pl-5p pr-5p mt-12 mb-16">
                <div className="text-2xl font-semibold text-[#294A5E] font-montserrat ">
                    SERVICES
                </div>
                <div>
                    <h1 className="text-[#294A5E] text-5xl font-bold mt-8">Unveiling our expertise</h1>
                    <p className="text-[#457b9d] text-2xl mt-6 text-wrap mr-96 pr-96">We offer a comprehensive suite of marketing services, ensuring your business stands out in a competitive landscape.</p>
                </div>

            </div>


            <div className="pl-5p pr-5p mt-12 mb-16">
                <div className="flex flex-row  border pt-0 p-2 border-solid border-gray-300 rounded-3xl bg-[#f6fcff] shadow-custom">
                    <div className="flex flex-col justify-start align-middle p-8">
                        <div className="text-9xl font-extrabold text-[#457B9D] font-montserrat">01</div>
                        <h1 className="text-3xl font-extrabold text-[#294A82]">STRATEGY</h1>
                        <p className="text-xl mr-6 mt-4">Our team creates robust marketing strategies that captivate your target audience and drive business growth.</p>
                    </div>
                    <div className="flex flex-col justify-start align-middle p-8">
                        <div className="text-9xl font-extrabold text-[#457B9D] font-montserrat">02</div>
                        <h1 className="text-3xl font-extrabold text-[#294A82]">CONTENT</h1>
                        <p className="text-xl mr-6 mt-4">We specialize in creating compelling content that captivates attention and drives a lot of engagement.</p>
                    </div>
                    <div className="flex flex-col justify-start align-middle p-8">
                        <div className="text-9xl font-extrabold text-[#457B9D] font-montserrat">03</div>
                        <h1 className="text-3xl font-extrabold text-[#294A82]">DIGITAL</h1>
                        <p className="text-xl mr-6 mt-4">Leverage the power of digital marketing with our expertise in SEO, social media, and online advertising.</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="pl-5p pr-5p mt-44 mb-16">
                    <div className="text-2xl font-semibold text-[#294A5E] font-montserrat ">
                        ABOUT
                    </div>
                    <div className="flex flex-row">
                        <div>
                            <h1 className="text-[#294A5E] text-6xl font-bold mt-8">Unleashing growth through proven strategies</h1>
                        </div>
                        <div className="w-3/5 ">
                            <p className="text-xl tracking-wide">With an array of skills and a relentless pursuit of excellence, we devise marketing strategies that drive results. Our commitment is to help businesses thrive in an ever-changing digital landscape.</p>
                            <div className="flex flex-row mt-7">
                                <div>
                                    <h1 className="text-[#294A5E] text-2xl font-bold mt-4">Our vision</h1>
                                    <p className="text-xl pr-3 tracking-wide">We aim to revolutionize marketing strategies, creating value and growth for businesses worldwide.</p>
                                </div>
                                <div>
                                    <h1 className="text-[#294A5E] text-2xl font-bold mt-4">
                                        Our approach
                                    </h1>
                                    <p className="text-xl pr-3 tracking-wide">We develop tailored marketing solutions that cater to your unique business needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default SecondSection;