import React from "react";

const ThirdSection: React.FC = () => {
    return (
        <div>
            <div className="pl-5p pr-5p">
                <div className="text-6xl font-bold text-[#294A5E]">
                    Milestones and achievements
                </div>
                <div className="text-[#294A5E] text-xl mt-4">
                    Over the years, we've helped numerous businesses grow and establish their brand presence.
                </div>
                <div className="flex flex-row  border pt-0 p-2 border-solid border-gray-300 rounded-3xl bg-[#f6fcff] shadow-custom">
                    <div>
                        <h1>6.7K</h1>
                        <p>Successful campaigns</p>
                    </div>
                    <div>
                        <h1>3.2K+</h1>
                        <p>Content created</p>
                    </div>
                    <div>
                        <h1>500+</h1>
                        <p>Satisfied clients</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection;