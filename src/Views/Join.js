import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Join.css";
import { EVENTS } from "../data";

export const Join = () => {
  const navigate = useNavigate();
  const nextEvent = EVENTS.filter((e) => e.next)[0];

  return (
    <React.Fragment>
      <h1
        className="text-[5rem] mt-[15%] font-cursive"
        onClick={() => navigate("/")}
      >
        Hotel Epic
      </h1>
      <h2 className="text-[2rem] mb-[16px] mt-0 font-copperplate">Join Us</h2>

      <div className="join-card">
        <h3 className="join-card-header">{nextEvent.name}</h3>
        {nextEvent.host && (
          <p className="join-card-paragraph join-host-label">
            Hosted by {nextEvent.host}
          </p>
        )}
        <p className="join-card-paragraph join-price-row">
          <strong>Food Price: ${nextEvent.food_price}</strong>
          <strong>Drink Price: ${nextEvent.drink_price}</strong>
        </p>
        <p className="join-card-paragraph">
          <strong>When:</strong> {nextEvent.date}
        </p>
        <p className="join-card-paragraph">
          <strong>Details:</strong> {nextEvent.details}
        </p>
        <button
          className="tiny-btn mobile-full-width-btn"
          onClick={() => navigate("form")}
        >
          Interested in Event?
        </button>
      </div>
      <h4>Previous Events:</h4>
      {EVENTS.filter((e) => !e.next).map((event) => (
        <div className="join-card join-prev-card" key={event.name}>
          <h4 className="join-card-alt-header">{event.name}</h4>
        </div>
      ))}
    </React.Fragment>
  );
};
