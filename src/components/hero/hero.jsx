import React from "react";
import img from '../../assets/hero.png'
import Buttons from "../buttons/buttons";

export default function Hero() {
  return (
    <div className="flex justify-center flex-col-reverse md:flex-row">
      <div className="flex flex-col gap-4 justify-center items-start w-full">
        <h1 className=" md:w-[80%] w-full font-bold text-[rgba(36,45,82,1)] text-4xl md:text-6xl">Bring everyone together to build better products.</h1>
        <p className="md:w-1/2 text-gray-500">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Buttons value="Get Started" />
      </div>
      <div className="w-full">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
