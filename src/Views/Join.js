import React from "react";
import { useNavigate } from "react-router-dom";
import { EVENTS } from "../data";

export const Join = () => {
  const navigate = useNavigate();
  const nextEvent = EVENTS.filter((e) => e.next)[0];

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
      <h2 className="text-[2rem] mb-[16px] mt-0 font-copperplate">Join Us</h2>

      <div className="border border-white rounded-[16px] p-[16px] mt-[16px] max-w-[500px]">
        <h3 className="text-[2rem] font-cursive font-bold">{nextEvent.name}</h3>
        <div className="flex justify-between align-center mx-[12px] mt-[-4px]">
          {nextEvent.host && (
            <p className="text-[0.9rem] mt-[-4px] italic">
              Hosted by {nextEvent.host}
            </p>
          )}
          <p className="text-[0.9rem] mt-[-4px] italic">
            <strong>When:</strong> {nextEvent.date}
          </p>
        </div>
        <p className="text-[0.9rem] mt-[12px] italic">
          <strong>Details:</strong> {nextEvent.details}
        </p>
        <p className="text-[0.9rem] mt-[16px] italic flex justify-evenly">
          <strong>Food Price: ${nextEvent.food_price}</strong>
          <strong>Drink Price: ${nextEvent.drink_price}</strong>
        </p>
        <button
          className="border border-2 border-white rounded-[8px] mt-[16px] mb-[8px] p-[6px] font-bold text-[0.8rem] w-3/4 max-w-[300px]"
          onClick={() => navigate("form")}
        >
          Interested in Event?
        </button>
      </div>
      <h4 class="mt-[12px] font-bold">Previous Events:</h4>
      {EVENTS.filter((e) => !e.next).map((event) => (
        <div
          className="border border-white rounded-[16px] p-[16px] my-[8px] w-full max-w-[500px]"
          key={event.name}
        >
          <h4 className="margin-0">{event.name}</h4>
        </div>
      ))}
    </React.Fragment>
  );
};
