import React from "react";
import Logo from '../assets/image/Logo.png';

const Header: React.FC = () => {
  return (
    <div>
      <nav className="flex mt-4">
        <div className=" flex-1">
          <img src={Logo} alt="" className="w-2/6 p-3 justify-center" />
        </div>
        <div className="flex-1 ">
          <ul className="flex flex-row text-center justify-center mt-4">
            <li className="p-3 px-8 font-semibold text-lg text-[#457b9d] cursor-pointer mt-1">Services</li>
            <li className="p-3 px-8 font-semibold text-lg text-[#457b9d] cursor-pointer mt-1">About</li>
            <li className="p-3 px-8 font-semibold text-lg text-[#457b9d] cursor-pointer mt-1">Portfolio</li>
            <li className="p-3 px-8 font-semibold text-lg text-[#457b9d] cursor-pointer mt-1">Pricing</li>
            <li className="p-3 px-8 font-semibold text-lg text-[#457b9d] cursor-pointer mt-1">More</li>
          </ul>
        </div>
        <div className="flex-1  text-end mt-3 ">
          <button className="bg-[#457b9d] text-white p-2 m-3 mr-28 rounded-md font-semibold text-lg w-31">Contact</button>
        </div>
      </nav>
    </div>
  )
}

export default Header;