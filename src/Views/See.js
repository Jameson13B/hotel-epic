import React from "react";
import { useNavigate } from "react-router-dom";

export const See = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div class="relative">
        <h1
          className="text-[5rem] mt-[15%] font-cursive relative z-10"
          onClick={() => navigate("/")}
        >
          Hotel Epic
        </h1>
        <div class="arrow-up" />
      </div>
      <h2 className="text-[2rem] mb-[16px] mt-0 font-copperplate">See</h2>

      <p>A gallery of past events will be here.</p>
    </React.Fragment>
  );
};
