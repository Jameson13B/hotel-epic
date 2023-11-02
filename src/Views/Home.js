import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Home.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <h1 className="text-[5rem] mt-[15%] font-cursive">Hotel Epic</h1>
      <h2 className="text-[2rem] mb-[48px] mt-0 font-copperplate">
        Supper Club
      </h2>
      <div className="border border-white divide-y divide-white flex flex-col px-[12px]">
        <button
          className="text-[1.5rem] p-[16px]"
          onClick={() => navigate("/about")}
        >
          About
        </button>
        <button
          className="text-[1.5rem] p-[16px]"
          onClick={() => navigate("/see")}
        >
          See
        </button>
        <button
          className="text-[1.5rem] p-[16px]"
          onClick={() => navigate("/join")}
        >
          Join
        </button>
      </div>
    </React.Fragment>
  );
};
