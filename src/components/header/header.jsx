import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; 
import Buttons from "../buttons/buttons";

export default function Header() {
  const [active, setActive] = useState(false);

  return (
    <header className="w-full">
      <div className="hidden md:flex items-center justify-between w-full">
        <div>
          <img src={logo} alt="img" />
        </div>
        <ul className="flex gap-4">
          <li>
            <a href="#" className="text-black hover:text-gray-400 font-semibold">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-400 font-semibold">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-400 font-semibold">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-400 font-semibold">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-400 font-semibold">
              Community
            </a>
          </li>
        </ul>
        <Buttons value={"Get Started"}/>
      </div>

      <div className="md:hidden flex justify-between w-full relative">
        <div>
          <img src={logo} alt="img" />
        </div>

        <div
          className={`absolute h-screen left-0 w-full pt-10 bg-gradient-to-b from-[rgba(255,255,255,0.4)] to-[rgba(0,0,0,0.4)] transform duration-300 transition-all ease-linear ${
            active ? "translate-y-0" : "-translate-y-[120%]"
          }`}
        >
          <ul className="flex gap-4 flex-col w-[90%] py-4 px-2 mx-auto justify-center items-center bg-white mt-5">
            <li>
              <a href="#" className="text-black hover:text-gray-400 font-semibold">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-400 font-semibold">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-400 font-semibold">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-400 font-semibold">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-400 font-semibold">
                Community
              </a>
            </li>
          </ul>
        </div>

        <button className="z-20" onClick={() => setActive(!active)}>
          {active ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
