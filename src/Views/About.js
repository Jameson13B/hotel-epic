import React from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className="relative">
        <h1
          className="text-[5rem] mt-[15%] font-cursive relative z-10"
          onClick={() => navigate("/")}
        >
          Hotel Epic
        </h1>
        <div className="arrow-up" />
      </div>
      <h2 className="text-[2rem] mb-[16px] mt-0 font-copperplate">About</h2>

      <p className="mb-[12px]">
        Join others in a themed meal to endulge in good food and good drinks.
        Amazing nights with awesome people enjoying:
      </p>
      <ul className="list-disc">
        <li className="text-left font-bold text-[0.9rem] mb-[8px] ml-[36px]">
          Tacos, Salsas, and Mojitos
        </li>
        <li className="text-left font-bold text-[0.9rem] mb-[8px] ml-[36px]">
          Pastas, Sourdough, and Wine
        </li>
        <li className="text-left font-bold text-[0.9rem] mb-[8px] ml-[36px]">
          Burgers, Chips, and Beer
        </li>
        <li className="text-left font-bold text-[0.9rem] mb-[8px] ml-[36px]">
          Island Snacks, Treats, and Rum Punch
        </li>
        <li className="text-left font-bold text-[0.9rem] mb-[8px] ml-[36px]">
          And Many Others
        </li>
      </ul>
      <p className="mt-[12px]">
        Events are hosted at homes, venues, restaurants, bars, etc. Be a part of
        an experience.
      </p>
    </React.Fragment>
  );
};
